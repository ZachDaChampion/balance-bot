/*
 * Motor.hpp
 *
 * Contains the Motor class, which is used to control the motors of the robot. The Motor class
 * encompasses the encoder, PWM, and linearization of the motor.
 */

#ifndef MOTOR_HPP_
#define MOTOR_HPP_

#include <driver/mcpwm_prelude.h>
#include <driver/pulse_cnt.h>
#include <esp_err.h>
#include <freertos/FreeRTOS.h>
#include <freertos/queue.h>
#include <limits.h>
#include <nvs.h>
#include <nvs_flash.h>
#include <stddef.h>
#include <stdint.h>

#include <functional>

class Motor {
   public:
    /**
     * The maximum speed of the motor in RPM.
     */
    static const int MAX_RPM = 100;

    /**
     * The number of times the encoder pulses for each motor revolution.
     */
    static const int ENCODER_TICKS_PER_REVOLUTION = 2000;

    /**
     * The pulse width (in microseconds) that will command the motor to be off.
     */
    static const int PW_NEUTRAL = 1500;

    /**
     * The extra pulse width (added to PWM_NEUTRAL) that will achieve maximum motor speed.
     */
    static const int PW_RANGE = 500;

    /**
     * The resolution of the PWM generator. This defines how long a "tick" is; in our case, we use a
     * 1MHz resolution which results in 1us per tick.
     */
    static const int PWM_TIMEBASE_RESOLUTION_HZ = 1000000;

    /**
     * The period between pulses, measured in ticks. With our 1MHz resolution, 20000 ticks is 20ms.
     */
    static const int PWM_TIMEBASE_PERIOD = 20000;

    /**
     * The size of the queue used to store watch point events from the pulse counter.
     */
    static const size_t PCNT_QUEUE_SIZE = 8;

    /**
     * The high limit for the pulse counter. The counter will reset to 0 when this is reached.
     */
    static const int PCNT_HIGH_LIMIT = INT16_MAX / 2;

    /**
     * The low limit for the pulse counter. The counter will reset to 0 when this is reached.
     */
    static const int PCNT_LOW_LIMIT = INT16_MIN / 2;

    /**
     * The number of elements in the motor's linearization lookup table.
     */
    static const size_t LUT_SIZE = (MAX_RPM * 2) + 1;

    /**
     * The minimum pulse width that the motor will accept (100% reverse speed)
     */
    static const int PW_MIN = PW_NEUTRAL - PW_RANGE;

    /**
     * The maximum pulse width that the motor will accept (100% forward speed)
     */
    static const int PW_MAX = PW_NEUTRAL + PW_RANGE;

    /**
     * The calibration data for the motor. This data is used to linearize the motor's response to
     * PWM signals.
     */
    struct Calibration {
        int32_t static_friction_neg;  ///< The minimum reverse PW to overcome static friction.
        int32_t static_friction_pos;  ///< The minimum forward PW to overcome static friction.
        int32_t lut[LUT_SIZE];        ///< The LUT that maps RPM to PW.
    };

    /**
     * Construct a new Motor object.
     *
     * @param[in] name The name of the motor ("left" or "right").
     * @param[in] id The single-character ID of the motor ('l' or 'r').
     * @param[in] log_tag The tag to use for logging ("Left Motor" or "Right Motor").
     */
    Motor(const char* name, const char id, const char* log_tag);

    /**
     * Destroy the Motor object. This will detach the motor from the GPIO pins and clean up the
     * MCPWM and PCNT.
     */
    ~Motor();

    /**
     * Initializes an MCPWM timer and operator that can be shared by multiple motors. This must be
     * called before any motor is attached and both the timer and operator handles must remain valid
     * until all motors are destructed.
     *
     * @param[in] group_id The group ID to allocate the timer and operator from.
     * @param[out] ret_timer Returned timer handle.
     * @param[out] ret_oper Returned operator handle.
     * @return
     *      - ESP_OK: MCPWM timer and operator initialized successfully.
     */
    static esp_err_t init_mcpwm_operator(int group_id, mcpwm_timer_handle_t* ret_timer,
                                         mcpwm_oper_handle_t* ret_oper);

