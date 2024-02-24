#ifndef CONFIG_H
#define CONFIG_H

//                                                                                                //
// ========================================= Constants ========================================== //
//                                                                                                //

// Mode of operation.
enum class ConfigMode {
    MOTOR_ENCODER_CALIBRATION,
    IMU_CALIBRATION,
    BALANCING,
    REMOTE_CONTROL,
};

//                                                                                                //
// ======================================= Configurations ======================================= //
//                                                                                                //

// If true, the robot will start balancing as soon as it is powered on. Otherwise, it will wait
// for a command from serial or a WebSocket.
#define CONFIG_START_ON_BOOT false

// The mode of operation.
#define CONFIG_MODE ConfigMode::MOTOR_ENCODER_CALIBRATION

// The baud rate of the serial port.
#define CONFIG_SERIAL_BAUD_RATE 115200

// The update interval of the motors in milliseconds.
#define UPDATE_INTERVAL 5

#endif