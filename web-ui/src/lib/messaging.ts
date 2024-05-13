import { get, writable, type Writable } from 'svelte/store';
import {
    Bot2Web,
    Command,
    LogLevel,
    Web2Bot,
    type IPhysicalParams,
    type IPitchControllerParams,
    type IResponse,
    type IWeb2Bot,
    type IYawControllerParams
} from './proto/proto';
import { websocket_state } from './connection';
import protobuf from 'protobufjs';
import { log, physical_params, pitch_controller, robot_state, yaw_controller } from './robot_state';

/**
 * A wrapper around a Promise that resolves to a response.
 */
class ResponsePromise {
    command_id: number;
    handled: boolean;
    promise: Promise<IResponse>;
    accept: (value: IResponse | PromiseLike<IResponse>) => void = () => {};
    reject: (reason?: any) => void = () => {};

    constructor(command_id: number, timeout: number = 100) {
        this.command_id = command_id;
        this.handled = false;
        this.promise = new Promise((accept, reject) => {
            this.accept = accept;
            this.reject = reject;
            setTimeout(() => {
                reject(
                    new Error(
                        'Timed out waiting for response to message with ID ' + command_id.toString()
                    )
                );
            }, timeout);
        });
        this.promise.then(() => {
            this.handled = true;
        });
    }
}

// The next available ID for a sent message.
const next_command_id: Writable<number> = writable(0);

/**
 * Gets the next available ID for a sent message.
 * @returns The next available ID.
 */
function get_next_id() {
    let id = 0;
    next_command_id.update((value) => {
        id = value;
        return value + 1;
    });
    return id;
}

// A list of promises for pending responses.
export const response_promises: Writable<Array<ResponsePromise>> = writable([]);

/**
 * Sends a message to the robot and returns a promise that resolves to a response.
 * @param msg The message to send.
 * @param max_timeout The maximum number of milliseconds to wait for a response.
 * @returns A promise that resolves to a response.
 */
async function send_message(msg: IWeb2Bot, max_timeout = 100): Promise<IResponse> {
    // If the websocket is not connected, error.
    const ws = get(websocket_state);
    if (!ws.connected || !ws.connection) throw new Error('Not connected to the robot.');

    // Construct response promise and add it to the list of pending promises.
    if (!msg.id && msg.id !== 0) throw new Error('Message ID is required.');
    const response_promise = new ResponsePromise(msg.id, max_timeout);
    response_promises.update((promises) => [...promises, response_promise]);

    // Send the message over the websocket.
    const buffer = Web2Bot.encode(msg).finish();
    ws.connection.send(buffer);

    // Wait for the response.
    return response_promise.promise;
}

/**
 * Sends a command message to the robot and returns a promise that resolves to a response.
 * @param command The command to send.
 * @param max_timeout The maximum number of milliseconds to wait for a response.
 * @returns A promise that resolves to a response.
 */
export async function send_command_message(command: Command, max_timeout = 100) {
    const msg: IWeb2Bot = {
        id: get_next_id(),
        command: command
    };
    return send_message(msg, max_timeout);
}

/**
 * Sends a physical parameters message to the robot and returns a promise that resolves to a response.
 * @param params The physical parameters to send.
 * @param max_timeout The maximum number of milliseconds to wait for a response.
 * @returns A promise that resolves to a response.
 */
export async function send_physical_params_message(params: IPhysicalParams, max_timeout = 100) {
    const msg: IWeb2Bot = {
        id: get_next_id(),
        physicalParams: params
    };
    return send_message(msg, max_timeout);
}

/**
 * Sends a pitch controller parameters message to the robot and returns a promise that resolves to a response.
 * @param params The pitch controller parameters to send.
 * @param max_timeout The maximum number of milliseconds to wait for a response.
 * @returns A promise that resolves to a response.
 */
export async function send_pitch_controller_params_message(
    params: IPitchControllerParams,
    max_timeout = 100
) {
    const msg: IWeb2Bot = {
        id: get_next_id(),
        pitchControllerParams: params
    };
    return send_message(msg, max_timeout);
}

/**
 * Sends a yaw controller parameters message to the robot and returns a promise that resolves to a response.
 * @param params The yaw controller parameters to send.
 * @param max_timeout The maximum number of milliseconds to wait for a response.
 * @returns A promise that resolves to a response.
 */
export async function send_yaw_controller_params_message(
    params: IYawControllerParams,
    max_timeout = 100
) {
    const msg: IWeb2Bot = {
        id: get_next_id(),
        rollControllerParams: params
    };
    return send_message(msg, max_timeout);
}

/**
 * Callback function to be run whenever data is received over the WebSocket.
 * @param data The data received from the WebSocket (as an ArrayBuffer).
 */
export function receive_message(data: ArrayBuffer) {
    // Decode the message.
    const typed_buffer = new Uint8Array(data);
    let decoded = null;
    try {
        decoded = Bot2Web.decode(typed_buffer);
    } catch (e) {
        if (e instanceof protobuf.util.ProtocolError) console.error(e.message);
        else console.error("Couldn't decode message: wire format is invalid");
        decoded = null;
    }
    if (!decoded) return;

    // Handle responses. This will accept any pending promises with a matching command ID and remove
    // any already-handled promises that are still in `response_promises`.
    if (decoded.response) {
        response_promises.update((promises) => {
            return promises.filter((p) => {
                if (p.handled) return false;
                if (p.command_id == decoded.response?.commandId) {
                    p.accept(decoded.response);
                    return false;
                }
                return true;
            });
        });
    }

    // Handle log messages.
    if (decoded.log) {
        const new_log = decoded.log;
        log.update((value) => [...value, new_log]);
        switch (new_log.level) {
            case LogLevel.DEBUG:
                console.debug(`LOG (DEBUG): ${new_log.message}`);
                break;
            case LogLevel.INFO:
                console.info(`LOG (INFO): ${new_log.message}`);
                break;
            case LogLevel.WARN:
                console.warn(`LOG (WARN): ${new_log.message}`);
                break;
            case LogLevel.ERROR:
                console.error(`LOG (ERROR): ${new_log.message}`);
                break;
            case LogLevel.FATAL:
                console.error(`LOG (FATAL): ${new_log.message}`);
                break;
            default:
                console.log(`LOG (UNKNOWN LEVEL): ${new_log.message}`);
                break;
        }
    }

    // Handle other messages.
    if (decoded.state) robot_state.set(decoded.state);
    if (decoded.physicalParams) physical_params.set(decoded.physicalParams);
    if (decoded.pitchControllerParams) pitch_controller.set(decoded.pitchControllerParams);
    if (decoded.yawControllerParams) yaw_controller.set(decoded.yawControllerParams);
}