    /**
     * Attach this motor object to the proper pins. This will set up the Motor Control Pulse Width
     * Modulator (MCPWM) and the encoder's Pulse Counters (PCNT).
     *
     * @param[in] pwm_pin The PWM pin for the motor controller.
     * @param[in] enc_pin_a The pin for encoder channel A.
     * @param[in] enc_pin_b The pin for encoder channel B.
     * @param[in] mcpwm_group_id The group ID of the MCPWM operator.
     * @param[in] mcpwm_oper The MCPWM operator handle to use for this motor.
     * @return
     *      - ESP_OK: MCPWM and PCNT sucessfully initialized.
     *      - ESP_ERR_INVALID_ARG: An invalid pin number was passed as an argument.
     */
    esp_err_t attach(int pwm_pin, int enc_pin_a, int enc_pin_b, int mcpwm_group_id,
                     const mcpwm_oper_handle_t mcpwm_oper);

    /**
     * Detach the motor from the GPIO pins. This will stop the motor and clean up the MCPWM and
     * PCNT. The motor can be re-attached later with `attach()`.
     */
    void detach();

    /**
     * Returns whether or not the motor has been attached to GPIO pins. If this returns true, all
     * functionality of the Motor is available.
     *
     * @return True if the motor is attached, false otherwise.
     */
    bool is_attached() const;

    /**
     * Load the calibration data for the motor from persistent storage. If the calibration data
     * cannot be loaded, the motor will not be calibrated.
     *
     * @param[in] nvs The NVS handle to load the calibration data from.
     * @return
     *      - ESP_OK: Calibration data loaded successfully.
     *      - ESP_ERR_NOT_FOUND: Calibration data not found.
     */
    esp_err_t load_calibration(const nvs_handle_t nvs);

    /**
     * Save the calibration data for the motor to persistent storage.
     *
     * @param[in] nvs The NVS handle to save the calibration data to.
     * @return
     *      - ESP_OK: Calibration data saved successfully.
     *      - ESP_FAIL: Calibration data could not be saved.
     */
    esp_err_t save_calibration(const nvs_handle_t nvs);

    /**
     * Sets a new set of calibration data. The motor will use this new data to linearize its PWM
     * response.
     *
     * @note This new data will not be written to persistent storage; you must call
     * `save_calibration()` for that.
     *
     * @param[in] new_cal The new calibration data.
     */
    void set_calibration(const Calibration& new_cal);

    /**
     * Get the current calibration data for the motor.
     *
     * @return The current calibration data.
     */
    Calibration get_calibration() const;

    /**
     * Latch the current encoder value along with the current uptime. This method is seperate from
     * `update()` because it must execute quickly in order to minimize the time between multiple
     * encoders being latched.
     *
     * @param[in] uptime The current uptime in microseconds.
     * @return
     *      - ESP_OK: Encoder latched successfully.
     *      - ESP_ERR_INVALID_STATE: Motor not attached.
     */
    esp_err_t latch_encoder(int64_t uptime);

    /**
     * Update the motor's encoder count and speed. This method should be called at a regular
     * interval to keep the motor's state up to date. It should always be called after
     * `latch_encoder()`.
     *
     * @return
     *      - ESP_OK: Motor state updated successfully.
     *      - ESP_ERR_INVALID_STATE: Motor not attached.
     */
    esp_err_t update_data();

    /**
     * Update the motor's motion. This method should be called at a regular interval to keep the
     * motor's motion up to date. It should always be called after `update_data()` and after any
     * commands are run (e.g. `move_speed`).
     *
     * @return
     *     - ESP_OK: Motor motion updated successfully.
     *     - ESP_ERR_INVALID_STATE: Motor not attached.
     */
    esp_err_t update_motion();

    /**
     * Sets the speed of the motor in RPM. This will use the linearization LUT to select an
     * appropriate pulse width to send to the motor controller. This may also account for static
     * friction by briefly increasing the pulse width when the motor is stopped.
     *
     * @param[in] rpm The speed to set the motor to in RPM.
     * @param[in] accout_for_static_friction Whether or not to account for static friction.
     * @param[in] brake Whether or not to apply a braking force when stopping or changing direction.
     * @return
     *      - ESP_OK: Motor speed set successfully.
     *      - ESP_ERR_INVALID_STATE: Motor not attached.
     */
    esp_err_t move_speed(int rpm, bool account_for_static_friction = true, bool brake = true);

    /**
     * Sends a specified PWM signal to the motor controller, bypassing the linearization LUT. This
     * will also not account for static friction.
     *
     * @param[in] pulse_width The pulse width to send to the motor controller.
     * @return
     *      - ESP_OK: Pulse width set successfully.
     *      - ESP_ERR_INVALID_STATE: Motor not attached.
     */
    esp_err_t move_pwm(int pulse_width);

