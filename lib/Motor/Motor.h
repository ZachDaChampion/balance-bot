#ifndef MOTOR_H
#define MOTOR_H

#include <Arduino.h>
#include <ESP32Servo.h>
#include <Encoder.h>
#include <Preferences.h>

static const int MAX_RPM = 100;
static const int ENCODER_TICKS_PER_REVOLUTION = 1000;
static const int PWM_NEUTRAL = 1500;
static const int PWM_RANGE = 500;

static const size_t MOTOR_LUT_SIZE = MAX_RPM * 2 + 1;
static const int PWM_MIN = PWM_NEUTRAL - PWM_RANGE;
static const int PWM_MAX = PWM_NEUTRAL + PWM_RANGE;

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

        // PWM to overcome static friction defaults to 10% of the PWM range.
        this->pwm_static_friction_neg = PWM_RANGE / 10;
        this->pwm_static_friction_pos = PWM_RANGE / 10;
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
        String lut_table_name = prefs->getString("motor" + String(this->id) + "_lut");
        String static_neg_table_name = prefs->getString("motor" + String(this->id) + "_static_neg");
        String static_pos_table_name = prefs->getString("motor" + String(this->id) + "_static_pos");

        // Check if the calibration data exists and is the correct size.
        uint16_t lut_table_size = prefs->getBytesLength(lut_table_name);
        uint16_t static_neg_table_size = prefs->getBytesLength(static_neg_table_name);
        uint16_t static_pos_table_size = prefs->getBytesLength(static_pos_table_name);
        if (lut_table_size == 0 || static_neg_table_size == 0 || static_pos_table_size == 0) {
            Serial.printf("No calibration data found for motor %d\n", this->id);
            return false;
        }
        if (lut_table_size != sizeof(this->motor_lut) ||
            static_neg_table_size != sizeof(this->pwm_static_friction_neg) ||
            static_pos_table_size != sizeof(this->pwm_static_friction_pos)) {
            Serial.printf(
                "Calibration data for motor %d is the wrong size:\n"
                "| Correct size | Actual size |\n"
                "| ------------ | ------------ |\n"
                "| %12d | %12d |\n"
                "| %12d | %12d |\n"
                "| %12d | %12d |\n",
                this->id, sizeof(this->motor_lut), lut_table_size,
                sizeof(this->pwm_static_friction_neg), static_neg_table_size,
                sizeof(this->pwm_static_friction_pos), static_pos_table_size);
            return false;
        }

        // Load the calibration data.
        prefs->getBytes(lut_table_name, this->motor_lut, sizeof(this->motor_lut));
        prefs->getBytes(static_neg_table_name, &this->pwm_static_friction_neg,
                        sizeof(this->pwm_static_friction_neg));
        prefs->getBytes(static_pos_table_name, &this->pwm_static_friction_pos,
                        sizeof(this->pwm_static_friction_pos));

        Serial.printf("Calibration data loaded for motor %d\n", this->id);
        return true;
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
        memcpy(this->enc_speed_history, this->enc_speed_history + 1,
               sizeof(this->enc_speed_history[0]) * (ENC_FILTER_SAMPLES - 1));
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
     * Set the speed of the motor in PWM.
     *
     * @param[in] pwm The pulse width of the motor, in the range [PWM_MIN, PWM_MAX].
     */
    void set_pwm(int pwm) {
        // Clamp the PWM to the range [PWM_MIN, PWM_MAX].
        if (pwm < PWM_MIN) {
            pwm = PWM_MIN;
        } else if (pwm > PWM_MAX) {
            pwm = PWM_MAX;
        }

        this->motor.writeMicroseconds(pwm);
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
    int motor_lut[MOTOR_LUT_SIZE];
    int pwm_static_friction_neg;
    int pwm_static_friction_pos;
    float enc_speed_history[ENC_FILTER_SAMPLES];
};

#endif