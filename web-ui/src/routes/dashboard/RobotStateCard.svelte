<script lang="ts">
    import { Button, Card } from 'm3-svelte';
    import { goto } from '$app/navigation';
    import { connect, websocket_state } from '$lib/connection';
    import { robot_state } from '$lib/robot_state';
    import LabelledSwitch from '$lib/LabelledSwitch.svelte';
    import { send_command_message } from '$lib/messaging';
    import { Command } from '$lib/proto/proto';

    let active: boolean = false;
    let active_switch_timeout: NodeJS.Timeout | undefined = undefined;

    function set_active(val: boolean) {
        if (!$websocket_state.connected || !$websocket_state.connection) return;

        const cmd = val ? Command.START : Command.STOP;
        send_command_message(cmd)
            .then((response) => {
                console.log(
                    `Received response for ${response.commandId} with code ${response.code}`
                );
            })
            .catch((error) => {
                console.error(error);
            });

        active_switch_timeout = setTimeout(() => {
            active = $robot_state?.active ?? false;
        }, 100);
    }

    $: set_active(active);
</script>

<Card type="filled">
    <h1>BalanceBot Web UI</h1>
    {#if !$websocket_state.connected}
        <div>
            <p class="error">BalanceBot is disconnected!</p>
            <p>Previously connected at <code>{$websocket_state.address}</code>.</p>
        </div>
        <div class="btn-group">
            <Button type="filled" on:click={connect}>Reconnect</Button>
            <Button type="outlined" on:click={() => goto('/')}
                >Connect to a different WebSocket</Button
            >
        </div>
    {:else}
        <p>Connected at <code>{$websocket_state.address}</code>.</p>
        <LabelledSwitch label="Balancing:" bind:checked={active} />
    {/if}
</Card>

<style>
    .error {
        color: rgb(var(--m3-scheme-error));
    }

    .btn-group {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
        gap: 1rem;
    }
</style>