    /**
     * Get the current cumulative encoder count (as of the last update).
     *
     * @return The current encoder count, or 0 if the motor is not attachd.
     */
    int64_t get_encoder_count() const;

    /**
     * Get the unfiltered measured speed of the encoder in ticks/sec (as of the last update).
     *
     * @return The current speed in ticks/sec, or 0 if the motor is not attached.
     */
    int32_t get_encoder_speed() const;

    /**
     * The amount of time (in us) to account for static friction when the motor is started from
     * rest.
     */
    int static_friction_base_time = 1e5;

    /**
     * The amount of time (in us) to account for braking.
     */
    int brake_base_time = 1e5;

   private:
    /**
     * Attach the encoder to this object via PCNT.
     *
     * @param[in] gpio_a Encoder pin A
     * @param[in] gpio_b Encoder pin B
     * @return
     *      - ESP_OK: Encoder attached successfully.
     */
    esp_err_t attach_pcnt(int gpio_a, int gpio_b);

    /**
     * Attach the motor controller to this object via MCPWM.
     *
     * @param[in] pwm_pin The PWM pin for the motor controller.
     * @param[in] mcpwm_group_id The group ID of the MCPWM operator.
     * @param[in] mcpwm_oper The MCPWM operator handle to use for this motor.
     * @return
     *      - ESP_OK: Motor controller attached successfully.
     */
    esp_err_t attach_mcpwm(int pwm_pin, int mcpwm_group_id, const mcpwm_oper_handle_t mcpwm_oper);

    /**
     * Move the motor with a specified pulse width, without resetting the modifier. Pulse widths
     * that are out of range will be clamped; an error will not be returned.
     *
     * @param[in] pulse_width The pulse width to send to the motor controller.
     * @return
     *     - ESP_OK: Pulse width set successfully.
     *     - ESP_ERR_INVALID_STATE: Motor not attached.
     */
    esp_err_t move_pwm_raw(int pulse_width);

    const char* name;     ///< The name of the motor ("left" or "right").
    const char id;        ///< Single-character ID of the motor ('l' or 'r').
    const char* log_tag;  ///< The motor's tag, used for logging.

    bool attached;            ///< Whether or not the motor has been attached to GPIO.
    Calibration calibration;  ///< The calibration data for the motor.

    int prev_raw_encoder_count;   ///< The raw number of encoder ticks at the previous latch.
    int raw_encoder_count;        ///< The raw number of encoder ticks at the most recent latch.
    int64_t prev_encoder_count;   ///< The total number of encoder ticks at the previous update.
    int64_t total_encoder_count;  ///< The total number of encoder ticks at the current update.
    int32_t encoder_speed;        ///< The speed of the encoder at last update, in ticks/sec.

    int64_t last_latch_time;  ///< The uptime when `latch_encoder()` was previously called (us).
    int64_t latch_time;       ///< The uptime when `latch_encoder()` was most recently called (us).

    int base_pw;      ///< The current pulse width, before applying modifiers.
    int pw_modifier;  ///< The current pulse width modifier (static friction correction or braking).
    int64_t pw_modifier_cutoff;  ///< When to stop applying pw modifier.

    /**
     * NVS keys used to store calibration data.
     */
    struct {
        char label_fric_neg[10] = "!_static-";  ///< The key for the negative static friction value.
        char label_fric_pos[10] = "!_static+";  ///< The key for the positive static friction value.
        char label_lut[6] = "!_lut";            ///< The key for the LUT.
    } nvs_keys;

    /**
     * Pulse counter handles and data, used for encoder.
     */
    struct {
        pcnt_unit_handle_t unit = nullptr;          ///< The encoder's pulse counter unit.
        pcnt_channel_handle_t chan_a = nullptr;     ///< A handle for the encoder's channel A.
        pcnt_channel_handle_t chan_b = nullptr;     ///< A handle for the encoder's channel B.
        QueueHandle_t watch_point_queue = nullptr;  ///< A queue populated by watch point events.
    } pcnt;

    /**
     * MCPWM handles and data, used for motor control.
     */
    struct {
        mcpwm_cmpr_handle_t comparator = nullptr;  ///< The comparator for the motor controller.
        mcpwm_gen_handle_t generator = nullptr;    ///< The generator for the motor controller.
    } mcpwm;
};

#endif