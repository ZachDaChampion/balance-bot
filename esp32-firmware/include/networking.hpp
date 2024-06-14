/*
 * This (and the associated .cpp file) is used to handle all WiFi and WebSocket communication.
 * ESP-IDF example "wifi/getting_started/station" was used as a template for much of this.
 *
 * https://github.com/espressif/esp-idf/blob/v5.2.2/examples/wifi/getting_started/station/main/
 */

#ifndef NETWORKING_HPP_
#define NETWORKING_HPP_

#include <esp_err.h>
#include <esp_http_server.h>
#include <freertos/queue.h>
#include <freertos/stream_buffer.h>

namespace webserver {

/**
 * Queue of WebSocket message lengths. If a number `N` is received from this queue, it is safe to
 * receive a message of length `N` from `recv_buffer`.
 */
extern QueueHandle_t recv_queue;

/**
 * A buffer that holds all received messages. Messages are variable-length, so you must first
 * receive a message length from `recv_queue`.
 */
extern StreamBufferHandle_t recv_buffer;

/**
 * Starts a new webserver with a WebSocket URI handler.
 *
 * @param[out] out_server Output to store server handle.
 * @return
 *     - ESP_OK on success.
 */
esp_err_t start_webserver(httpd_handle_t* out_server);

/**
 * Stops the webserver.
 *
 * @param[in] server Server handle.
 * @return
 *     - ESP_OK on success.
 *     - ESP_INVALID_ARG if `server` is NULL.
 */
esp_err_t stop_webserver(const httpd_handle_t server);

/**
 * Send data over the WebSocket connection synchronously. This function will block until the data is
 * sent.
 *
 * @param[in] server The handle for the HTTP server.
 * @param[in] data The data to send.
 * @param[in] len The length of the data.
 * @return
 *      - ESP_OK on success.
 *
 */
esp_err_t send_sync(const httpd_handle_t server, uint8_t* data, size_t len);

};  // namespace webserver

#endif