#ifndef DEBUG_HPP
#define DEBUG_HPP

#include <Adafruit_BNO08x.h>
#include <Arduino.h>
#include <Preferences.h>

#include <Motor.hpp>
#include <functional>

#include "calibrate.hpp"

void debug_help() {
    Serial.println("Available commands:");
    Serial.println("  help, h: Show this help message.");
    Serial.println("  load_l, ll: Load the left motor calibration data.");
    Serial.println("  load_r, lr: Load the right motor calibration data.");
    Serial.println("  load_both, lb: Load both motor calibration data.");
    Serial.println("  print_l, pl: Print the left motor calibration data.");
    Serial.println("  print_r, pr: Print the right motor calibration data.");
    Serial.println("  print_both, pb: Print both motor calibration data.");
    Serial.println("  calibrate: Calibrate the motors.");
}

template <size_t S>
void debug_load_lut(Motor<S>& motor) {
    Preferences prefs;
    if (prefs.begin("motor", true)) {
        motor.load_calibration(&prefs);
        prefs.end();
    } else {
        Serial.println("Failed to open preferences.");
    }
}

/**
 * Loop function for debugging.
 *
 * @param motor_l The left motor.
 * @param motor_r The right motor.
 * @param imu The IMU.
 * @param update_interval The update interval of the motors in milliseconds.
 */
template <size_t S>
void debug(Motor<S>& motor_l, Motor<S>& motor_r, Adafruit_BNO08x& imu, size_t update_interval = 5) {
    // Wait for serial input.
    String input = "";
    Serial.println("\nEnter a command (type 'help' for a list of commands):");
    while (Serial.available() == 0) delay(100);
    input = Serial.readStringUntil('\n');
    if (input.isEmpty()) return;
    input.trim();

    if (input == "help" || input == "h") {
        debug_help();
    }

    else if (input == "load_l" || input == "ll") {
        Serial.println("Loading left motor calibration data...");
        debug_load_lut(motor_l);
    }

    else if (input == "load_r" || input == "lr") {
        Serial.println("Loading right motor calibration data...");
        debug_load_lut(motor_r);
    }

    else if (input == "load_both" || input == "lb") {
        Serial.println("Loading left motor calibration data...");
        debug_load_lut(motor_l);
        Serial.println("Loading right motor calibration data...");
        debug_load_lut(motor_r);
    }

    else if (input == "print_l" || input == "pl") {
        motor_l.print_calibration();
    }

    else if (input == "print_r" || input == "pr") {
        motor_r.print_calibration();
    }

    else if (input == "print_both" || input == "pb") {
        motor_l.print_calibration();
        motor_r.print_calibration();
    }

    else if (input == "calibrate") {
        motor_encoder_calibration(motor_l, motor_r, 0.01f, UPDATE_INTERVAL, 100);
    }

    else {
        Serial.println("Unknown command. Type 'help' for a list of commands.");
    }
}

#endif