import { writable, type Writable } from 'svelte/store';
import type {
    Log,
    PhysicalParams,
    PitchControllerParams,
    State,
    YawControllerParams
} from './proto/proto';

export const robot_state: Writable<State | null> = writable(null);
export const physical_params: Writable<PhysicalParams | null> = writable(null);
export const pitch_controller: Writable<PitchControllerParams | null> = writable(null);
export const yaw_controller: Writable<YawControllerParams | null> = writable(null);
export const log: Writable<Array<Log>> = writable([]);
