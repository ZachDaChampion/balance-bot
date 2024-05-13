<script lang="ts">
    import PhysicalParamsCard from './PhysicalParamsCard.svelte';
    import PitchControllerParamsCard from './PitchControllerParamsCard.svelte';
    import PitchYawChartCard from './PitchYawChartCard.svelte';
    import RobotStateCard from './RobotStateCard.svelte';
    import YawControllerParamsCard from './YawControllerParamsCard.svelte';
</script>

<!-- Header card -->

<RobotStateCard />
<PhysicalParamsCard />
<PitchControllerParamsCard />
<YawControllerParamsCard />
<PitchYawChartCard />
