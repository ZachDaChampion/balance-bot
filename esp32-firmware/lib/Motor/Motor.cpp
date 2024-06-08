#include <esp_check.h>
#include <esp_log.h>
#include <esp_timer.h>

#include <Motor.hpp>
#include <algorithm>
#include <tuple>

//                                                                                                //
// ================================== Constructor / Destructor ================================== //
//                                                                                                //

Motor::Motor(const char* name, const char id, const char* log_tag)
    : name(name), id(id), log_tag(log_tag), attached(false) {
    // Construct default calibration with linear relationship between RPM and pulse width.
    calibration.static_friction_neg = 0;
    calibration.static_friction_pos = 0;
    for (int rpm = -MAX_RPM; rpm <= MAX_RPM; ++rpm) {
        int index = rpm + MAX_RPM;
        calibration.lut[index] = PW_NEUTRAL + (PW_RANGE * rpm / MAX_RPM);
    }

    // Insert ID to NVS keys to ensure the motor loads the correct data.
    nvs_keys.label_fric_neg[0] = id;
    nvs_keys.label_fric_pos[0] = id;
    nvs_keys.label_lut[0] = id;
}

Motor::~Motor() { detach(); }

//                                                                                                //
// ====================================== Attach / Detach ======================================= //
//                                                                                                //

esp_err_t Motor::init_mcpwm_operator(int group_id, mcpwm_timer_handle_t* ret_timer,
                                     mcpwm_oper_handle_t* ret_oper) {
    static const char* TAG = "Motor (static)";
    ESP_LOGD(TAG, "Initializing MCPWM timer and operator");

    // Create timer.
    ESP_LOGV(TAG, "Create MCPWM timer");
    ESP_RETURN_ON_ERROR(
        [&] {
            mcpwm_timer_config_t config;
            config.group_id = 0;
            config.clk_src = MCPWM_TIMER_CLK_SRC_DEFAULT;
            config.resolution_hz = PWM_TIMEBASE_RESOLUTION_HZ;
            config.count_mode = MCPWM_TIMER_COUNT_MODE_UP;
            config.period_ticks = PWM_TIMEBASE_PERIOD;
            return mcpwm_new_timer(&config, ret_timer);
        }(),
        TAG, "Failed to create MCPWM timer");

    // Create operator.
    ESP_LOGV(TAG, "Create MCPWM operator");
    ESP_RETURN_ON_ERROR(
        [&] {
            mcpwm_operator_config_t config;
            config.group_id = group_id;
            return mcpwm_new_operator(&config, ret_oper);
        }(),
        TAG, "Failed to create MCPWM operator");

    // Connect the timer and the operator.
    ESP_LOGV(TAG, "Connect MCPWM timer and operator");
    ESP_RETURN_ON_ERROR(mcpwm_operator_connect_timer(*ret_oper, *ret_timer), TAG,
                        "Failed to connect MCPWM timer and operator");

    return ESP_OK;
}

