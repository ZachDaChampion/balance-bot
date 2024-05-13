import { get, writable, type Writable } from 'svelte/store';
import { physical_params, pitch_controller, yaw_controller } from './robot_state';
import { receive_message } from './messaging';

const FAKE_WEBSOCKET = false;

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
    address: 'ws://balancebot.local:81',
    connection: null,
    connected: false,
    show_error_dialog: false,
    is_connecting: false,
    message: null
});

function buf2hex(buffer: ArrayBuffer): string {
    // buffer is an ArrayBuffer
    return [...new Uint8Array(buffer)].map((x) => x.toString(16).padStart(2, '0')).join(' ');
}

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
            return {
                wheelBase: 0.1,
                wheelRadius: 0.03,
                motorMaxSpeed: 100,
                gravity: 9.81,
                torqueLength: 0.1
            };
        });

        pitch_controller.update((_) => {
            return {
                pid: {
                    kp: 1.0,
                    ki: 0.0,
                    kd: 0.0,
                    integralZeroThreshold: 0.0,
                    integralSaturationLimit: 0.0,
                    resetIntegral: true,
                    ffAddGravity: true
                }
            };
        });

        yaw_controller.update((_) => {
            return {
                pid: {
                    kp: 1.0,
                    ki: 0.0,
                    kd: 0.0,
                    integralZeroThreshold: 0.0,
                    integralSaturationLimit: 0.0,
                    resetIntegral: true
                }
            };
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
    ws.binaryType = 'arraybuffer';
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
    ws.onmessage = (event) => {
        console.log('Received message:', buf2hex(event.data));
        receive_message(event.data);
    };
}
