#ifndef MESSAGING_HPP_
#define MESSAGING_HPP_

#include <balancebot.pb-c.h>

#include <Motor.hpp>
#include <freertos/semphr.h>
#include <functional>

class Messenger {
    public:


    private:
    SemaphoreHandle_t sem_decode_buffer;
};


#endif