esp_err_t Motor::attach_pcnt(int gpio_a, int gpio_b) {
    ESP_LOGD(log_tag, "Attaching PCNT");

    if (pcnt.watch_point_queue != nullptr) vQueueDelete(pcnt.watch_point_queue);
    if (pcnt.chan_a != nullptr)
        ESP_RETURN_ON_ERROR(pcnt_del_channel(pcnt.chan_a), log_tag,
                            "Failed to delete existing PCNT channel A");
    if (pcnt.chan_b != nullptr)
        ESP_RETURN_ON_ERROR(pcnt_del_channel(pcnt.chan_b), log_tag,
                            "Failed to delete existing PCNT channel B");
    if (pcnt.unit != nullptr)
        ESP_RETURN_ON_ERROR(pcnt_del_unit(pcnt.unit), log_tag,
                            "Failed to delete existing PCNT unit");

    // Init PCNT unit.
    ESP_LOGV(log_tag, "Init PCNT unit");
    ESP_RETURN_ON_ERROR(
        [&] {
            pcnt_unit_config_t config;
            config.low_limit = PCNT_LOW_LIMIT;
            config.high_limit = PCNT_HIGH_LIMIT;
            return pcnt_new_unit(&config, &pcnt.unit);
        }(),
        log_tag, "Failed to init PCNT unit");

    // Init PCNT channels.
    ESP_LOGV(log_tag, "Init PCNT channels");
    ESP_RETURN_ON_ERROR(
        [&] {
            pcnt_chan_config_t config_a;
            config_a.edge_gpio_num = gpio_a;
            config_a.level_gpio_num = gpio_b;
            ESP_RETURN_ON_ERROR(pcnt_new_channel(pcnt.unit, &config_a, &pcnt.chan_a), log_tag,
                                "Failed to init PCNT channel A");

            pcnt_chan_config_t config_b;
            config_b.edge_gpio_num = gpio_b;
            config_b.level_gpio_num = gpio_a;
            ESP_RETURN_ON_ERROR(pcnt_new_channel(pcnt.unit, &config_b, &pcnt.chan_b), log_tag,
                                "Failed to init PCNT channel B");

            return ESP_OK;
        }(),
        log_tag, "Failed to init PCNT channels");

    // Set PCNT channel actions.
    ESP_LOGV(log_tag, "Set PCNT channel actions");
    ESP_RETURN_ON_ERROR(pcnt_channel_set_edge_action(pcnt.chan_a, PCNT_CHANNEL_EDGE_ACTION_DECREASE,
                                                     PCNT_CHANNEL_EDGE_ACTION_INCREASE),
                        log_tag, "Failed to set channel A edge action");
    ESP_RETURN_ON_ERROR(pcnt_channel_set_level_action(pcnt.chan_a, PCNT_CHANNEL_LEVEL_ACTION_KEEP,
                                                      PCNT_CHANNEL_LEVEL_ACTION_INVERSE),
                        log_tag, "Failed to set channel A level action");
    ESP_RETURN_ON_ERROR(pcnt_channel_set_edge_action(pcnt.chan_b, PCNT_CHANNEL_EDGE_ACTION_INCREASE,
                                                     PCNT_CHANNEL_EDGE_ACTION_DECREASE),
                        log_tag, "Failed to set channel B edge action");
    ESP_RETURN_ON_ERROR(pcnt_channel_set_level_action(pcnt.chan_b, PCNT_CHANNEL_LEVEL_ACTION_KEEP,
                                                      PCNT_CHANNEL_LEVEL_ACTION_INVERSE),
                        log_tag, "Failed to set channel B level action");

    // Setup watch points at high and low PCNT limits. When a limit is reached, the PCNT will reset
    // to 0. To account for this, we send an event to the `pcnt.watch_point_queue` which can be
    // queried to correct for this reset.
    ESP_LOGV(log_tag, "Setup watch points");
    ESP_RETURN_ON_ERROR(pcnt_unit_add_watch_point(pcnt.unit, PCNT_HIGH_LIMIT), log_tag,
                        "Failed to add high watch point");
    ESP_RETURN_ON_ERROR(pcnt_unit_add_watch_point(pcnt.unit, PCNT_LOW_LIMIT), log_tag,
                        "Failed to add low watch point");
    pcnt.watch_point_queue = xQueueCreate(8, sizeof(int));
    ESP_RETURN_ON_ERROR(
        [&] {
            const auto on_reach = [](pcnt_unit_handle_t, const pcnt_watch_event_data_t* edata,
                                     void* ctx) {
                BaseType_t high_task_wakeup;
                QueueHandle_t queue = static_cast<QueueHandle_t>(ctx);
                xQueueSendFromISR(queue, &(edata->watch_point_value), &high_task_wakeup);
                return high_task_wakeup == pdTRUE;
            };

            pcnt_event_callbacks_t cbs_struct;
            cbs_struct.on_reach = on_reach;
            return pcnt_unit_register_event_callbacks(pcnt.unit, &cbs_struct,
                                                      pcnt.watch_point_queue);
        }(),
        log_tag, "Failed to set watch point callbacks");

    return ESP_OK;
}

