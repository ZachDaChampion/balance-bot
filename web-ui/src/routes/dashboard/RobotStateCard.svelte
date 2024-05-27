<script lang="ts">
    import { Button, Card } from 'm3-svelte';
    import { goto } from '$app/navigation';
    import { connect, websocket_state } from '$lib/connection';
    import { enable_balancing, log, robot_state } from '$lib/robot_state';
    import LabelledSwitch from '$lib/LabelledSwitch.svelte';
    import { write_register } from '$lib/messaging';
    import { Log } from '$lib/proto/proto';

    let active: boolean = false;

    function set_active(val: boolean) {
        if (val === $enable_balancing) return;
        if (!$websocket_state.connected || !$websocket_state.connection) return;

        write_register({ enableBalancing: val })
            .then((response) => {
                if (response.enableBalancing != null) $enable_balancing = response.enableBalancing;
                if (response.result)
                    log(
                        Log.Level.ERROR,
                        `Error enabling/disablng balancing: ${response.result.msg}`
                    );
            })
            .catch((error) => {
                log(Log.Level.ERROR, `Error enabling/disablng balancing: ${error}`);
                active = $enable_balancing;
            });
    }

    $: set_active(active);

    enable_balancing.subscribe((_) => {
        active = $enable_balancing;
    });
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
