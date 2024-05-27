import { writable, type Writable } from 'svelte/store';
import {
    Log,
    type ILog,
    type IRobotState,
    type controllers,
    type motor_calib,
    type physical
} from './proto/proto';

export function log(level: Log.Level, msg: string | undefined) {
    return add_to_log({
        level: level,
        message: msg
    });
}

export function add_to_log(entry: ILog) {
    switch (entry.level) {
        case Log.Level.DEBUG:
            console.debug(`LOG (DEBUG): ${entry.message}`);
            break;
        case Log.Level.INFO:
            console.info(`LOG (INFO): ${entry.message}`);
            break;
        case Log.Level.WARN:
            console.warn(`LOG (WARN): ${entry.message}`);
            break;
        case Log.Level.ERROR:
            console.error(`LOG (ERROR): ${entry.message}`);
            break;
        default:
            console.log(`LOG (UNKNOWN LEVEL): ${entry.message}`);
            break;
    }
    event_log.update((old) => [...old, entry]);
}

export const enable_balancing: Writable<boolean> = writable(false);
export const robot_state: Writable<IRobotState | null> = writable(null);
export const physical_characteristics: Writable<physical.ICharacteristics | null> = writable(null);
export const pitch_controller_params: Writable<controllers.pitch.IParams | null> = writable(null);
export const pitch_controller_active: Writable<controllers.pitch.Type | null> = writable(null);
export const yaw_controller_params: Writable<controllers.yaw.IParams | null> = writable(null);
export const yaw_controller_active: Writable<controllers.yaw.Type | null> = writable(null);
export const motor_calibration: Writable<motor_calib.ILUT | null> = writable(null);
export const event_log: Writable<Array<ILog>> = writable([]);