esp_err_t Motor::attach_mcpwm(int pwm_pin, int mcpwm_group_id,
                              const mcpwm_oper_handle_t mcpwm_oper) {
    ESP_LOGD(log_tag, "Attaching MCPWM");

    if (mcpwm.comparator != nullptr)
        ESP_RETURN_ON_ERROR(mcpwm_del_comparator(mcpwm.comparator), log_tag,
                            "Failed to delete existing MCPWM comparator");
    if (mcpwm.generator != nullptr)
        ESP_RETURN_ON_ERROR(mcpwm_del_generator(mcpwm.generator), log_tag,
                            "Failed to delete existing MCPWM generator");
    ESP_RETURN_ON_FALSE(mcpwm_oper != nullptr, ESP_ERR_INVALID_STATE, log_tag,
                        "MCPWM operator handle is null, cannot attach");

    // Create MCPWM comparator.
    ESP_LOGV(log_tag, "Create MCPWM comparator");
    ESP_RETURN_ON_ERROR(
        [&] {
            mcpwm_comparator_config_t config;
            config.flags.update_cmp_on_tez = true;  // Update comparator when timer equaks zero
            return mcpwm_new_comparator(mcpwm_oper, &config, &mcpwm.comparator);
        }(),
        log_tag, "Failed to create MCPWM comparator");

    // Create MCPWM generator.
    ESP_LOGV(log_tag, "Create MCPWM generator");
    ESP_RETURN_ON_ERROR(
        [&] {
            mcpwm_generator_config_t config;
            config.gen_gpio_num = pwm_pin;
            return mcpwm_new_generator(mcpwm_oper, &config, &mcpwm.generator);
        }(),
        log_tag, "Failed to create MCPWM generator");

    // Set the initial compare value to ensure the motor begins in the "off" state.
    ESP_LOGV(log_tag, "Set initial compare value");
    ESP_RETURN_ON_ERROR(mcpwm_comparator_set_compare_value(mcpwm.comparator, PW_NEUTRAL), log_tag,
                        "Failed to set initial compare value");

    // Set generator actions. When the timer counter is empty, the generator goes high. When the
    // compare threshold is reached, the generator goes low. This results in a pulse that begins
    // at the start of every period and ends at the compare threshold.
    ESP_LOGV(log_tag, "Set generator actions");
    ESP_RETURN_ON_ERROR(
        [&] {
            const auto action = MCPWM_GEN_TIMER_EVENT_ACTION(
                MCPWM_TIMER_DIRECTION_UP, MCPWM_TIMER_EVENT_EMPTY, MCPWM_GEN_ACTION_HIGH);
            return mcpwm_generator_set_action_on_timer_event(mcpwm.generator, action);
        }(),
        log_tag, "Failed to set PCPWM generator timer event");
    ESP_RETURN_ON_ERROR(
        [&] {
            const auto action = MCPWM_GEN_COMPARE_EVENT_ACTION(
                MCPWM_TIMER_DIRECTION_UP, mcpwm.comparator, MCPWM_GEN_ACTION_LOW);
            return mcpwm_generator_set_action_on_compare_event(mcpwm.generator, action);
        }(),
        log_tag, "Failed to set PCPWM generator compare event");

    return ESP_OK;
}

esp_err_t Motor::attach(int pwm_pin, int enc_pin_a, int enc_pin_b, int mcpwm_group_id,
                        const mcpwm_oper_handle_t mcpwm_oper) {
    if (attached) {
        ESP_LOGW(log_tag, "Attempted to attach already-attached motor");
        return ESP_ERR_INVALID_STATE;
    }

    // Reset data.
    prev_raw_encoder_count = 0;
    raw_encoder_count = 0;
    prev_encoder_count = 0;
    total_encoder_count = 0;
    encoder_speed = 0;
    last_latch_time = 0;
    latch_time = 0;

    // Attach PCNT and MCPWM.
    ESP_LOGD(log_tag, "Attaching");
    ESP_RETURN_ON_ERROR(attach_pcnt(enc_pin_a, enc_pin_b), log_tag,
                        "Failed to attach to PCNT (encoder)");
    ESP_RETURN_ON_ERROR(attach_mcpwm(pwm_pin, mcpwm_group_id, mcpwm_oper), log_tag,
                        "Failed to attach to MCPWM (motor controller)");

    ESP_LOGI(log_tag, "Attached");
    attached = true;
    return ESP_OK;
}

void Motor::detach() {
    // Cleanup PCNT.
    if (pcnt.watch_point_queue != nullptr) vQueueDelete(pcnt.watch_point_queue);
    if (pcnt.chan_a != nullptr) pcnt_del_channel(pcnt.chan_a);
    if (pcnt.chan_b != nullptr) pcnt_del_channel(pcnt.chan_b);
    if (pcnt.unit != nullptr) pcnt_del_unit(pcnt.unit);

    // Cleanup MCPWM.
    if (mcpwm.comparator != nullptr) mcpwm_del_comparator(mcpwm.comparator);
    if (mcpwm.generator != nullptr) mcpwm_del_generator(mcpwm.generator);

    attached = false;
}

bool Motor::is_attached() const { return attached; }

//                                                                                                //
// ======================================== Calibration ========================================= //
//                                                                                                //

