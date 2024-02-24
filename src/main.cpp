#include <Adafruit_BNO08x.h>
#include <Arduino.h>
#include <Motor.h>
#include <Preferences.h>

#include "config.h"

//                                                                                                //
// ====================================== Pin Definitions ======================================= //
//                                                                                                //

static const size_t PIN_IMU_CS = 5;
static const size_t PIN_IMU_INT = 13;
static const size_t PIN_IMU_RST = 1;
static const size_t PIN_IMU_MOSI = 23;  // DI on chip
static const size_t PIN_IMU_MISO = 19;  // SDA on chip
static const size_t PIN_IMU_SCK = 18;   // SCL on chip

static const size_t PIN_ENC_L_A = 26;
static const size_t PIN_ENC_L_B = 25;
static const size_t PIN_ENC_R_A = 33;
static const size_t PIN_ENC_R_B = 27;

static const size_t PIN_MOTOR_L = 4;
static const size_t PIN_MOTOR_R = 2;

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
 *
 * @param step_size The step size for the PWM values. This is measured as a fraction of the maximum
 *                  PWM speed.
 * @param update_interval The interval in ms between motor updates.
 * @param settle_time The time in ms to wait for the motor to settle at each speed.
 * @param use_filtered_speed Whether to use the filtered speed or the raw speed for calibration.
 */
