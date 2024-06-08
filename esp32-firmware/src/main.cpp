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

void app_main() { Motor m("left", 'l', "motor_left"); }