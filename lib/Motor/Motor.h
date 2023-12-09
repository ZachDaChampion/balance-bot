#ifndef MOTOR_H
#define MOTOR_H

#include <Arduino.h>
#include <ESP32Servo.h>
#include <Encoder.h>
#include <Preferences.h>

#define MAX_RPM 100
#define ENCODER_TICKS_PER_REVOLUTION 1000

#define PWM_NEUTRAL 1500
#define PWM_RANGE 500

template <size_t ENC_FILTER_SAMPLES>
class Motor {
   public:
    /**
     * Construct a new Motor object.
     *
     * @param[in] id The ID of the motor.
     */
    Motor(uint8_t id) {
        this->id = id;
        this->cmd_speed = 0;

        // Construct the default motor LUT (linear).
        for (int rpm = -MAX_RPM; rpm <= MAX_RPM; ++rpm) {
            int pulse_width = PWM_NEUTRAL + rpm * PWM_RANGE / MAX_RPM;
            this->motor_lut[rpm + MAX_RPM] = pulse_width;
        }
    }

    /**
     * Attach the motor to the pins. This must be called before the motor can be used.
     *
     * @param[in] pwm_pin The pin number of the motor.
     * @param[in] enc_pin_a The pin number of the encoder channel A.
     * @param[in] enc_pin_b The pin number of the encoder channel B.
     */
    void attach(int pwm_pin, int enc_pin_a, int enc_pin_b) {
        this->motor.attach(pwm_pin, PWM_MIN, PWM_MAX);
        this->motor.writeMicroseconds(PWM_NEUTRAL);
        this->enc = Encoder(enc_pin_a, enc_pin_b);
        this->enc.write(0);
    }

    /**
     * Check if the motor is attached to pins.
     *
     * @return True if the motor is attached to pins, false otherwise.
     */
    bool attached() { return this->motor.attached(); }

    /**
     * Load the calibration data for the motor from persistent storage. If the calibration data
     * cannot be loaded, the motor will not be calibrated.
     *
     * @param[in] prefs The preferences object to load the calibration data from. This can be
     *                  read-only.
     * @return True if the calibration data was loaded successfully, false otherwise.
     */
    bool load_calibration(Preferences* prefs) {
        String saved_table_name = prefs->getString("motor" + String(this->id) + "_lut");

        // Check if the calibration data exists and is the correct size.
        uint16_t saved_table_size = prefs->getBytesLength(saved_table_name);
        if (saved_table_size == 0) {
            Serial.println("No calibration data found for motor " + String(this->id));
            return false;
        }
        if (saved_table_size != sizeof(this->motor_lut)) {
            Serial.println("Calibration data for motor " + String(this->id) +
                           " is the wrong size. Expected " + String(sizeof(this->motor_lut)) +
                           ", got " + String(saved_table_size));
            return false;
        }

        // Load the calibration data.
        prefs->getBytes(saved_table_name, this->motor_lut, sizeof(this->motor_lut));
    }

    /**
     * Update the motor. This must be called periodically to ensure that the motor speed is measured
     * accurately.
     */
    void update() {
        // Get the current state.
        unsigned long now = micros();
        unsigned long elapsed = now - last_update_time;
        int32_t enc_count = enc.read();

        // Calculate the current speed (in RPM).
        float enc_speed =
            (enc_count - last_enc_count) * 60000000.0 / elapsed / ENCODER_TICKS_PER_REVOLUTION;

        // Update encoder history.
        for (size_t i = 0; i < ENC_FILTER_SAMPLES - 1; ++i) {
            this->enc_speed_history[i] = this->enc_speed_history[i + 1];
        }
        this->enc_speed_history[ENC_FILTER_SAMPLES - 1] = enc_speed;

        last_update_time = now;
        last_enc_count = enc_count;
    }

    /**
     * Set the speed of the motor in RPM.
     *
     * @param[in] speed The speed of the motor, in the range [-MAX_RPM, MAX_RPM].
     */
    void set_speed(int speed) {
        // Clamp the speed to the range [-MAX_RPM, MAX_RPM].
        if (speed < -MAX_RPM) {
            speed = -MAX_RPM;
        } else if (speed > MAX_RPM) {
            speed = MAX_RPM;
        }

        this->cmd_speed = speed;
        this->motor.writeMicroseconds(this->motor_lut[speed + MAX_RPM]);
    }

    /**
     * Get the command speed of the motor. This is the speed that the motor is commanded to run at,
     * not the actual speed.
     *
     * @return The command speed of the motor, in the range [-MAX_RPM, MAX_RPM].
     */
    int get_cmd_speed() { return cmd_speed; }

    /**
     * Get the actual speed of the motor. This is the speed that the motor is actually running at,
     * as measured by the encoder. The speed is filtered using a moving average filter.
     *
     * @return The filtered speed of the motor.
     */
    float get_speed_filtered() {
        float sum = 0;
        for (size_t i = 0; i < ENC_FILTER_SAMPLES; ++i) {
            sum += this->enc_speed_history[i];
        }
        return sum / ENC_FILTER_SAMPLES;
    }

    /**
     * Get the actual speed of the motor. This is the speed that the motor is actually running at,
     * as measured by the encoder. The speed is not filtered.
     *
     * @return The raw speed of the motor.
     */
    float get_speed_raw() { return this->enc_speed_history[ENC_FILTER_SAMPLES - 1]; }

    /**
     * Get the encoder count of the motor. This is the number of encoder ticks that have occurred
     * since the last time the count was reset.
     *
     * @return The encoder count of the motor.
     */
    int get_enc_count() { return this->enc.read(); }

    /**
     * Reset the encoder count of the motor. This will also clear the encoder speed history and
     * reset the last encoder count.
     */
    void reset_enc_count() {
        this->enc.write(0);
        this->last_enc_count = 0;

        for (size_t i = 0; i < ENC_FILTER_SAMPLES; ++i) {
            this->enc_speed_history[i] = 0;
        }
    }

   private:
    uint8_t id;
    Servo motor;
    Encoder enc;
    int cmd_speed;
    int32_t last_enc_count;
    unsigned long last_update_time;
    int motor_lut[MAX_RPM * 2 + 1];
    float enc_speed_history[ENC_HISTORY_SIZE];
};

#endif