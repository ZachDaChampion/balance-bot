#include <Adafruit_BNO08x.h>
#include <Arduino.h>
#include <Preferences.h>

#include <Motor.hpp>

#include "calibrate.hpp"
#include "config.hpp"
#include "debug.hpp"

static const size_t PIN_IMU_CS = 5;
static const size_t PIN_IMU_INT = 13;
static const size_t PIN_IMU_RST = 16;   // TODO: Fix on robot.
static const size_t PIN_IMU_MOSI = 23;  // DI on chip
static const size_t PIN_IMU_MISO = 19;  // SDA on chip
static const size_t PIN_IMU_SCK = 18;   // SCL on chip

static const size_t PIN_ENC_L_A = 26;
static const size_t PIN_ENC_L_B = 25;
static const size_t PIN_ENC_R_A = 33;
static const size_t PIN_ENC_R_B = 27;

static const size_t PIN_MOTOR_L = 4;
static const size_t PIN_MOTOR_R = 2;

SPIClass spi(VSPI);
Adafruit_BNO08x imu(PIN_IMU_RST);

Motor<5> motor_l('l');
Motor<5> motor_r('r');

void setup() {
    Serial.begin(CONFIG_SERIAL_BAUD_RATE);
    Serial.println("Starting up.");

    // Initialize the IMU.
    //
    // Adafruit's library uses the default SPI pins, which we don't want to use. To get around this,
    // we call `spi.begin()` with the desired pins before initializing the IMU.
    spi.begin(PIN_IMU_SCK, PIN_IMU_MISO, PIN_IMU_MOSI, PIN_IMU_CS);
    imu.begin_SPI(PIN_IMU_CS, PIN_IMU_INT, &spi);

    // Initialize the motors.
    motor_l.attach(PIN_MOTOR_L, PIN_ENC_L_A, PIN_ENC_L_B);
    motor_r.attach(PIN_MOTOR_R, PIN_ENC_R_A, PIN_ENC_R_B);

    Serial.println("Initialization complete.");
    Serial.println("Starting in 5 seconds.");
    delay(5000);
}

void loop() {
#if CONFIG_MODE == CONFIG_MODE_MOTOR_ENCODER_CALIBRATION
    motor_encoder_calibration(motor_l, motor_r, 0.01f, UPDATE_INTERVAL, 100);
    while (1)
        ;
#elif CONFIG_MODE == CONFIG_MODE_DEBUG
    debug(motor_l, motor_r, imu, UPDATE_INTERVAL);
#endif
}
