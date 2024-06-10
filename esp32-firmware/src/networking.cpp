#include <esp_check.h>
#include <esp_log.h>
#include <esp_system.h>
#include <esp_wifi.h>
#include <freertos/FreeRTOS.h>
#include <freertos/event_groups.h>
#include <freertos/task.h>
#include <string.h>

#include <networking.hpp>

//                                                                                                //
// ======================================= Configuration ======================================== //
//                                                                                                //

//                                                                                                //
// ================================== WiFi Connection and Auth ================================== //
//                                                                                                //

namespace wifi {
static EventGroupHandle_t s_event_group;
static const int CONNECTED_BIT = BIT0;
static const int FAIL_BIT = BIT1;

static const char* TAG = "wifi connection";
static int s_max_retries = 0;
static int s_retry_num = 0;

/**
 * Handle events that occur during wifi connection. This will set the appropriate `s_event_group`
 * bits on success or failure.
 *
 * @param[in] arg Unused.
 * @param[in] event_base The type of event that occurred.
 * @param[in] event_id The specific event that occured.
 * @param[in] event_data Data associated with the event.
 */
static void event_handler(void* arg, esp_event_base_t event_base, int32_t event_id,
                          void* event_data) {
    (void)arg;

    if (event_base == WIFI_EVENT && event_id == WIFI_EVENT_STA_START) {
        esp_wifi_connect();
    } else if (event_base == WIFI_EVENT && event_id == WIFI_EVENT_STA_DISCONNECTED) {
        ESP_LOGW(TAG, "Disconnected from AP");
        if (s_retry_num < s_max_retries || s_max_retries == 0) {
            esp_wifi_connect();
            ++s_retry_num;
            ESP_LOGI(TAG, "Retrying connection");
        } else {
            xEventGroupSetBits(s_event_group, FAIL_BIT);
        }
    } else if (event_base == IP_EVENT && event_id == IP_EVENT_STA_GOT_IP) {
        ip_event_got_ip_t* event = static_cast<ip_event_got_ip_t*>(event_data);
        ESP_LOGI(TAG, "Got IP: " IPSTR, IP2STR(&event->ip_info.ip));
        s_retry_num = 0;
        xEventGroupSetBits(s_event_group, CONNECTED_BIT);
    }
}

esp_err_t connect(const char* ssid, const char* pass, int max_retries) {
    ESP_LOGD(TAG, "Starting wifi");
    ESP_RETURN_ON_FALSE(s_event_group == nullptr, ESP_ERR_INVALID_STATE, TAG,
                        "Tried to connect while connection was already in progress");

    s_max_retries = max_retries;
    s_event_group = xEventGroupCreate();

    // Init TCP/IP stack.
    ESP_LOGV(TAG, "Initializing TCP/IP stack");
    ESP_RETURN_ON_ERROR(esp_netif_init(), TAG, "Failed to init TCP/IP stack");

    // Make sure default event loop has been started.
    ESP_LOGV(TAG, "Starting default event loop");
    ESP_RETURN_ON_ERROR(
        [&] {
            const esp_err_t e = esp_event_loop_create_default();
            if (e == ESP_ERR_INVALID_STATE) {
                ESP_LOGD(TAG, "Default event loop already started");
                return ESP_OK;
            } else {
                return e;
            }
        }(),
        TAG, "Failed to start default event loop");

    // Create default wifi station.
    ESP_LOGV(TAG, "Creating default wifi station");
    esp_netif_create_default_wifi_sta();

    // Init wifi.
    ESP_LOGV(TAG, "Initializing wifi");
    ESP_RETURN_ON_ERROR(
        [&] {
            wifi_init_config_t config = WIFI_INIT_CONFIG_DEFAULT();
            return esp_wifi_init(&config);
        }(),
        TAG, "Failed to init wifi");

    // Setup event handlers.
    ESP_LOGV(TAG, "Setting up event handlers");
    ESP_RETURN_ON_ERROR(esp_event_handler_instance_register(WIFI_EVENT, ESP_EVENT_ANY_ID,
                                                            &event_handler, nullptr, nullptr),
                        TAG, "Failed to init event handler for WIFI_EVENT");
    ESP_RETURN_ON_ERROR(esp_event_handler_instance_register(IP_EVENT, IP_EVENT_STA_GOT_IP,
                                                            &event_handler, nullptr, nullptr),
                        TAG, "Failed to init event handler for IP_EVENT_STA_GOT_IP");

    // Start wifi.
    ESP_LOGV(TAG, "Starting wifi");
    ESP_RETURN_ON_ERROR(
        [&] {
            wifi_config_t config = {};
            config.sta.threshold.authmode = WIFI_AUTH_WPA2_PSK;
            config.sta.sae_pwe_h2e = WPA3_SAE_PWE_BOTH;
            strncpy(reinterpret_cast<char*>(config.sta.ssid), ssid, sizeof(config.sta.ssid));
            strncpy(reinterpret_cast<char*>(config.sta.password), pass,
                    sizeof(config.sta.password));

            ESP_RETURN_ON_ERROR(esp_wifi_set_mode(WIFI_MODE_STA), TAG, "Failed to set wifi mode");
            ESP_RETURN_ON_ERROR(esp_wifi_set_config(WIFI_IF_STA, &config), TAG,
                                "Failed to set wifi config");
            return esp_wifi_start();
        }(),
        TAG, "Failed to start wifi");

    // Wait until connection finishes (either due to success or failure);
    ESP_LOGD(TAG, "Wifi started; connecting to %s", ssid);
    ESP_LOGV(TAG, "Waiting for event bits");
    EventBits_t bits =
        xEventGroupWaitBits(s_event_group, CONNECTED_BIT | FAIL_BIT, pdFAIL, pdFAIL, portMAX_DELAY);

    // Connection has finished; handle the result.
    if (bits & CONNECTED_BIT) {
        ESP_LOGI(TAG, "Connected to %s", ssid);
        return ESP_OK;
    } else if (bits & FAIL_BIT) {
        ESP_LOGE(TAG, "Failed to connect to %s", ssid);
        return ESP_ERR_WIFI_NOT_CONNECT;
    } else {
        ESP_LOGE(TAG, "Unexpected event");
        return ESP_ERR_INVALID_RESPONSE;
    }

    return ESP_OK;
}
};  // namespace wifi