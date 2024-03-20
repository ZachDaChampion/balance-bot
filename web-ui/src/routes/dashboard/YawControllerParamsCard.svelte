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
    import { yaw_controller } from '$lib/robot_state';

    let controller_type: undefined | 'pid' = 'pid';

    let pid_kp: undefined | string = undefined;
    let pid_ki: undefined | string = undefined;
    let pid_kd: undefined | string = undefined;
    let pid_integral_zero_threshold: undefined | string = undefined;
    let pid_integral_saturation: undefined | string = undefined;
    let pid_reset_integral: undefined | boolean = undefined;

    yaw_controller.subscribe((_) => {
        reset();
    });

    function reset() {
        controller_type = $yaw_controller?.params;

        pid_kp = $yaw_controller?.pid?.kp?.toFixed() || undefined;
        pid_ki = $yaw_controller?.pid?.ki?.toFixed() || undefined;
        pid_kd = $yaw_controller?.pid?.kd?.toFixed() || undefined;
        pid_integral_zero_threshold =
            $yaw_controller?.pid?.integralSaturationLimit?.toFixed() || undefined;
        pid_integral_saturation =
            $yaw_controller?.pid?.integralZeroThreshold?.toFixed() || undefined;
        pid_reset_integral = $yaw_controller?.pid?.resetIntegral || undefined;
    }

    function send() {
        // TODO: Send the physical parameters to the robot
    }
</script>

<Card type="filled">
    <div id="card-content">
        <h1>Yaw Controller</h1>
        {#if $yaw_controller === null}
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
                        value="pid"
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
