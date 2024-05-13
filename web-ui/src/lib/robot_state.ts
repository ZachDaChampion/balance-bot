import { writable, type Writable } from 'svelte/store';
import type {
    ILog,
    IPhysicalParams,
    IPitchControllerParams,
    IState,
    IYawControllerParams
} from './proto/proto';

export const robot_state: Writable<IState | null> = writable(null);
export const physical_params: Writable<IPhysicalParams | null> = writable(null);
export const pitch_controller: Writable<IPitchControllerParams | null> = writable(null);
export const yaw_controller: Writable<IYawControllerParams | null> = writable(null);
export const log: Writable<Array<ILog>> = writable([]);
