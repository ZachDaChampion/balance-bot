<script lang="ts">
    import { Button, Switch, Card } from 'm3-svelte';
    import { goto } from '$app/navigation';
    import { connect, websocket_state } from '$lib/connection';
    import { robot_state } from '$lib/robot_state';

    let active: boolean = false;
    let active_switch_timeout: NodeJS.Timeout | undefined = undefined;

    function set_active(val: boolean) {
        // TODO: Connect to the WebSocket
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
        <div class="toggle-container">
            <p>Balancing:</p>
            <label for={undefined}>
                <Switch bind:checked={active} />
            </label>
        </div>
    {/if}
</Card>

<style>
    .error {
        color: rgb(var(--m3-scheme-error));
    }

    .toggle-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        gap: 1rem;
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
