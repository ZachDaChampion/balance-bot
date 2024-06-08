#include <esp_timer.h>

#include <Motor.hpp>

#include "driver/gpio.h"
#include "driver/pulse_cnt.h"
#include "esp_log.h"
#include "esp_sleep.h"
#include "freertos/FreeRTOS.h"
#include "freertos/queue.h"
#include "freertos/task.h"
#include "sdkconfig.h"

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
    esp_log_level_set("left motor", ESP_LOG_INFO);

    mcpwm_timer_handle_t mcpwm_timer;
    mcpwm_oper_handle_t mcpwm_operator;
    ESP_ERROR_CHECK(Motor::init_mcpwm_operator(0, &mcpwm_timer, &mcpwm_operator));

    Motor m("left", 'l', "left motor");
    m.attach(PIN_MOTOR_L, PIN_ENC_L_A, PIN_ENC_L_B, 0, mcpwm_operator);

    // Enable and start timer.
    ESP_LOGI("main", "Enable and start timer");
    ESP_ERROR_CHECK(mcpwm_timer_enable(mcpwm_timer));
    ESP_ERROR_CHECK(mcpwm_timer_start_stop(mcpwm_timer, MCPWM_TIMER_START_NO_STOP));

    // Spin motor from -100RPM to 100RPM and back repeatedly.
    for (int i = 0; i <= 100; ++i) {
        update(m, i);
        vTaskDelay(pdMS_TO_TICKS(80));
    }
    while (1) {
        for (int i = 100; i >= -100; --i) {
            update(m, i);
            vTaskDelay(pdMS_TO_TICKS(80));
        }
        for (int i = -100; i <= 100; ++i) {
            update(m, i);
            vTaskDelay(pdMS_TO_TICKS(80));
        }
    }
}
