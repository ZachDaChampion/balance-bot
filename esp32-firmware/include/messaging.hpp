#ifndef MESSAGING_HPP_
#define MESSAGING_HPP_

#include <protobuf-generated/global.h>

#include <Motor.hpp>
#include <functional>

template <uint32_t RESPONSE_RESULT_MSG_LEN, uint32_t LOG_LEN, uint32_t LUT_LEN,
          uint32_t MEASUREMENTS_LEN>
using SimpleMessage =
    Message<RESPONSE_RESULT_MSG_LEN, LUT_LEN, LUT_LEN, LUT_LEN, MEASUREMENTS_LEN, MEASUREMENTS_LEN,
            MEASUREMENTS_LEN, LUT_LEN, LUT_LEN, LUT_LEN, LUT_LEN, LUT_LEN, LUT_LEN, LOG_LEN>;
using DefaultMessage = SimpleMessage<128, 256, Motor::LUT_SIZE, 0>;

#endif