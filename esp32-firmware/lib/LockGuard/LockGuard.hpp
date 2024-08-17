#ifndef LOCKGUARD_HPP_
#define LOCKGUARD_HPP_

#include <freertos/FreeRTOS.h>
#include <freertos/semphr.h>

#include <memory>

template <typename T>
class Lockable;

/**
 * A locked value. The value will remain locked until this object is destructed. A new `Locked` can
 * then be created via `Lockable.lock()`.
 *
 * @tparam T The data type of the locked value.
 */
template <typename T>
class Locked {
    friend class Lockable<T>;

   public:
    /**
     * Destroy the Locked object and release the mutex.
     */
    ~Locked() { xSemaphoreGive(mutex); }

    /**
     * Get a raw pointer to the locked value.
     *
     * @return A raw pointer to the locked value.
     */
    T* get() { return value; }

    /**
     * Returns whether or not a locked value exists. If this returns false, the lock failed.
     *
     * @return True if a value exists, false otherwise.
     */
    bool exists(void) { return value != nullptr; }

    /**
     * Dereference operator.
     *
     * @note If the `Lockable` was not successfully locked, this will attempt to dereference a
     * nullptr.
     *
     * @return The dereferenced value.
     */
    T& operator*() { return *value; }

    /**
     * Arrow operator.
     *
     * @return A raw pointer to the value.
     */
    T* operator->() { return value; }

    /**
     * Boolean cast.
     *
     * @return Returns true if a locked value actually exists, false otherwise.
     */
    explicit operator bool() const { return static_cast<bool>(value); }

    Locked(const Locked&) = delete;
    Locked& operator=(const Locked&) = delete;

   private:
    /**
     * Construct a new Locked object.
     *
     * @param[in] val The value that is locked.
     * @param[in] mutex The mutex handle that can be used to free the lock.
     */
    Locked(T* val, SemaphoreHandle_t mutex) : value(val), mutex(mutex) {}

    T* value;                 ///< The locked value.
    SemaphoreHandle_t mutex;  ///< Mutex used to lock the value.
};

/**
 * A lockable value. This allows RAII thread synchronization, and for locked values to be passed
 * between functions.
 *
 * @tparam T The type of data to lock.
 */
template <typename T>
class Lockable {
   public:
    /**
     * Construct a new Lockable object and store the value on the heap.
     *
     * @param[in] val The value to store.
     */
    Lockable(T val) : value(val), mutex(xSemaphoreCreateMutex()) { xSemaphoreGive(mutex); }

    /**
     * Copy constructor.
     *
     * @param[in] other The other `Lockable` to copy.
     */
    Lockable(const Lockable& other) : value(other.value), mutex(other.mutex) {}

    /**
     * Lock the value. This allows thread-safe access to the underlying value until the `Locked`
     * is destroyed. An empty `Locked` will be returned if this fails.
     *
     * @param[in] block_time The amount of time to block before giving up.
     * @return A `Locked` instance containing the value.
     */
    Locked<T> lock(TickType_t block_time) {
        if (xSemaphoreTake(mutex, block_time) == pdTRUE) {
            return Locked<T>(&value, mutex);
        } else {
            return Locked<T>(nullptr, nullptr);
        }
    }

    /**
     * Try locking the value without blocking. This allows thread-safe access to the underlying
     * value until the `Locked` is destroyed. An empty `Locked` will be returned if this fails.
     *
     * @return A `Locked` instance containing the value.
     */
    Locked<T> try_lock() {
        if (xSemaphoreTake(mutex, 0) == pdTRUE) {
            return Locked<T>(&value, mutex);
        } else {
            return Locked<T>(nullptr, nullptr);
        }
    }

    /**
     * Check if the value is currently available.
     *
     * @return True if the value is availble, false if it is locked.
     */
    bool is_available() { return uxSemaphoreGetCount(mutex) == 1; }

    /**
     * Get a reference to the underlying value.
     *
     * @note This is not thread-safe. You should lock the value first.
     *
     * @return Pointer to the underlying value.
     */
    T* get_unsafe(void) { return &value; }

    Lockable& operator=(const Lockable&) = delete;

   private:
    T value;                  ///< The lockable value.
    SemaphoreHandle_t mutex;  ///< Handle for the locking mutex.
};

#endif