/*
 * WebSocketServer.hpp
 *
 * Contains the WebSocketServer class, which encapsulates the HTTP WebSocket server.
 */

#ifndef WEBSOCKETSERVER_HPP_
#define WEBSOCKETSERVER_HPP_

#include <esp_http_server.h>
#include <freertos/FreeRTOS.h>
#include <freertos/stream_buffer.h>

#include <LockGuard.hpp>

#include "WifiConnection.hpp"

class WebSocketServer {
   public:
    /**
     * Construct a new WebSocket Server object.
     *
     * @param[in] log_tag The tag used to label log entries.
     * @param[in] fd_queue_size The size of the internal file descriptor queue.
     */
    WebSocketServer(const char* log_tag, size_t fd_queue_size = 4);

    /**
     * Destroy the Web Socket Server object.
     */
    ~WebSocketServer();

    /**
     * Start a new WebSocket server using an active wifi connection.
     *
     * @param[in] connection The active wifi connection to use.
     * @return ESP_OK on success.
     */
    esp_err_t start(Locked<WifiConnection>& connection);

    /**
     * Stop the active WebSocket server.
     *
     * @return ESP_OK on success.
     */
    esp_err_t stop();

    /**
     * Send data over the WebSocket connection synchronously. This function will block until the
     * data is sent.
     *
     * @param[in] data The data to send.
     * @param[in] len The length of the data.
     * @return ESP_OK on success.
     */
    esp_err_t send_sync(uint8_t* data, size_t len);

    StreamBufferHandle_t recv_buffer;  ///< Buffer that stores received messages.

   private:
    /**
     * A connection or disconnection event. This is used to communicate from the WSS handler.
     */
    struct ConnectionEvent {
        enum { CONNECT, DISCONNECT } type;  ///< Whether there is a new connection or disconnection.
        int fd;                             ///< The file descriptor of the connection.
    };

    /**
     * URI handler for the WebSocket Server. This function is primarily responsible for populating
     * the `recv_queue` and `recv_buffer` with received messages.
     *
     * @param[in] req The request object.
     * @return The result of the operation.
     */
    static esp_err_t wss_handler(httpd_req_t* req);

    const char* log_tag = nullptr;  ///< The server's tag, used for logging.

    int fd = -1;                       ///< Current file descriptor (-1 for none).
    QueueHandle_t fd_queue = nullptr;  ///<  Queue for receieved file descriptors.

    httpd_handle_t http_server;  ///< Handle of the HTTP server.

    bool is_active = false;  ///< True iff this server is currently active.
};

#endif