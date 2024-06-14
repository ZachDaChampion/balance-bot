#include <esp_check.h>
#include <esp_log.h>
#include <esp_system.h>
#include <esp_wifi.h>
#include <freertos/FreeRTOS.h>
#include <freertos/event_groups.h>
#include <freertos/task.h>
#include <mdns.h>
#include <string.h>

#include <networking.hpp>

using namespace std;

namespace webserver {
static const char* TAG = "webserver";

static SemaphoreHandle_t can_start_webserver = nullptr;
static SemaphoreHandle_t active_connection = nullptr;
QueueHandle_t recv_queue = nullptr;
StreamBufferHandle_t recv_buffer = nullptr;
static StreamBufferHandle_t send_buffer = nullptr;
static int fd = -1;

/**
 * URI handler for the WebSocket Server. This function is primarily responsible for populating the
 * `recv_queue` and `recv_buffer` with received messages.
 *
 * @param[in] req The request object.
 * @return The result of the operation.
 */
static esp_err_t wss_handler(httpd_req_t* req) {
    // Handle WSS opening handshake.
    if (req->method == HTTP_GET) {
        if (xSemaphoreTake(active_connection, 0) == pdTRUE) {
            ESP_LOGW(
                TAG,
                "Replacing an active WebSocket connection. It will not be automatically closed.");
        }
        fd = httpd_req_to_sockfd(req);
        ESP_RETURN_ON_FALSE(xSemaphoreGive(active_connection) == pdTRUE, ESP_ERR_INVALID_STATE, TAG,
                            "WS handshake failed; cannot give `active_connection` semaphore");
        ESP_LOGI(TAG, "WebSocket connection has opened");
        return ESP_OK;
    }

    // Get the length of the new frame.
    httpd_ws_frame_t frame;
    frame.len = 0;
    ESP_RETURN_ON_ERROR(httpd_ws_recv_frame(req, &frame, 0), TAG,
                        "Failed to receive frame length from WebSocket");
    ESP_LOGV(TAG, "Receiving frame with length %d", frame.len);

    // If we have a frame with a nonzero length, actually receive it.
    if (frame.len == 0) {
        ESP_LOGE(TAG, "Received frame with length 0");
        return ESP_ERR_INVALID_ARG;
    }

    // Reserve some memory for the data. We reserve one extra byte in case we recieve text
    // messages; we need a null terminator. These are not officially supported, but we want to
    // handle them gracefully and report a proper warning.
    uint8_t* buffer = static_cast<uint8_t*>(calloc(1, frame.len + 1));
    if (buffer == nullptr) {
        ESP_LOGE(TAG, "Failed to calloc memory for buffer");
        return ESP_ERR_NO_MEM;
    }

    // Receive the data into our new buffer.
    frame.payload = buffer;
    ESP_RETURN_ON_ERROR(
        [&] {
            const esp_err_t ret = httpd_ws_recv_frame(req, &frame, frame.len);
            if (ret != ESP_OK) free(buffer);
            return ESP_OK;
        }(),
        TAG, "Failed to receive frame data from WebSocket");
    ESP_LOGV(TAG, "Received frame with length %d", frame.len);

    // We do not support fragmented frames.
    if (frame.fragmented) {
        ESP_LOGE(TAG, "Received fragmented frame");
        free(buffer);
        return ESP_ERR_INVALID_ARG;
    }

    // Verify that we have a binary frame.
    switch (frame.type) {
        case HTTPD_WS_TYPE_BINARY:
            break;
        case HTTPD_WS_TYPE_TEXT:
            frame.payload[frame.len] = '\0';
            ESP_LOGE(TAG, "Received text frame: '%s'", frame.payload);
            free(buffer);
            return ESP_ERR_INVALID_ARG;
        default:
            ESP_LOGE(TAG, "Received frame of invalid type %d", frame.type);
            free(buffer);
            return ESP_ERR_INVALID_ARG;
    }

    // Ensure there is enough room in the queue.
    if (uxQueueSpacesAvailable(recv_queue) < 1) {
        ESP_LOGE(TAG, "No space in queue for new data");
        free(buffer);
        return ESP_ERR_NO_MEM;
    }

    // Send the data to the stream buffer.
    ESP_RETURN_ON_ERROR(
        [&] {
            const size_t written = xStreamBufferSend(recv_buffer, frame.payload, frame.len, 0);
            free(buffer);
            if (written != frame.len) {
                ESP_LOGE(TAG, "Failed to send data to stream buffer");
                return ESP_ERR_NO_MEM;
            }
            return ESP_OK;
        }(),
        TAG, "Failed to write data to stream buffer");

    // Send the data size to the queue. This should never fail, as we already checked the queue for
    // available space.
    ESP_ERROR_CHECK([&] {
        const auto ret = xQueueSend(recv_queue, &frame.len, 0);
        if (ret != pdTRUE) ESP_LOGE(TAG, "Failed to send data size to queue (fatal)");
        return ret;
    }());

    return ESP_OK;
}

esp_err_t start_webserver(httpd_handle_t* out_server) {
    esp_err_t ret = ESP_OK;

    // Make sure semaphores are properly configured.
    if (out_server == nullptr) return ESP_ERR_INVALID_ARG;
    if (can_start_webserver == nullptr) {
        can_start_webserver = xSemaphoreCreateBinary();
        xSemaphoreGive(can_start_webserver);
    }
    if (active_connection == nullptr) {
        active_connection = xSemaphoreCreateBinary();
    }
    xSemaphoreTake(active_connection, 0);

    // We only want one webserver at a time.
    ESP_RETURN_ON_FALSE(xSemaphoreTake(can_start_webserver, 0), ESP_ERR_INVALID_STATE, TAG,
                        "Cannot start webserver; a webserver already exists");

    static const auto ws_uri_handler = [&] {
        httpd_uri_t ws = {};
        ws.uri = "/ws";
        ws.method = HTTP_GET;
        ws.handler = wss_handler;
        ws.user_ctx = nullptr;
        ws.is_websocket = true;
        return ws;
    }();

    if (recv_queue != nullptr) vQueueDelete(recv_queue);
    if (recv_buffer != nullptr) vStreamBufferDelete(recv_buffer);
    if (send_buffer != nullptr) vStreamBufferDelete(send_buffer);
    recv_queue = xQueueCreate(32, sizeof(int));
    recv_buffer = xStreamBufferCreate(8000, 7500);
    send_buffer = xStreamBufferCreate(8000, 7500);

    const httpd_config_t config = HTTPD_DEFAULT_CONFIG();

    ESP_LOGD(TAG, "Starting webserver on port %d", config.server_port);
    ESP_GOTO_ON_ERROR(httpd_start(out_server, &config), error, TAG, "Failed to start webserver");
    ESP_LOGD(TAG, "Registering URI handlers");
    ESP_GOTO_ON_ERROR(httpd_register_uri_handler(*out_server, &ws_uri_handler), error, TAG,
                      "Failed to register websocket server URI handler");
    ESP_LOGI(TAG, "Started webserver on port %d", config.server_port);
    return ESP_OK;

error:
    xSemaphoreGive(can_start_webserver);
    httpd_stop(out_server);
    return ret;
}

esp_err_t stop_webserver(const httpd_handle_t server) {
    ESP_LOGD(TAG, "Stopping webserver");
    xSemaphoreTake(active_connection, 0);
    xSemaphoreGive(can_start_webserver);
    ESP_RETURN_ON_ERROR(httpd_stop(server), TAG, "Failed to stop webserver");
    ESP_LOGI(TAG, "Stopped webserver");
    return ESP_OK;
}

esp_err_t send_sync(const httpd_handle_t server, uint8_t* data, size_t len) {
    esp_err_t ret = ESP_OK;
    httpd_ws_frame_t frame = {};

    ESP_RETURN_ON_FALSE(xSemaphoreTake(active_connection, 0), ESP_ERR_INVALID_STATE, TAG,
                        "Cannot send; no active connection");
    ESP_GOTO_ON_FALSE(fd != -1, ESP_ERR_INVALID_STATE, cleanup, TAG, "File descriptor not set");

    frame.type = HTTPD_WS_TYPE_BINARY;
    frame.payload = data;
    frame.len = len;
    frame.final = true;
    frame.fragmented = false;

    ESP_GOTO_ON_ERROR(httpd_ws_send_data(server, fd, &frame), cleanup, TAG, "Failed to send");

cleanup:
    xSemaphoreGive(active_connection);
    return ret;
}

};  // namespace webserver