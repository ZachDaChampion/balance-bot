<script lang="ts">
    import { goto } from '$app/navigation';
    import { Button, Card, TextFieldOutlined } from 'm3-svelte';
    import { websocket_state, connect } from '$lib/connection';

    websocket_state.subscribe((value) => {
        if (value.connected) {
            goto('/dashboard');
        }
    });
</script>

<div id="container">
    <Card type="filled">
        <h1>BalanceBot Web UI</h1>
        <p>
            Welcome to the BalanceBot Web UI.<br />
            Connect to your bot's WebSocket server below.
        </p>
        <div style="height: 48px;"></div>
        <form on:submit|preventDefault={connect}>
            <div id="form-container">
                <TextFieldOutlined
                    --m3-util-background="var(--m3-scheme-surface-container-highest)"
                    --m3-textfield-outlined-shape="var(--m3-util-rounding-full)"
                    bind:value={$websocket_state.address}
                    name="WebSocket URL"
                />
                <Button type="filled">Connect</Button>
            </div>
        </form>
    </Card>
</div>

<style>
    #container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100vh;
        width: 100vw;
    }

    #form-container {
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
        gap: 1rem;
    }
</style>