esp_err_t Motor::load_calibration(const nvs_handle_t nvs) {
    ESP_LOGD(log_tag, "Loading calibration");

    // Read static friction from NVS.
    Calibration new_cal;
    ESP_LOGV(log_tag, "Loading %s", nvs_keys.label_fric_neg);
    ESP_RETURN_ON_ERROR(nvs_get_i32(nvs, nvs_keys.label_fric_neg, &new_cal.static_friction_neg),
                        log_tag, "Failed to read %s", nvs_keys.label_fric_neg);
    ESP_LOGV(log_tag, "Loading %s", nvs_keys.label_fric_pos);
    ESP_RETURN_ON_ERROR(nvs_get_i32(nvs, nvs_keys.label_fric_pos, &new_cal.static_friction_pos),
                        log_tag, "Failed to read %s", nvs_keys.label_fric_pos);
    ESP_LOGV(log_tag, "Loading %s", nvs_keys.label_lut);

    // Read LUT from NVS.
    size_t blob_length = sizeof(new_cal.lut);
    ESP_RETURN_ON_ERROR(nvs_get_blob(nvs, nvs_keys.label_lut, new_cal.lut, &blob_length), log_tag,
                        "Failed to read %s", nvs_keys.label_lut);
    ESP_RETURN_ON_FALSE(blob_length == sizeof(new_cal.lut), ESP_ERR_INVALID_SIZE, log_tag,
                        "Failed to read LUT; blob was wrong size");

    // Update calibration.
    set_calibration(new_cal);

    ESP_LOGI(log_tag, "Calibration loaded");
    return ESP_OK;
}

esp_err_t Motor::save_calibration(const nvs_handle_t nvs) {
    ESP_LOGD(log_tag, "Saving calibration");

    // Write static friction to NVS.
    ESP_LOGV(log_tag, "Saving %s", nvs_keys.label_fric_neg);
    ESP_RETURN_ON_ERROR(nvs_set_i32(nvs, nvs_keys.label_fric_neg, calibration.static_friction_neg),
                        log_tag, "Failed to write %s", nvs_keys.label_fric_neg);
    ESP_LOGV(log_tag, "Saving %s", nvs_keys.label_fric_pos);
    ESP_RETURN_ON_ERROR(nvs_set_i32(nvs, nvs_keys.label_fric_pos, calibration.static_friction_pos),
                        log_tag, "Failed to write %s", nvs_keys.label_fric_pos);
    ESP_LOGV(log_tag, "Saving %s", nvs_keys.label_lut);
    ESP_RETURN_ON_ERROR(
        nvs_set_blob(nvs, nvs_keys.label_lut, calibration.lut, sizeof(calibration.lut)), log_tag,
        "Failed to write %s", nvs_keys.label_lut);

    ESP_LOGI(log_tag, "Calibration saved");
    return ESP_OK;
}

void Motor::set_calibration(const Calibration& new_cal) {
    ESP_LOGV(log_tag, "Negative static friction updated from %ld to %ld",
             calibration.static_friction_neg, new_cal.static_friction_neg);
    ESP_LOGV(log_tag, "Positive static friction updated from %ld to %ld",
             calibration.static_friction_pos, new_cal.static_friction_pos);
    ESP_LOGV(log_tag, "LUT updated");

    calibration = new_cal;
}

Motor::Calibration Motor::get_calibration() const { return calibration; }

//                                                                                                //
// ========================================== Updating ========================================== //
//                                                                                                //

esp_err_t Motor::latch_encoder(int64_t uptime) {
    ESP_RETURN_ON_FALSE(attached, ESP_ERR_INVALID_STATE, log_tag,
                        "Cannot latch encoder; not attached");

    last_latch_time = latch_time;
    latch_time = uptime;
    prev_raw_encoder_count = raw_encoder_count;

    ESP_RETURN_ON_ERROR(pcnt_unit_get_count(pcnt.unit, reinterpret_cast<int*>(&raw_encoder_count)),
                        log_tag, "Failed to read PCNT unit");

    return ESP_OK;
}

esp_err_t Motor::update_data() {
    ESP_RETURN_ON_FALSE(attached, ESP_ERR_INVALID_STATE, log_tag,
                        "Cannot update date; not attached");

    ESP_LOGD(log_tag, "Updating motor");
    prev_encoder_count = total_encoder_count;

    // Calculate the number of new encoder ticks between the last two latches and add it to the
    // total encoder count.
    int new_ticks = raw_encoder_count - prev_raw_encoder_count;
    total_encoder_count += new_ticks;
    ESP_LOGV(log_tag, "New encoder ticks: %d", new_ticks);

    // Read from the watchpoint queue to account for PCNT overflows and underflows.
    ESP_LOGV(log_tag, "Correct PCNT overflows and underflows");
    int recv_watchpoint;
    while (xQueueReceive(pcnt.watch_point_queue, &recv_watchpoint, 0)) {
        total_encoder_count += recv_watchpoint;
        ESP_LOGV(log_tag, "Received watchpoint: %d", recv_watchpoint);
    }
    ESP_LOGV(log_tag, "Total encoder count: %lld", total_encoder_count);

    // Calculate the encoder speed.
    //
    // delta_ticks: ticks
    // delta_time: microseconds (sec * 1e6)
    // encoder_speed: 1e3 * ticks / sec
    //
    // encoder_speed = (1e3 * delta_ticks) / (delta_time * 1e-6)
    int64_t delta_time = latch_time - last_latch_time;
    ESP_RETURN_ON_FALSE(delta_time != 0, ESP_ERR_INVALID_STATE, log_tag,
                        "Delta time is zero; cannot compute encoder speed");
    int64_t delta_ticks = total_encoder_count - prev_encoder_count;
    encoder_speed = (delta_ticks * 1e3 * 1e6) / delta_time;
    ESP_LOGV(log_tag, "Encoder speed: %ld", encoder_speed);

    return ESP_OK;
}