void loop_motor_encoder_calibration(float step_size, size_t update_interval = 5,
                                    size_t settle_time = 250, bool use_filtered_speed = true) {
    // Number of updates to wait for the motor to settle.
    static const size_t SETTLE_UPDATE_COUNT = settle_time / update_interval;

    // Calculate a valid step size. This uses the `step_size` parameter as a hint, but will
    // adjust the step size to ensure that the PWM range is evenly divided.
    int step_count = 1.f / step_size;
    int mod = PWM_MAX % step_count;
    while (mod != 0) {
        if (mod < step_count / 2) {
            step_count++;
        } else {
            step_count--;
        }
    }
    int step_pwm = PWM_MAX / step_count;
    Serial.printf("Calibrating with step size %d\n", step_pwm);

    // Create lists to store the recorded speeds at each PWM value. We use `step_count * 2` because
    // `step_count` is the number of steps in one direction, but we record the speeds in both
    // directions. These lists do not contain the zero speed.
    float speeds_l[step_count * 2];
    float speeds_r[step_count * 2];

    // Iterate over each negative PWM value. We do this from fastest to slowest to ensure that
    // static friction is overcome for slower speeds.
    Serial.println("Calibrating negative speeds");
    for (int i = step_count; i > 0; --i) {
        int pwm = PWM_NEUTRAL + (-step_pwm * i);
        int idx = step_count - i;
        motor_l.set_pwm(pwm);
        motor_r.set_pwm(pwm);
        for (size_t t = 0; t < SETTLE_UPDATE_COUNT; ++t) {
            delay(update_interval);
            motor_l.update();
            motor_r.update();
        }
        if (use_filtered_speed) {
            speeds_l[idx] = motor_l.get_speed_filtered();
            speeds_r[idx] = motor_r.get_speed_filtered();
        } else {
            speeds_l[idx] = motor_l.get_speed_raw();
            speeds_r[idx] = motor_r.get_speed_raw();
        }
    }

    // Iterate over each positive PWM value. Again, from fastest to slowest.
    Serial.println("Calibrating positive speeds");
    for (int i = step_count; i > 0; --i) {
        int pwm = PWM_NEUTRAL + (step_pwm * i);
        int idx = step_count + i - 1;
        motor_l.set_pwm(pwm);
        motor_r.set_pwm(pwm);
        for (size_t t = 0; t < SETTLE_UPDATE_COUNT; ++t) {
            delay(update_interval);
            motor_l.update();
            motor_r.update();
        }
        if (use_filtered_speed) {
            speeds_l[idx] = motor_l.get_speed_filtered();
            speeds_r[idx] = motor_r.get_speed_filtered();
        } else {
            speeds_l[idx] = motor_l.get_speed_raw();
            speeds_r[idx] = motor_r.get_speed_raw();
        }
    }

    // Reset the motors to zero speed.
    motor_l.set_pwm(PWM_NEUTRAL);
    motor_r.set_pwm(PWM_NEUTRAL);
    for (size_t t = 0; t < SETTLE_UPDATE_COUNT; ++t) {
        delay(update_interval);
        motor_l.update();
        motor_r.update();
    }

    // Measure the PWM required to overcome static friction in the negative direction. Both motors
    // will be run at increasing PWM values until the speed is non-zero. This is an approximation,
    // as PWM in non-linear with speed, but it should be good enough as it will only be used for
    // short periods of time when motors move from zero speed to non-zero speed.
    Serial.println("Calibrating negative static friction");
    int static_pwm_neg_l = PWM_NEUTRAL - step_pwm;
    int static_pwm_neg_r = PWM_NEUTRAL - step_pwm;
    while (1) {
        motor_l.update();
        motor_r.update();
        bool moving_l = abs(motor_l.get_speed_raw()) > 0.1;
        bool moving_r = abs(motor_r.get_speed_raw()) > 0.1;
        if (moving_l && moving_r) break;
        if (!moving_l) {
            static_pwm_neg_l -= step_pwm;
            motor_l.set_pwm(static_pwm_neg_l);
        }
        if (!moving_r) {
            static_pwm_neg_r -= step_pwm;
            motor_r.set_pwm(static_pwm_neg_r);
        }
        delay(update_interval);
    }

    // Reset the motors to zero speed.
    motor_l.set_pwm(PWM_NEUTRAL);
    motor_r.set_pwm(PWM_NEUTRAL);
    for (size_t t = 0; t < SETTLE_UPDATE_COUNT; ++t) {
        delay(update_interval);
        motor_l.update();
        motor_r.update();
    }

    // Measure the PWM required to overcome static friction in the positive direction.
    Serial.println("Calibrating positive static friction");
    int static_pwm_pos_l = PWM_NEUTRAL + step_pwm;
    int static_pwm_pos_r = PWM_NEUTRAL + step_pwm;
    while (1) {
        motor_l.update();
        motor_r.update();
        bool moving_l = abs(motor_l.get_speed_raw()) > 0.1;
        bool moving_r = abs(motor_r.get_speed_raw()) > 0.1;
        if (moving_l && moving_r) break;
        if (!moving_l) {
            static_pwm_pos_l += step_pwm;
            motor_l.set_pwm(static_pwm_pos_l);
        }
        if (!moving_r) {
            static_pwm_pos_r += step_pwm;
            motor_r.set_pwm(static_pwm_pos_r);
        }
        delay(update_interval);
    }

    // Reset the motors to zero speed.
    motor_l.set_pwm(PWM_NEUTRAL);
    motor_r.set_pwm(PWM_NEUTRAL);
    for (size_t t = 0; t < SETTLE_UPDATE_COUNT; ++t) {
        delay(update_interval);
        motor_l.update();
        motor_r.update();
    }

    // Print the results.
    Serial.println("Measurements:");
    Serial.printf("Static friction:\n\tL: %d -> %d\n\tR: %d -> %d\n\n", static_pwm_neg_l,
                  static_pwm_pos_l, static_pwm_neg_r, static_pwm_pos_r);
    Serial.println("|  PWM  | Speed L | Speed R |\n| ----- | ------- | ------- |\n");
    for (int i = step_count; i > 0; --i) {
        int idx = step_count - i;
        int pwm = PWM_NEUTRAL + (-step_pwm * i);
        Serial.printf("| %5d | %7.2f | %7.2f |\n", pwm, speeds_l[idx], speeds_r[idx]);
    }
    for (int i = 1; i <= step_count; ++i) {
        int idx = step_count + i - 1;
        int pwm = PWM_NEUTRAL + (step_pwm * i);
        Serial.printf("| %5d | %7.2f | %7.2f |\n", pwm, speeds_l[idx], speeds_r[idx]);
    }
    Serial.println();

    // Use the results to create a lookup table that maps desired speed to PWM value. A weighted
    // average of PWM values with speeds within a certain range will be used to determine the PWM
    // value for a given speed.
    //
    // The range begins at 1.0 RPM and is increased until the number of speeds within the range is
    // at least 5. This is to ensure that the PWM value is based on a reasonable number of samples.
    // Currently, the range on both motors is increased together, even if only one motor has too
    // few samples. This is most likely fine.
    Serial.println("Creating lookup table");
    int lut_l[MOTOR_LUT_SIZE];
    int lut_r[MOTOR_LUT_SIZE];
    for (int rpm = -MAX_RPM; rpm <= MAX_RPM; ++rpm) {
        if (rpm == 0) {
            lut_l[rpm + MAX_RPM] = PWM_NEUTRAL;
            lut_r[rpm + MAX_RPM] = PWM_NEUTRAL;
            continue;
        }

        float range = 1.f;  // Start with a range of 1.
        float weighted_sum_l = 0;
        float weighted_sum_r = 0;
        float weight_l = 0;
        float weight_r = 0;
        size_t count_l = 0;
        size_t count_r = 0;

        for (size_t iterations = 0; iterations < 10; ++iterations) {
            // Iterate over each speed and calculate the weighted sum of PWM values.
            for (int i = 0; i < step_count * 2; ++i) {
                int pwm = i < step_count ? PWM_NEUTRAL - ((step_count - i) * step_pwm)
                                         : PWM_NEUTRAL + ((i - step_count + 1) * step_pwm);
                float speed_l = speeds_l[i];
                float speed_r = speeds_r[i];
                float diff_l = speed_l - rpm;
                float diff_r = speed_r - rpm;
                if (abs(diff_l) <= range) {
                    float w = 1.f / (1.f + speed_l - rpm);
                    weighted_sum_l += pwm * w;
                    weight_l += w;
                    ++count_l;
                }
                if (abs(diff_r) <= range) {
                    float w = 1.f / (1.f + speed_r - rpm);
                    weighted_sum_r += pwm * w;
                    weight_r += w;
                    ++count_r;
                }
            }

            // If there are enough samples, break.
            if (count_l >= 5 && count_r >= 5) break;

            // If there are not enough samples, increase the range and try again.
            range += 1.f;
        }

        // Make sure that we are not dividing by zero.
        if (weight_l == 0.f || weight_r == 0.f) {
            Serial.printf(
                "ERROR: Could not reach RPM %d. Calibration will be restarted in 5 seconds.\n",
                rpm);
            delay(5000);
            return;
        }

        // Calculate the weighted average of the PWM values and store it in the lookup table.
        lut_l[rpm + MAX_RPM] = static_cast<int>(weighted_sum_l / weight_l);
        lut_r[rpm + MAX_RPM] = static_cast<int>(weighted_sum_r / weight_r);

        // Print the results.
        Serial.println("Calibration complete. Results:");
        Serial.println("|  RPM  | PWM L | PWM R |");
        Serial.println("| ----- | ----- | ----- |");
        for (int rpm = -MAX_RPM; rpm <= MAX_RPM; ++rpm) {
            Serial.printf("| %5d | %5d | %5d |\n", rpm, lut_l[rpm + MAX_RPM], lut_r[rpm + MAX_RPM]);
        }

        // Prompt the user to save the lookup table.
        Serial.println(
            "Press 'y' if you would like to save the lookup table to persistent storage.");
        while (1) {
            if (Serial.available() > 0) {
                char c = Serial.read();
                if (c == 'y') break;
            }
        }

        // Save the lookup table to persistent storage.
        Preferences prefs;
        if (prefs.begin("motor", false)) {
            prefs.putBytes("motor_l_lut", lut_l, sizeof(lut_l));
            prefs.putBytes("motor_r_lut", lut_r, sizeof(lut_r));
            prefs.putInt("motor_l_static_neg", static_pwm_neg_l);
            prefs.putInt("motor_r_static_neg", static_pwm_neg_r);
            prefs.putInt("motor_l_static_pos", static_pwm_pos_l);
            prefs.putInt("motor_r_static_pos", static_pwm_pos_r);
            prefs.end();
            Serial.println("Lookup table saved to persistent storage.");
        } else {
            Serial.println("ERROR: Could not save lookup table to persistent storage.");
        }

        // Infinite loop to prevent calibration from restarting.
        while (1)
            ;
    }
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
