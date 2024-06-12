#include <driver/gpio.h>
#include <driver/pulse_cnt.h>
#include <esp_http_server.h>
#include <esp_log.h>
#include <esp_sleep.h>
#include <esp_timer.h>
#include <freertos/FreeRTOS.h>
#include <freertos/queue.h>
#include <freertos/task.h>
#include <sdkconfig.h>

#include <Motor.hpp>

#include "auth.hpp"
#include "networking.hpp"

extern "C" {
void app_main(void);
}

static const size_t PIN_IMU_CS = 5;
static const size_t PIN_IMU_INT = 13;
static const size_t PIN_IMU_RST = 16;   // TODO: Fix on robot.
static const size_t PIN_IMU_MOSI = 23;  // DI on chip
static const size_t PIN_IMU_MISO = 19;  // SDA on chip
static const size_t PIN_IMU_SCK = 18;   // SCL on chip

static const size_t PIN_ENC_L_A = 25;
static const size_t PIN_ENC_L_B = 26;
static const size_t PIN_ENC_R_A = 33;
static const size_t PIN_ENC_R_B = 27;

static const size_t PIN_MOTOR_L = 4;
static const size_t PIN_MOTOR_R = 2;

void update(Motor& m, int i) {
    static const float spd_scale = 60.f / Motor::ENCODER_TICKS_PER_REVOLUTION;
    static const float pos_scale = 360.f / Motor::ENCODER_TICKS_PER_REVOLUTION;
    m.latch_encoder(esp_timer_get_time());
    m.update_data();
    m.move_speed(i, false, false);
    m.update_motion();
    ESP_LOGI("main", "Angle: %0.2f\tCommand: %d\tSpeed: %0.2f", m.get_encoder_count() * pos_scale,
             i, m.get_encoder_speed() * spd_scale);
}

void app_main() {
    // Initialize NVS
    esp_err_t ret = nvs_flash_init();
    if (ret == ESP_ERR_NVS_NO_FREE_PAGES || ret == ESP_ERR_NVS_NEW_VERSION_FOUND) {
        ESP_ERROR_CHECK(nvs_flash_erase());
        ret = nvs_flash_init();
    }
    ESP_ERROR_CHECK(ret);

    ESP_ERROR_CHECK(wifi::connect(SSID, PASSWORD, 4));

    httpd_handle_t server;
    webserver::start_webserver(&server);

    while (1) vTaskDelay(pdMS_TO_TICKS(1000));
}
