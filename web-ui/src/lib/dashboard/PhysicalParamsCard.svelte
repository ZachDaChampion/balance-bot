<script lang="ts">
    import { Button, Switch, Card, TextFieldOutlined } from 'm3-svelte';
    import { physical_params } from '$lib/robot_state';

    let wheelbase: undefined | string = undefined;
    let wheel_radius: undefined | string = undefined;
    let motor_max_speed: undefined | string = undefined;
    let gravity: undefined | string = undefined;
    let torque_length: undefined | string = undefined;

    function reset() {
        wheelbase = $physical_params?.wheelBase?.toFixed();
        wheel_radius = $physical_params?.wheelRadius?.toFixed();
        motor_max_speed = $physical_params?.motorMaxSpeed?.toFixed();
        gravity = $physical_params?.gravity?.toFixed();
        torque_length = $physical_params?.torqueLength?.toFixed();
    }

    function send() {
        // TODO: Send the physical parameters to the robot
    }
</script>

<Card type="filled">
    <h1>Physical Characteristics</h1>
    {#if $physical_params === null}
        <p>Loading...</p>
    {:else}
        <form on:submit|preventDefault={send}>
            <div class="txt-group">
                <TextFieldOutlined
                    --m3-util-background="var(--m3-scheme-surface-container-highest)"
                    name="Wheelbase (m)"
                    bind:value={wheelbase}
                />
                <TextFieldOutlined
                    --m3-util-background="var(--m3-scheme-surface-container-highest)"
                    name="Wheel radius (m)"
                    bind:value={wheel_radius}
                />
                <TextFieldOutlined
                    --m3-util-background="var(--m3-scheme-surface-container-highest)"
                    name="Motor max speed (rpm)"
                    bind:value={motor_max_speed}
                />
                <TextFieldOutlined
                    --m3-util-background="var(--m3-scheme-surface-container-highest)"
                    name="Gravity (m/s²)"
                    bind:value={gravity}
                />
                <TextFieldOutlined
                    --m3-util-background="var(--m3-scheme-surface-container-highest)"
                    name="Torque length (N·m)"
                    bind:value={torque_length}
                />
            </div>
            <div style="height: 1rem;" />
            <div class="btn-group">
                <Button type="filled" on:click={send}>Send to BalancBot</Button>
                <Button type="outlined" on:click={reset}>Reset</Button>
            </div>
        </form>
    {/if}
</Card>

<style>
    .btn-group {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
        gap: 1rem;
    }

    .txt-group {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>
