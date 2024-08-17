/*
 * WifiConnection.hpp
 *
 * Contains the WifiConnection class, which encapsulates a Wifi connection with MDNS. Only a single
 * connection can be active at once.
 */

#ifndef WIFICONNECTION_HPP_
#define WIFICONNECTION_HPP_

#include <esp_wifi.h>
#include <freertos/FreeRTOS.h>
#include <freertos/event_groups.h>
#include <freertos/semphr.h>

class WifiConnection {
    friend class WebSocketServer;

   public:
    /**
     * Destroy the Wifi Connection object.
     */
    ~WifiConnection();

    /**
     * Create a new uninitialized WiFi connection.
     *
     * @return A new connection.
     */
    static WifiConnection create(const char* log_tag);

    /**
     * Connect to a wifi access point.
     *
     * @param[in] ssid SSID of the access point.
     * @param[in] pass Password of the access point.
     * @param[in] max_retries Number of times to retry a failed connection before giving up.
     * @return
     */
    esp_err_t connect(const char* ssid, const char* password, int max_retries);

    /**
     * Disconnect from the wifi access point.
     *
     * @return
     *      - ESP_OK on success.
     *      - ESP_INVALID_STATE if not connected.
     */
    esp_err_t disconnect();

    /**
     * Deactivate this connection. Another connection can then be activated.
     *
     * @return
     */
    esp_err_t deactivate();

   private:
    /**
     * Construct a new WifiConnection object.
     *
     * @param[in] active_mutex Mutex to determine which WifiConnection instance is active.
     * @param[in] log_tag Tag to use for logging.
     */
    WifiConnection(SemaphoreHandle_t active_mutex, const char* log_tag);

    /**
     * Handle events that occur during wifi connection. This will set the appropriate `event_group`
     * bits on success or failure.
     *
     * @param[in] arg Pointer to the active WifiConnection object.
     * @param[in] event_base The type of event that occurred.
     * @param[in] event_id The specific event that occured.
     * @param[in] event_data Data associated with the event.
     */
    static void event_handler(void* arg, esp_event_base_t event_base, int32_t event_id,
                              void* event_data);

    int retry_num = 0;    ///< How many retries have occurred during connection.
    int max_retries = 0;  ///< Maximum number of retries before we give up connecting.

    static const EventBits_t CONNECTED_BIT = BIT0;     ///< Indicates that wifi has connected.
    static const EventBits_t DISCONNECTED_BIT = BIT1;  ///< Indicates that wifi has disconnected.
    static const EventBits_t FAIL_BIT = BIT2;          ///< Indicates that were unable to connect.

    EventGroupHandle_t event_group = nullptr;  ///< Event group for wifi events.
    StaticEventGroup_t event_group_data;       ///< Static data allocation for wifi event group.

    const SemaphoreHandle_t active_mutex = nullptr;  ///< Whether any instance is active.
    bool is_active = false;                          ///< True iff this wifi is currently active.

    static bool s_netif_active;      ///< True if netif has been initialized.
    static esp_netif_t* s_wifi_sta;  ///< Pointer to the current wifi station.
    static bool s_wifi_started;      ///< True if wifi has been started.

    esp_event_handler_instance_t* wifi_event = nullptr;  ///< Event handler for wifi events.
    esp_event_handler_instance_t* ip_event = nullptr;    ///< Event handler for ip events.

    bool is_connected = false;  ///< True if wifi is connected to a network.

    const char* log_tag = nullptr;  ///< The connection's tag, used for logging.
};

#endif