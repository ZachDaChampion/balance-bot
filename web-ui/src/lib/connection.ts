import { get, writable, type Writable } from 'svelte/store';
import { physical_params } from './robot_state';
import { PhysicalParams } from './proto/proto';

const FAKE_WEBSOCKET = true;

interface WebSocketState {
    address: string;
    connection: WebSocket | null;
    connected: boolean;
    show_error_dialog: boolean;
    is_connecting: boolean;
    message: string | null;
}

// The active websocket connection to the balance bot, or null if there is no active connection.
export const websocket_state: Writable<WebSocketState> = writable({
    address: 'ws://balancebot:81',
    connection: null,
    connected: false,
    show_error_dialog: false,
    is_connecting: false,
    message: null
});

export function connect() {
    if (FAKE_WEBSOCKET) {
        websocket_state.update((state) => {
            return {
                ...state,
                connected: true,
                is_connecting: false
            };
        });

        physical_params.update((_) => {
            return PhysicalParams.create({
                wheelBase: 0.1,
                wheelRadius: 0.03,
                motorMaxSpeed: 100,
                gravity: 9.81,
                torqueLength: 0.1
            });
        });

        return;
    }

    // Clear the error dialog.
    websocket_state.update((state) => {
        return {
            ...state,
            show_error_dialog: false,
            is_connecting: true
        };
    });

    // Create a new websocket connection.
    const ws = new WebSocket(get(websocket_state).address);
    ws.onopen = () => {
        websocket_state.update((state) => {
            return {
                ...state,
                connection: ws,
                connected: true,
                is_connecting: false
            };
        });
    };
    ws.onclose = (event) => {
        websocket_state.update((state) => {
            return {
                ...state,
                connection: null,
                connected: false,
                is_connecting: false,
                message: `Connection closed: ${event.code} ${event.reason}`
            };
        });
    };
    ws.onerror = (_) => {
        websocket_state.update((state) => {
            return {
                ...state,
                show_error_dialog: true,
                connected: false,
                is_connecting: false,
                message: null
            };
        });
    };
}
