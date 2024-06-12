#include <esp_check.h>
#include <esp_http_server.h>
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

//                                                                                                //
// ================================== WiFi Connection and Auth ================================== //
//                                                                                                //

namespace wifi {
static EventGroupHandle_t s_event_group;
static const int CONNECTED_BIT = BIT0;
static const int FAIL_BIT = BIT1;

static const char* TAG = "wifi connection";
static int s_max_retries = 0;
static int s_retry_num = 0;

/**
 * Handle events that occur during wifi connection. This will set the appropriate `s_event_group`
 * bits on success or failure.
 *
 * @param[in] arg Unused.
 * @param[in] event_base The type of event that occurred.
 * @param[in] event_id The specific event that occured.
 * @param[in] event_data Data associated with the event.
 */
static void event_handler(void* arg, esp_event_base_t event_base, int32_t event_id,
                          void* event_data) {
    (void)arg;

    if (event_base == WIFI_EVENT && event_id == WIFI_EVENT_STA_START) {
        esp_wifi_connect();
    } else if (event_base == WIFI_EVENT && event_id == WIFI_EVENT_STA_DISCONNECTED) {
        ESP_LOGW(TAG, "Disconnected from AP");
        if (s_retry_num < s_max_retries || s_max_retries == 0) {
            esp_wifi_connect();
            ++s_retry_num;
            ESP_LOGI(TAG, "Retrying connection");
        } else {
            xEventGroupSetBits(s_event_group, FAIL_BIT);
        }
    } else if (event_base == IP_EVENT && event_id == IP_EVENT_STA_GOT_IP) {
        ip_event_got_ip_t* event = static_cast<ip_event_got_ip_t*>(event_data);
        ESP_LOGI(TAG, "Got IP: " IPSTR, IP2STR(&event->ip_info.ip));
        s_retry_num = 0;
        xEventGroupSetBits(s_event_group, CONNECTED_BIT);
    }
}

esp_err_t connect(const char* ssid, const char* pass, int max_retries) {
    ESP_LOGD(TAG, "Starting wifi...");
    ESP_RETURN_ON_FALSE(s_event_group == nullptr, ESP_ERR_INVALID_STATE, TAG,
                        "Tried to connect while connection was already in progress");
    s_max_retries = max_retries;
    s_event_group = xEventGroupCreate();

    // Init TCP/IP stack.
    ESP_LOGV(TAG, "Initializing TCP/IP stack");
    ESP_RETURN_ON_ERROR(esp_netif_init(), TAG, "Failed to init TCP/IP stack");

    // Make sure default event loop has been started.
    ESP_LOGV(TAG, "Starting default event loop");
    ESP_RETURN_ON_ERROR(
        [&] {
            const esp_err_t e = esp_event_loop_create_default();
            if (e == ESP_ERR_INVALID_STATE) {
                ESP_LOGD(TAG, "Default event loop already started");
                return ESP_OK;
            } else {
                return e;
            }
        }(),
        TAG, "Failed to start default event loop");

    // Init MDNS.
    ESP_LOGV(TAG, "Initializing MDNS");
    ESP_RETURN_ON_ERROR(mdns_init(), TAG, "Failed to init MDNS");
    ESP_RETURN_ON_ERROR(mdns_hostname_set(CONFIG_LWIP_LOCAL_HOSTNAME), TAG,
                        "Failed to set MDNS hostname (" CONFIG_LWIP_LOCAL_HOSTNAME ")");
    ESP_RETURN_ON_ERROR(mdns_service_add(nullptr, "_http", "_tcp", 80, nullptr, 0), TAG,
                        "Failed to add MDNS HTTP service");
    ESP_LOGD(TAG, "MDNS initialized with hostname " CONFIG_LWIP_LOCAL_HOSTNAME);

    // Create default wifi station.
    ESP_LOGV(TAG, "Creating default wifi station");
    esp_netif_create_default_wifi_sta();

    // Init wifi.
    ESP_LOGV(TAG, "Initializing wifi");
    ESP_RETURN_ON_ERROR(
        [&] {
            wifi_init_config_t config = WIFI_INIT_CONFIG_DEFAULT();
            return esp_wifi_init(&config);
        }(),
        TAG, "Failed to init wifi");

    // Setup event handlers.
    ESP_LOGV(TAG, "Setting up event handlers");
    ESP_RETURN_ON_ERROR(esp_event_handler_instance_register(WIFI_EVENT, ESP_EVENT_ANY_ID,
                                                            &event_handler, nullptr, nullptr),
                        TAG, "Failed to init event handler for WIFI_EVENT");
    ESP_RETURN_ON_ERROR(esp_event_handler_instance_register(IP_EVENT, IP_EVENT_STA_GOT_IP,
                                                            &event_handler, nullptr, nullptr),
                        TAG, "Failed to init event handler for IP_EVENT_STA_GOT_IP");

    // Start wifi.
    ESP_LOGV(TAG, "Starting wifi");
    ESP_RETURN_ON_ERROR(
        [&] {
            wifi_config_t config = {};
            config.sta.threshold.authmode = WIFI_AUTH_WPA2_PSK;
            config.sta.sae_pwe_h2e = WPA3_SAE_PWE_BOTH;
            strncpy(reinterpret_cast<char*>(config.sta.ssid), ssid, sizeof(config.sta.ssid));
            strncpy(reinterpret_cast<char*>(config.sta.password), pass,
                    sizeof(config.sta.password));

            ESP_RETURN_ON_ERROR(esp_wifi_set_mode(WIFI_MODE_STA), TAG, "Failed to set wifi mode");
            ESP_RETURN_ON_ERROR(esp_wifi_set_config(WIFI_IF_STA, &config), TAG,
                                "Failed to set wifi config");
            return esp_wifi_start();
        }(),
        TAG, "Failed to start wifi");

    // Wait until connection finishes (either due to success or failure);
    ESP_LOGD(TAG, "Wifi started; connecting to %s", ssid);
    ESP_LOGV(TAG, "Waiting for event bits");
    EventBits_t bits =
        xEventGroupWaitBits(s_event_group, CONNECTED_BIT | FAIL_BIT, pdFAIL, pdFAIL, portMAX_DELAY);

    // Connection has finished; handle the result.
    if (bits & CONNECTED_BIT) {
        ESP_LOGI(TAG, "Connected to %s", ssid);
        return ESP_OK;
    } else if (bits & FAIL_BIT) {
        ESP_LOGE(TAG, "Failed to connect to %s", ssid);
        return ESP_ERR_WIFI_NOT_CONNECT;
    } else {
        ESP_LOGE(TAG, "Unexpected event");
        return ESP_ERR_INVALID_RESPONSE;
    }

    return ESP_OK;
}
};  // namespace wifi

