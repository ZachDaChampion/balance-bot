#include "WifiConnection.hpp"

#include <esp_check.h>
#include <esp_log.h>
#include <esp_system.h>
#include <mdns.h>
#include <string.h>

#include <functional>

using namespace std;

using placeholders::_1;

bool WifiConnection::s_netif_active = false;
esp_netif_t* WifiConnection::s_wifi_sta = nullptr;
bool WifiConnection::s_wifi_started = false;

void WifiConnection::event_handler(void* arg, esp_event_base_t event_base, int32_t event_id,
                                   void* event_data) {
    WifiConnection* conn = static_cast<WifiConnection*>(arg);

    if (event_base == WIFI_EVENT && event_id == WIFI_EVENT_STA_START) {
        esp_wifi_connect();
    } else if (event_base == WIFI_EVENT && event_id == WIFI_EVENT_STA_DISCONNECTED) {
        if (conn->is_connected) {
            conn->is_connected = false;
            ESP_LOGW(conn->log_tag, "Disconnected from AP");
            xEventGroupSetBits(conn->event_group, DISCONNECTED_BIT);
        }
        if (conn->retry_num < conn->max_retries || conn->max_retries == 0) {
            esp_wifi_connect();
            ++conn->retry_num;
            ESP_LOGI(conn->log_tag, "Not connected to AP; retrying connection");
        } else {
            ESP_LOGE(conn->log_tag, "Failed to connect to AP too many times; exiting");
            xEventGroupSetBits(conn->event_group, FAIL_BIT);
        }
    } else if (event_base == IP_EVENT && event_id == IP_EVENT_STA_GOT_IP) {
        ip_event_got_ip_t* event = static_cast<ip_event_got_ip_t*>(event_data);
        ESP_LOGI(conn->log_tag, "Got IP: " IPSTR, IP2STR(&event->ip_info.ip));
        conn->retry_num = 0;
        conn->is_connected = true;
        xEventGroupSetBits(conn->event_group, CONNECTED_BIT);
    }
}

WifiConnection::WifiConnection(SemaphoreHandle_t active_mutex, const char* log_tag)
    : event_group(xEventGroupCreateStatic(&event_group_data)),
      active_mutex(active_mutex),
      log_tag(log_tag) {}

WifiConnection::~WifiConnection(void) {
    if (is_active) {
        esp_wifi_stop();
        s_wifi_started = false;
        esp_event_handler_instance_unregister(IP_EVENT, IP_EVENT_STA_GOT_IP, ip_event);
        esp_event_handler_instance_unregister(WIFI_EVENT, ESP_EVENT_ANY_ID, wifi_event);
        esp_wifi_deinit();
        esp_netif_destroy_default_wifi(s_wifi_sta);
        s_wifi_sta = nullptr;
        mdns_free();
        is_active = false;
        xSemaphoreGive(active_mutex);
    }
}

WifiConnection WifiConnection::create(const char* log_tag) {
    static StaticSemaphore_t s_active_sem_data;
    static SemaphoreHandle_t s_active_sem = xSemaphoreCreateMutexStatic(&s_active_sem_data);
    return WifiConnection(s_active_sem, log_tag);
}

