<script lang="ts">
    import PhysicalParamsCard from '$lib/dashboard/PhysicalParamsCard.svelte';
    import RobotStateCard from '$lib/dashboard/RobotStateCard.svelte';
</script>

<!-- Header card -->

<RobotStateCard />
<PhysicalParamsCard />

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
