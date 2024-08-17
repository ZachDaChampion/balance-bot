#include "WebSocketServer.hpp"

#include <esp_check.h>

esp_err_t WebSocketServer::wss_handler(httpd_req_t* req) {
    esp_err_t ret = ESP_OK;
    WebSocketServer* wss = static_cast<WebSocketServer*>(req->user_ctx);

    // Handle WSS opening handshake.
    if (req->method == HTTP_GET) {
        const ConnectionEvent event = [&] {
            ConnectionEvent event = {};
            event.type = ConnectionEvent::CONNECT;
            event.fd = httpd_req_to_sockfd(req);
            return event;
        }();
        ESP_RETURN_ON_FALSE(xQueueSend(wss->fd_queue, &event, 0) != pdTRUE, ESP_ERR_NO_MEM,
                            wss->log_tag, "Failed to send connection event to queue");
        ESP_LOGI(wss->log_tag, "WebSocket connection has opened");
        return ESP_OK;
    }

    // Get the length of the new frame.
    httpd_ws_frame_t frame;
    frame.len = 0;
    ESP_RETURN_ON_ERROR(httpd_ws_recv_frame(req, &frame, 0), wss->log_tag,
                        "Failed to receive frame length from WebSocket");
    ESP_LOGV(wss->log_tag, "Receiving frame with length %d", frame.len);

    if (frame.len == 0) {
        ESP_LOGE(wss->log_tag, "Received frame with length 0");
        return ESP_ERR_INVALID_ARG;
    }

    // Reserve some memory for the data. We first try on the stack, since dynamic allocation is slow
    // and all messages *should* be relatively small. If the message will not fit in the stack
    // buffer, we fallback to malloc. We reserve one extra byte to ensure that text messages have
    // a null terminator and can be displayed properly in error messages.
    uint8_t stack_buf[128];
    uint8_t* buffer = frame.len + 1 > sizeof(stack_buf)
                          ? static_cast<uint8_t*>(malloc(frame.len + 1))
                          : stack_buf;
    if (buffer == nullptr) {
        ESP_LOGE(wss->log_tag, "Failed to calloc memory for buffer");
        return ESP_ERR_NO_MEM;
    }

    // Receive the data into our new buffer.
    frame.payload = buffer;
    ESP_GOTO_ON_ERROR(httpd_ws_recv_frame(req, &frame, frame.len), cleanup, wss->log_tag,
                      "Failed to receive frame data from WebSocket");
    ESP_LOGV(wss->log_tag, "Received frame with length %d", frame.len);

    // Verify that we have a binary frame.
    switch (frame.type) {
        case HTTPD_WS_TYPE_BINARY:
            break;
        case HTTPD_WS_TYPE_TEXT:
            frame.payload[frame.len] = '\0';
            ESP_LOGE(wss->log_tag, "Received text frame: '%s'", frame.payload);
            free(buffer);
            return ESP_ERR_INVALID_ARG;
        default:
            ESP_LOGE(wss->log_tag, "Received non-binary frame");
            free(buffer);
            return ESP_ERR_INVALID_ARG;
    }

    // Write the message to the buffer.
    ESP_GOTO_ON_FALSE(xStreamBufferSend(wss->recv_buffer, buffer, frame.len, 0) == frame.len,
                      ESP_ERR_NO_MEM, cleanup, wss->log_tag, "Failed to write message to buffer");

cleanup:
    if (buffer != stack_buf) free(buffer);
    return ret;
}

WebSocketServer::WebSocketServer(const char* log_tag, size_t fd_queue_size)
    : log_tag(log_tag), fd_queue(xQueueCreate(fd_queue_size, sizeof(ConnectionEvent))) {}

WebSocketServer::~WebSocketServer() { vQueueDelete(fd_queue); }

esp_err_t WebSocketServer::start(Locked<WifiConnection>& connection) {
    esp_err_t ret = ESP_OK;
    ESP_LOGD(log_tag, "Starting");

    ESP_RETURN_ON_FALSE(!is_active, ESP_ERR_INVALID_STATE, log_tag, "WSS is already active");
    ESP_RETURN_ON_FALSE(connection.exists(), ESP_ERR_INVALID_ARG, log_tag,
                        "The wifi connection is an empty lock");
    WifiConnection conn = *connection;

    // Check if connection is active.
    ESP_RETURN_ON_FALSE(conn.is_active, ESP_ERR_WIFI_NOT_INIT, log_tag,
                        "Cannot start WSS; wifi connection is inactive");

    // Create config.
    static const httpd_uri_t ws_uri_handler = [&] {
        httpd_uri_t ws = {};
        ws.uri = "/ws";
        ws.method = HTTP_GET;
        ws.handler = wss_handler;
        ws.user_ctx = this;
        ws.is_websocket = true;
        return ws;
    }();
    const httpd_config_t config = HTTPD_DEFAULT_CONFIG();

    // Connect.
    ESP_LOGD(log_tag, "Starting webserver on port %d", config.server_port);
    ESP_RETURN_ON_ERROR(httpd_start(&http_server, &config), log_tag, "Failed to start webserver");
    ESP_LOGD(log_tag, "Registering URI handlers");
    ESP_GOTO_ON_ERROR(httpd_register_uri_handler(http_server, &ws_uri_handler), error, log_tag,
                      "Failed to register websocket server URI handler");
    ESP_LOGI(log_tag, "Started webserver on port %d", config.server_port);
    return ESP_OK;

error:
    httpd_stop(http_server);
    return ret;
}

esp_err_t WebSocketServer::stop() {
    ESP_LOGD(log_tag, "Stopping webserver");
    if (is_active) {
        ESP_RETURN_ON_ERROR(httpd_stop(http_server), log_tag, "Failed to stop webserver");
    } else {
        ESP_LOGD(log_tag, "Webserver is already stopped");
    }
    ESP_LOGI(log_tag, "Stopped webserver");
    return ESP_OK;
}

esp_err_t WebSocketServer::send_sync(uint8_t* data, size_t len) {
    ESP_RETURN_ON_FALSE(is_active, ESP_ERR_INVALID_STATE, log_tag, "WSS is inactive");

    // Cycle file descriptors. This will close all old FDs and set the most recent one as active.
    while (uxQueueMessagesWaiting(fd_queue)) {
        ConnectionEvent event;
        xQueueReceive(fd_queue, &event, 0);
        if (event.type == ConnectionEvent::DISCONNECT && event.fd == fd) fd = -1;
        if (event.type == ConnectionEvent::CONNECT) {
            if (fd != -1) httpd_sess_trigger_close(http_server, fd);
            fd = event.fd;
        }
    }
    ESP_RETURN_ON_FALSE(fd != -1, ESP_ERR_WIFI_NOT_CONNECT, log_tag, "File descriptor not set");

    // Construct and send new frame.
    httpd_ws_frame_t frame = {};
    frame.type = HTTPD_WS_TYPE_BINARY;
    frame.payload = data;
    frame.len = len;
    frame.final = true;
    frame.fragmented = false;
    ESP_RETURN_ON_ERROR(httpd_ws_send_data(http_server, fd, &frame), log_tag, "Failed to send");

    return ESP_OK;
}
