/*
 * This (and the associated .cpp file) is used to handle all WiFi and WebSocket communication.
 * ESP-IDF example "wifi/getting_started/station" was used as a template for much of this.
 *
 * https://github.com/espressif/esp-idf/blob/v5.2.2/examples/wifi/getting_started/station/main/
 */

#ifndef NETWORKING_HPP_
#define NETWORKING_HPP_

#include <esp_err.h>

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

#endif