#ifndef CONFIG_H
#define CONFIG_H

//                                                                                                //
// ========================================= Constants ========================================== //
//                                                                                                //

// Mode of operation.
#define CONFIG_MODE_MOTOR_ENCODER_CALIBRATION 0
#define CONFIG_MODE_IMU_CALIBRATION 1
#define CONFIG_MODE_BALANCING 2
#define CONFIG_MODE_REMOTE_CONTROL 3

//                                                                                                //
// ======================================= Configurations ======================================= //
//                                                                                                //

// If true, the robot will start balancing as soon as it is powered on. Otherwise, it will wait
// for a command from serial or a WebSocket.
#define CONFIG_START_ON_BOOT false

// The mode of operation.
#define CONFIG_MODE CONFIG_MODE_MOTOR_ENCODER_CALIBRATION

// The baud rate of the serial port.
#define CONFIG_SERIAL_BAUD_RATE 115200

// The update interval of the motors in milliseconds.
#define UPDATE_INTERVAL 5

#endif