<script lang="ts">
    import { Switch } from 'm3-svelte';

    export let label: string;
    export let checked: boolean | undefined;
</script>

<div class="toggle-container">
    <span>{label}</span>
    <label for={undefined}>
        <Switch bind:checked />
    </label>
</div>

<style>
    .toggle-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        gap: 1rem;
    }
</style>
