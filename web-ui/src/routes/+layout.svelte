<script>
    import { StyleFromScheme, Dialog, Button, CircularProgressIndeterminate } from 'm3-svelte';
    import { websocket_state, connect } from '$lib/connection';
    import { goto } from '$app/navigation';
</script>

<StyleFromScheme
    lightScheme={{
        primary: 4284438417,
        onPrimary: 4294967295,
        primaryContainer: 4293254911,
        onPrimaryContainer: 4279963977,
        inversePrimary: 4291411967,
        secondary: 4284439665,
        onSecondary: 4294967295,
        secondaryContainer: 4293255161,
        onSecondaryContainer: 4280031531,
        tertiary: 4286337636,
        onTertiary: 4294967295,
        tertiaryContainer: 4294957286,
        onTertiaryContainer: 4281340192,
        error: 4290386458,
        onError: 4294967295,
        errorContainer: 4294957782,
        onErrorContainer: 4282449922,
        background: 4294834431,
        onBackground: 4280032032,
        surface: 4294834431,
        onSurface: 4280032032,
        surfaceVariant: 4293255404,
        onSurfaceVariant: 4282926414,
        inverseSurface: 4281413430,
        inverseOnSurface: 4294242295,
        outline: 4286150271,
        outlineVariant: 4291413456,
        shadow: 4278190080,
        scrim: 4278190080,
        surfaceDim: 4292729056,
        surfaceBright: 4294834431,
        surfaceContainerLowest: 4294967295,
        surfaceContainerLow: 4294439674,
        surfaceContainer: 4294044916,
        surfaceContainerHigh: 4293650158,
        surfaceContainerHighest: 4293255657,
        surfaceTint: 4284438417
    }}
    darkScheme={{
        primary: 4291411967,
        onPrimary: 4281346143,
        primaryContainer: 4282859383,
        onPrimaryContainer: 4293254911,
        inversePrimary: 4284438417,
        secondary: 4291412956,
        onSecondary: 4281413185,
        secondaryContainer: 4282926169,
        onSecondaryContainer: 4293255161,
        tertiary: 4293769421,
        onTertiary: 4282918198,
        tertiaryContainer: 4284562252,
        onTertiaryContainer: 4294957286,
        error: 4294948011,
        onError: 4285071365,
        errorContainer: 4287823882,
        onErrorContainer: 4294957782,
        background: 4279505688,
        onBackground: 4293255657,
        surface: 4279505688,
        onSurface: 4293255657,
        surfaceVariant: 4282926414,
        onSurfaceVariant: 4291413456,
        inverseSurface: 4293255657,
        inverseOnSurface: 4281413430,
        outline: 4287860633,
        outlineVariant: 4282926414,
        shadow: 4278190080,
        scrim: 4278190080,
        surfaceDim: 4279505688,
        surfaceBright: 4282005566,
        surfaceContainerLowest: 4279110931,
        surfaceContainerLow: 4280032032,
        surfaceContainer: 4280295205,
        surfaceContainerHigh: 4281018671,
        surfaceContainerHighest: 4281676858,
        surfaceTint: 4291411967
    }}
/>

<!-- Connection failed dialog -->
<Dialog headline="Couldn't connect to WebSocket" bind:open={$websocket_state.show_error_dialog}>
    <p>We were unable to connect to a BalanceBot at <code>{$websocket_state.address}</code>.</p>
    <svelte:fragment slot="buttons">
        <Button
            type="text"
            on:click={() => {
                $websocket_state.show_error_dialog = false;
                goto('/');
            }}>Connect to a different WebSocket</Button
        >
        <Button type="filled" on:click={connect}>Retry</Button>
    </svelte:fragment>
</Dialog>

<!-- Actively connecting dialog -->
<Dialog
    headline="Connecting to WebSocket"
    closeOnClick={false}
    closeOnEsc={false}
    bind:open={$websocket_state.is_connecting}
>
    <div class="loading">
        <CircularProgressIndeterminate />
        <p>Attempting to connect to <code>{$websocket_state.address}</code></p>
    </div>
</Dialog>

<slot />

<style>
    .loading {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 1rem;
    }
</style>
