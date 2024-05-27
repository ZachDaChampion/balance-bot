<script lang="ts">
    import {
        Button,
        Card,
        TextFieldOutlined,
        CircularProgressIndeterminate,
        SegmentedButtonContainer,
        SegmentedButtonItem,
        Switch
    } from 'm3-svelte';
    import { log, yaw_controller_active, yaw_controller_params } from '$lib/robot_state';
    import { write_register } from '$lib/messaging';
    import { websocket_state } from '$lib/connection';
    import { float2str } from '$lib/util';
    import { Log, controllers } from '$lib/proto/proto';

    let controller_type: controllers.yaw.Type | undefined = controllers.yaw.Type.PID;

    let pid_kp: undefined | string = undefined;
    let pid_ki: undefined | string = undefined;
    let pid_kd: undefined | string = undefined;
    let pid_integral_zero_threshold: undefined | string = undefined;
    let pid_integral_saturation: undefined | string = undefined;
    let pid_reset_integral: undefined | boolean = undefined;

    yaw_controller_params.subscribe((_) => {
        reset_params();
    });
    yaw_controller_active.subscribe((_) => {
        reset_active();
    });

    function reset_params() {
        pid_kp = float2str($yaw_controller_params?.pid?.base?.kp, 6);
        pid_ki = float2str($yaw_controller_params?.pid?.base?.ki, 6);
        pid_kd = float2str($yaw_controller_params?.pid?.base?.kd, 6);
        pid_integral_zero_threshold = float2str(
            $yaw_controller_params?.pid?.base?.integralSaturationLimit,
            6
        );
        pid_integral_saturation = float2str(
            $yaw_controller_params?.pid?.base?.integralZeroThreshold,
            6
        );
        pid_reset_integral = $yaw_controller_params?.pid?.base?.resetIntegral || undefined;
    }

    function reset_active() {
        controller_type = $yaw_controller_active ?? undefined;
    }

    function send() {
        const new_params: controllers.yaw.IParams = {
            pid:
                controller_type == controllers.yaw.Type.PID
                    ? {
                          base: {
                              kp: parseFloat(pid_kp ?? '0'),
                              ki: parseFloat(pid_ki ?? '0'),
                              kd: parseFloat(pid_kd ?? '0'),
                              kf: 0, // TODO
                              integralZeroThreshold: parseFloat(pid_integral_zero_threshold ?? '0'),
                              integralSaturationLimit: parseFloat(pid_integral_saturation ?? '0'),
                              resetIntegral: pid_reset_integral || false
                          }
                      }
                    : undefined
        };

        if (!$websocket_state.connected || !$websocket_state.connection) return;
        write_register({ yawControllerParams: new_params })
            .then((response) => {
                if (response.yawControllerParams)
                    $yaw_controller_params = response.yawControllerParams;
                if (response.result)
                    log(
                        Log.Level.ERROR,
                        `Error sending yaw controller params: ${response.result.msg}`
                    );
            })
            .catch((error) => {
                log(Log.Level.ERROR, `Error sending yaw controller params: ${error}`);
            });
        write_register({ yawControllerActive: controller_type })
            .then((response) => {
                if (response.yawControllerActive)
                    $yaw_controller_active = response.yawControllerActive;
                if (response.result)
                    log(
                        Log.Level.ERROR,
                        `Error sending active yaw controller: ${response.result.msg}`
                    );
            })
            .catch((error) => {
                log(Log.Level.ERROR, `Error sending active yaw controller: ${error}`);
            });
    }
</script>

<Card type="filled">
    <div id="card-content">
        <h1>Yaw Controller</h1>
        {#if $yaw_controller_active === null}
            <div style="display: flex; justify-content: center; padding: 16px;">
                <CircularProgressIndeterminate />
            </div>
        {:else}
            <div id="controller-select">
                <SegmentedButtonContainer>
                    <input
                        type="radio"
                        name="yaw-controller-select"
                        id="yaw-controller-pid"
                        value={controllers.yaw.Type.PID}
                        bind:group={controller_type}
                    />
                    <SegmentedButtonItem input="yaw-controller-pid">PID</SegmentedButtonItem>
                </SegmentedButtonContainer>
            </div>

            <form on:submit|preventDefault={send}>
                <div class="txt-group">
                    <TextFieldOutlined
                        --m3-util-background="var(--m3-scheme-surface-container-highest)"
                        name="Kp"
                        bind:value={pid_kp}
                    />
                    <TextFieldOutlined
                        --m3-util-background="var(--m3-scheme-surface-container-highest)"
                        name="Ki"
                        bind:value={pid_ki}
                    />
                    <TextFieldOutlined
                        --m3-util-background="var(--m3-scheme-surface-container-highest)"
                        name="Kd"
                        bind:value={pid_kd}
                    />
                    <TextFieldOutlined
                        --m3-util-background="var(--m3-scheme-surface-container-highest)"
                        name="Integral deadband"
                        bind:value={pid_integral_zero_threshold}
                    />
                    <TextFieldOutlined
                        --m3-util-background="var(--m3-scheme-surface-container-highest)"
                        name="Integral saturation limit"
                        bind:value={pid_integral_saturation}
                    />
                    <div class="switch-group">
                        <p>Reset integral when crossing 0</p>
                        <label for={undefined}>
                            <Switch bind:checked={pid_reset_integral} />
                        </label>
                    </div>
                </div>
            </form>
            <div style="min-height: 1rem; flex: 1 1 auto;" />
            <div class="btn-group">
                <Button type="filled" on:click={send}>Send to BalancBot</Button>
                <Button
                    type="outlined"
                    on:click={() => {
                        reset_active();
                        reset_params();
                    }}>Reset</Button
                >
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

    #controller-select {
        margin-bottom: 2rem;
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

    .switch-group {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 0 1rem;
    }
</style>
