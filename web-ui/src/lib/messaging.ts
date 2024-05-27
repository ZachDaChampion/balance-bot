import { get, writable, type Writable } from 'svelte/store';
import { Log, Message, Response, registers, type IMessage, type IResponse } from './proto/proto';
import { websocket_state } from './connection';
import protobuf from 'protobufjs';
import { add_to_log, log, robot_state } from './robot_state';

/**
 * A wrapper around a Promise that resolves to a response.
 */
class ResponsePromise {
    request_id: number;
    handled: boolean;
    promise: Promise<IResponse>;
    accept: (value: IResponse | PromiseLike<IResponse>) => void = () => {};
    reject: (reason?: any) => void = () => {};

    constructor(command_id: number, timeout: number = 100) {
        this.request_id = command_id;
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
export async function send_message(msg: IMessage, max_timeout = 100): Promise<IResponse> {
    // If the websocket is not connected, error.
    const ws = get(websocket_state);
    if (!ws.connected || !ws.connection) throw new Error('Not connected to the robot.');

    // Construct response promise and add it to the list of pending promises.
    if (!msg.id && msg.id !== 0) msg.id = get_next_id();
    const response_promise = new ResponsePromise(msg.id, max_timeout);
    response_promises.update((promises) => [...promises, response_promise]);

    // Send the message over the websocket.
    const buffer = Message.encode(msg).finish();
    ws.connection.send(buffer);

    // Wait for the response.
    return response_promise.promise;
}

/**
 * Write a register to the robot. This will overwrite the current active register value, but will
 * not persist across reboots. Call `save_register` after this to persist the value.
 *
 * @param value The register value to write.
 * @param max_timeout The maximum number of milliseconds to wait for a response.
 * @returns A promise that resolves to the response.
 */
export async function write_register(value: registers.IWriteCurrent, max_timeout = 100) {
    const msg: IMessage = {
        id: get_next_id(),
        writeCurrentReg: value
    };
    const response = await send_message(msg, max_timeout);
    if (!response.result) throw new Error('Failed to write register; no result.');
    if (response.result.code !== Response.Result.Code.OK)
        throw new Error('Failed to write register: ' + response.result.msg);
    return response;
}

export async function read_register(
    register: registers.Register,
    read_persistant: boolean = false,
    max_timeout = 100
) {
    const msg: IMessage = {
        id: get_next_id()
    };
    if (read_persistant) msg.readSavedReg = { reg: register };
    else msg.readCurrentReg = { reg: register };

    const response = await send_message(msg, max_timeout);
    if (response.result?.code) throw new Error('Failed to read register: ' + response.result.msg);
    return response;
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
        decoded = Message.decode(typed_buffer);
    } catch (e) {
        if (e instanceof protobuf.util.ProtocolError) console.error(e.message);
        else console.error("Couldn't decode message: wire format is invalid");
        decoded = null;
    }
    if (!decoded) return;

    console.log(`Received message with ID ${decoded.id}`);

    // Handle responses. This will accept any pending promises with a matching command ID and remove
    // any already-handled promises that are still in `response_promises`.
    if (decoded.response) {
        response_promises.update((promises) => {
            return promises.filter((p) => {
                if (p.handled) return false;
                if (p.request_id == decoded.response?.requestId) {
                    p.accept(decoded.response);
                    return false;
                }
                return true;
            });
        });
    }

    // Handle log messages.
    if (decoded.log) add_to_log(decoded.log);

    // Handle robot state update.
    // TODO: Improve this to support plotting.
    if (decoded.robotState) robot_state.set(decoded.robotState);
}
