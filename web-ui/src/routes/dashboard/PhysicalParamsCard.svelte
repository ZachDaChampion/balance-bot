<script lang="ts">
    import { Button, Card, TextFieldOutlined, CircularProgressIndeterminate } from 'm3-svelte';
    import { log, physical_characteristics } from '$lib/robot_state';
    import { websocket_state } from '$lib/connection';
    import { write_register, read_register } from '$lib/messaging';
    import { float2str } from '$lib/util';
    import { Log, physical } from '$lib/proto/proto';

    let wheelbase: undefined | string = undefined;
    let wheel_radius: undefined | string = undefined;
    let motor_max_speed: undefined | string = undefined;
    let gravity: undefined | string = undefined;
    let torque_length: undefined | string = undefined;

    function reset() {
        wheelbase = float2str($physical_characteristics?.wheelBase, 4);
        wheel_radius = float2str($physical_characteristics?.wheelRadius, 4);
        motor_max_speed = float2str($physical_characteristics?.motorMaxSpeed, 4);
        gravity = float2str($physical_characteristics?.gravity, 4);
        torque_length = float2str($physical_characteristics?.torqueLength, 4);
    }

    physical_characteristics.subscribe((_) => {
        reset();
    });

    function send() {
        const new_params: physical.ICharacteristics = {
            wheelRadius: parseFloat(wheel_radius ?? '0'),
            wheelBase: parseFloat(wheelbase ?? '0'),
            motorMaxSpeed: parseFloat(motor_max_speed ?? '0'),
            gravity: parseFloat(gravity ?? '0'),
            torqueLength: parseFloat(torque_length ?? '0')
        };

        if (!$websocket_state.connected || !$websocket_state.connection) return;
        write_register({ physicalCharacteristics: new_params })
            .then((response) => {
                if (response.physicalCharacteristics)
                    $physical_characteristics = response.physicalCharacteristics;
                if (response.result)
                    log(
                        Log.Level.ERROR,
                        `Error sending physical characteristics: ${response.result.msg}`
                    );
            })
            .catch((error) => {
                log(Log.Level.ERROR, `Error sending physical characteristics: ${error}`);
            });
    }
</script>

<Card type="filled">
    <div id="card-content">
        <h1>Physical Characteristics</h1>
        {#if $physical_characteristics === null}
            <div style="display: flex; justify-content: center; padding: 16px;">
                <CircularProgressIndeterminate />
            </div>
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
            </form>
            <div style="min-height: 2rem; flex: 1 1 auto;" />
            <div class="btn-group">
                <Button type="filled" on:click={send}>Send to BalancBot</Button>
                <Button type="outlined" on:click={reset}>Reset</Button>
            </div>
        {/if}
    </div>
</Card>

<style>
    #card-content {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

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
