/*
 * This (and the associated .cpp file) is used to handle all WiFi and WebSocket communication.
 * ESP-IDF example "wifi/getting_started/station" was used as a template for much of this.
 *
 * https://github.com/espressif/esp-idf/blob/v5.2.2/examples/wifi/getting_started/station/main/
 */

#ifndef NETWORKING_HPP_
#define NETWORKING_HPP_

#include <esp_err.h>
#include <freertos/queue.h>
#include <freertos/stream_buffer.h>
#include <protobuf-generated/global.h>

#include <Motor.hpp>
#include <functional>

template <uint32_t RESPONSE_RESULT_MSG_LEN, uint32_t LOG_LEN, uint32_t LUT_LEN,
          uint32_t MEASUREMENTS_LEN>
using SimpleMessage =
    Message<RESPONSE_RESULT_MSG_LEN, LUT_LEN, LUT_LEN, LUT_LEN, MEASUREMENTS_LEN, MEASUREMENTS_LEN,
            MEASUREMENTS_LEN, LUT_LEN, LUT_LEN, LUT_LEN, LUT_LEN, LUT_LEN, LUT_LEN, LOG_LEN>;
using DefaultMessage = SimpleMessage<128, 256, Motor::LUT_SIZE, 0>;

namespace wifi {

/**
 * Connect to a wifi access point.
 *
 * @param[in] ssid SSID of the access point.
 * @param[in] pass Password of the access point.
 * @param[in] max_retries Number of times to retry a failed connection before giving up.
 * @return
 */
esp_err_t connect(const char* ssid, const char* pass, int max_retries);

};  // namespace wifi

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

};  // namespace webserver

#endif