esp_err_t Motor::update_motion() {
    ESP_RETURN_ON_FALSE(attached, ESP_ERR_INVALID_STATE, log_tag,
                        "Cannot update motion; not attached");

    if (pw_modifier && latch_time >= pw_modifier_cutoff) {
        pw_modifier = 0;
        pw_modifier_cutoff = 0;
        return move_pwm_raw(base_pw);
    }
    return ESP_OK;
}

//                                                                                                //
// =========================================== Motion =========================================== //
//                                                                                                //

esp_err_t Motor::move_speed(int rpm, bool account_for_static_friction, bool brake) {
    ESP_RETURN_ON_FALSE(attached, ESP_ERR_INVALID_STATE, log_tag,
                        "Cannot move speed; not attached");
    ESP_RETURN_ON_FALSE(rpm >= -MAX_RPM && rpm <= MAX_RPM, ESP_ERR_INVALID_ARG, log_tag,
                        "Cannot move speed; RPM %d out of range", rpm);
    ESP_LOGD(log_tag, "Moving motor at %d RPM", rpm);

    // Find new pulse width from lookup table.
    base_pw = calibration.lut[rpm + MAX_RPM];

    // If we are already moving at the desired speed, return early.
    const int old_base_pw = base_pw;
    if (base_pw == old_base_pw) {
        ESP_LOGV(log_tag, "Motor already at %d RPM", rpm);
        return ESP_OK;
    }

    // Determine how the motor will be changing.
    const bool was_stopped = old_base_pw == PW_NEUTRAL;
    const bool stopping = base_pw == PW_NEUTRAL;
    const bool reversing = (base_pw > PW_NEUTRAL) != (old_base_pw > PW_NEUTRAL);

    // Calculate modifier if enabled:
    //  - If starting from idle, account for static friction
    //  - If stopping or reversing, apply standard brake
    //  - If slowing or speeding up in same direction, apply weak brake/helper
    if (was_stopped && account_for_static_friction) {
        pw_modifier = rpm > 0 ? calibration.static_friction_pos : -calibration.static_friction_neg;
        pw_modifier_cutoff = latch_time + static_friction_base_time;
    } else if ((stopping || reversing) && brake) {
        pw_modifier = -old_base_pw;
        pw_modifier_cutoff = latch_time + brake_base_time;
    } else if (!stopping && brake) {
        pw_modifier = (base_pw - old_base_pw) * 0.5f;
        pw_modifier_cutoff = latch_time + brake_base_time * 0.5f;
    } else {
        pw_modifier = 0;
        pw_modifier_cutoff = 0;
    }

    return move_pwm_raw(base_pw + pw_modifier);
}

esp_err_t Motor::move_pwm(int pulse_width) {
    ESP_RETURN_ON_FALSE(attached, ESP_ERR_INVALID_STATE, log_tag, "Cannot move PWM; not attached");
    ESP_RETURN_ON_FALSE(pulse_width >= PW_MIN && pulse_width <= PW_MAX, ESP_ERR_INVALID_ARG,
                        log_tag, "Cannot move PWM; pulse width %d out of range", pulse_width);
    ESP_LOGD(log_tag, "Moving motor with raw PWM pulse width %d", pulse_width);

    base_pw = pulse_width;
    pw_modifier = 0;
    pw_modifier_cutoff = 0;
    return mcpwm_comparator_set_compare_value(mcpwm.comparator, pulse_width);
}

esp_err_t Motor::move_pwm_raw(int pulse_width) {
    const int clamped = std::clamp(pulse_width, PW_MIN, PW_MAX);
    return mcpwm_comparator_set_compare_value(mcpwm.comparator, clamped);
}

int64_t Motor::get_encoder_count() const { return total_encoder_count; }

int32_t Motor::get_encoder_speed() const { return encoder_speed; }