//                                                                                                //
// ========================================= Webserver ========================================== //
//                                                                                                //

namespace webserver {
static const char* TAG = "webserver";

QueueHandle_t recv_queue = nullptr;
StreamBufferHandle_t recv_buffer = nullptr;

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
    if (out_server == nullptr) return ESP_ERR_INVALID_ARG;

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
    recv_queue = xQueueCreate(32, sizeof(int));
    recv_buffer = xStreamBufferCreate(8000, 7500);

    const httpd_config_t config = HTTPD_DEFAULT_CONFIG();

    ESP_LOGD(TAG, "Starting webserver on port %d", config.server_port);
    ESP_RETURN_ON_ERROR(httpd_start(out_server, &config), TAG, "Failed to start webserver");
    ESP_LOGD(TAG, "Registering URI handlers");
    ESP_RETURN_ON_ERROR(httpd_register_uri_handler(*out_server, &ws_uri_handler), TAG,
                        "Failed to register websocket server URI handler");
    ESP_LOGI(TAG, "Started webserver on port %d", config.server_port);
    return ESP_OK;
}

esp_err_t stop_webserver(const httpd_handle_t server) {
    ESP_LOGD(TAG, "Stopping webserver");
    ESP_RETURN_ON_ERROR(httpd_stop(server), TAG, "Failed to stop webserver");
    ESP_LOGI(TAG, "Stopped webserver");
    return ESP_OK;
}

};  // namespace webserver