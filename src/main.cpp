#include <Adafruit_BNO08x.h>
#include <Arduino.h>
#include <Motor.h>

#include "config.h"

//                                                                                                //
// ====================================== Pin Definitions ======================================= //
//                                                                                                //

#define PIN_IMU_CS 5
#define PIN_IMU_INT 13
#define PIN_IMU_RST 1
#define PIN_IMU_MOSI 23  // DI on chip
#define PIN_IMU_MISO 19  // SDA on chip
#define PIN_IMU_SCK 18   // SCL on chip

#define PIN_ENC_L_A 26
#define PIN_ENC_L_B 25
#define PIN_ENC_R_A 33
#define PIN_ENC_R_B 27

#define PIN_MOTOR_L 34  // TODO: This pin is input only, change to another pin
#define PIN_MOTOR_R 35  // TODO: This pin is input only, change to another pin

//                                                                                                //
// ======================================== I/O Objects ========================================= //
//                                                                                                //

SPIClass spi(VSPI);
Adafruit_BNO08x imu(PIN_IMU_RST);

Motor<3> motor_l(0);
Motor<3> motor_r(1);

//                                                                                                //
// =============================== Motor and Encoder Calibration ================================ //
//                                                                                                //

/**
 * Loop function for motor and encoder calibration. This function will run the motors at various PWM
 * frequencies and measure the resulting speed with the encoders. This data will be used to create a
 * lookup table that can be used to map desired motor speeds to actual motor speeds. The procedure
 * will be run iteratively until the table is accurate enough.
 *
 * For truly accurate results, this must be done with the robot standing upright on a flat surface.
 * This is difficult, of course, because the robot will not be able to balance itself. Calibrating
 * the motors in mid-air may be good enough, but it will not account for the dynamics of pressure on
 * the wheels.
 *
 * When the calibration is complete, the user will be prompted to save the lookup table to
 * persistent storage.
 */
void loop_motor_encoder_calibration() {
    // TODO
}

//                                                                                                //
// ================================= Arduino Control Functions ================================== //
//                                                                                                //

void setup() {
    Serial.begin(CONFIG_SERIAL_BAUD_RATE);

    // Initialize the IMU.
    //
    // Adafruit's library uses the default SPI pins, which we don't want to use. To get around this,
    // we call `spi.begin()` with the desired pins before initializing the IMU.
    spi.begin(PIN_IMU_SCK, PIN_IMU_MISO, PIN_IMU_MOSI, PIN_IMU_CS);
    imu.begin_SPI(PIN_IMU_CS, PIN_IMU_INT, &spi);

    // Initialize the motors.
    motor_l.attach(PIN_MOTOR_L, PIN_ENC_L_A, PIN_ENC_L_B);
    motor_r.attach(PIN_MOTOR_R, PIN_ENC_R_A, PIN_ENC_R_B);
}

void loop() {
#if CONFIG_MODE == ConfigMode::MOTOR_ENCODER_CALIBRATION
    loop_motor_encoder_calibration();
#endif
}