esp_err_t WifiConnection::connect(const char* ssid, const char* password, int max_retries) {
    ESP_LOGI(log_tag, "Connecting to WiFi...");
    esp_err_t ret = ESP_OK;

    // Make sure another connection does not already exist.
    ESP_RETURN_ON_FALSE(is_active == false, ESP_ERR_INVALID_STATE, log_tag,
                        "Tried to connect but already connected");
    ESP_RETURN_ON_FALSE(xSemaphoreTake(active_mutex, 0) == pdTRUE, ESP_ERR_INVALID_STATE, log_tag,
                        "Another connection is already active");
    is_active = true;

    // Init TCP/IP stack.
    if (s_netif_active) {
        ESP_LOGD(log_tag, "TCP/IP already initialized; skipping");
    } else {
        ESP_LOGD(log_tag, "Initializing TCP/IP stack");
        ESP_GOTO_ON_ERROR(esp_netif_init(), cleanup, log_tag, "Failed to init TCP/IP stack");
        s_netif_active = true;
    }

    // Ensure default event loop has been started.
    ESP_LOGD(log_tag, "Starting default event loop");
    ESP_GOTO_ON_ERROR(
        [&] {
            const esp_err_t e = esp_event_loop_create_default();
            if (e == ESP_ERR_INVALID_STATE) {
                ESP_LOGD(log_tag, "Default event loop has already been started");
                return ESP_OK;
            } else {
                return e;
            }
        }(),
        cleanup, log_tag, "Failed to start default event loop");

    // Init MDNS.
    ESP_LOGD(log_tag, "Initializing MDNS");
    ESP_GOTO_ON_ERROR(mdns_init(), cleanup, log_tag, "Failed to init MDNS");
    ESP_GOTO_ON_ERROR(mdns_hostname_set(CONFIG_LWIP_LOCAL_HOSTNAME), cleanup_mdns, log_tag,
                      "Failed to set MDNS hostname (" CONFIG_LWIP_LOCAL_HOSTNAME ")");
    ESP_GOTO_ON_ERROR(mdns_service_add(nullptr, "_http", "_tcp", 80, nullptr, 0), cleanup_mdns,
                      log_tag, "Failed to add MDNS HTTP service");
    ESP_LOGD(log_tag, "MDNS initialized with hostname " CONFIG_LWIP_LOCAL_HOSTNAME);

    // Create default wifi station.
    if (s_wifi_sta == nullptr) {
        ESP_LOGD(log_tag, "Creating default wifi station");
        s_wifi_sta = esp_netif_create_default_wifi_sta();
    } else {
        ESP_LOGD(log_tag, "Default wifi station has already been created; skipping");
    }

    // Init wifi.
    ESP_LOGD(log_tag, "Initializing wifi");
    ESP_GOTO_ON_ERROR(
        [&] {
            wifi_init_config_t config = WIFI_INIT_CONFIG_DEFAULT();
            return esp_wifi_init(&config);
        }(),
        cleanup_wifi_sta, log_tag, "Failed to init wifi");

    // Setup event handlers.
    ESP_LOGD(log_tag, "Setting up event handlers");
    ESP_GOTO_ON_ERROR(esp_event_handler_instance_register(WIFI_EVENT, ESP_EVENT_ANY_ID,
                                                          event_handler, this, wifi_event),
                      cleanup_wifi_init, log_tag, "Failed to set wifi event handler");
    ESP_GOTO_ON_ERROR(esp_event_handler_instance_register(IP_EVENT, IP_EVENT_STA_GOT_IP,
                                                          event_handler, this, ip_event),
                      cleanup_wifi_event, log_tag, "Failed to set IP event handler");

    // Start wifi.
    if (s_wifi_started) {
        ESP_LOGD(log_tag, "Wifi has already been started; skipping");
    } else {
        ESP_LOGD(log_tag, "Starting wifi");
        ESP_GOTO_ON_ERROR(
            [&] {
                wifi_config_t config = {};
                config.sta.threshold.authmode = WIFI_AUTH_WPA2_PSK;
                config.sta.sae_pwe_h2e = WPA3_SAE_PWE_BOTH;
                strncpy(reinterpret_cast<char*>(config.sta.ssid), ssid, sizeof(config.sta.ssid));
                strncpy(reinterpret_cast<char*>(config.sta.password), password,
                        sizeof(config.sta.password));

                ESP_RETURN_ON_ERROR(esp_wifi_set_mode(WIFI_MODE_STA), log_tag,
                                    "Failed to set wifi mode");
                ESP_RETURN_ON_ERROR(esp_wifi_set_config(WIFI_IF_STA, &config), log_tag,
                                    "Failed to set wifi config");
                return esp_wifi_start();
            }(),
            cleanup_ip_event, log_tag, "Failed to start wifi");
        s_wifi_started = true;
    }

    // Wait until connection finishes.
    ESP_LOGD(log_tag, "Wifi started; connecting to %s", ssid);
    ESP_GOTO_ON_ERROR(
        [&] {
            const EventBits_t bits = xEventGroupWaitBits(event_group, CONNECTED_BIT | FAIL_BIT,
                                                         pdFALSE, pdFALSE, portMAX_DELAY);
            if (bits & CONNECTED_BIT) {
                ESP_LOGI(log_tag, "Connected to %s", ssid);
                return ESP_OK;
            } else if (bits & FAIL_BIT) {
                ESP_LOGE(log_tag, "Failed to connect to %s", ssid);
                return ESP_ERR_WIFI_NOT_CONNECT;
            } else {
                ESP_LOGE(log_tag, "Unexpected event");
                return ESP_ERR_INVALID_RESPONSE;
            }
        }(),
        cleanup_wifi_start, log_tag, "Connection failed");

    return ESP_OK;

cleanup_wifi_start:
    esp_wifi_stop();
    s_wifi_started = false;
cleanup_ip_event:
    esp_event_handler_instance_unregister(IP_EVENT, IP_EVENT_STA_GOT_IP, ip_event);
cleanup_wifi_event:
    esp_event_handler_instance_unregister(WIFI_EVENT, ESP_EVENT_ANY_ID, wifi_event);
cleanup_wifi_init:
    esp_wifi_deinit();
cleanup_wifi_sta:
    esp_netif_destroy_default_wifi(s_wifi_sta);
    s_wifi_sta = nullptr;
cleanup_mdns:
    mdns_free();
cleanup:
    is_active = false;
    xSemaphoreGive(active_mutex);
    return ret;
}

esp_err_t WifiConnection::disconnect() {
    ESP_RETURN_ON_FALSE(is_active, ESP_ERR_INVALID_STATE, log_tag, "Cannot disconnect; not active");
    if (is_connected) esp_wifi_disconnect();
    is_connected = false;
    return ESP_OK;
}

esp_err_t WifiConnection::deactivate() {
    ESP_RETURN_ON_FALSE(is_active, ESP_ERR_INVALID_STATE, log_tag, "Cannot deactivate; not active");
    esp_wifi_stop();
    s_wifi_started = false;
    esp_event_handler_instance_unregister(IP_EVENT, IP_EVENT_STA_GOT_IP, ip_event);
    esp_event_handler_instance_unregister(WIFI_EVENT, ESP_EVENT_ANY_ID, wifi_event);
    esp_wifi_deinit();
    esp_netif_destroy_default_wifi(s_wifi_sta);
    s_wifi_sta = nullptr;
    mdns_free();
    is_active = false;
    xEventGroupClearBits(event_group, 0xFF);
    xSemaphoreGive(active_mutex);
    return ESP_OK;
}
