<script lang="ts">
    import { Card } from 'm3-svelte';
    import { Line } from 'svelte-chartjs';
    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        LineElement,
        LinearScale,
        PointElement,
        CategoryScale
    } from 'chart.js';
    ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);

    let dataLine = {
        datasets: [
            {
                label: 'My First dataset',
                fill: true,
                lineTension: 0.3,
                backgroundColor: 'rgba(225, 204,230, .3)',
                borderColor: 'rgb(205, 130, 158)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgb(205, 130,1 58)',
                pointBackgroundColor: 'rgb(255, 255, 255)',
                pointBorderWidth: 10,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgb(0, 0, 0)',
                pointHoverBorderColor: 'rgba(220, 220, 220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [
                    { x: 0, y: 10 },
                    { x: 1, y: 15 },
                    { x: 2, y: 20 },
                    { x: 3, y: 25 },
                    { x: 5, y: 35 }
                ]
            }
        ]
    };
</script>

<Card type="filled">
    <div id="card-content">
        <h1>Pitch and Yaw</h1>
        <Line data={dataLine} options={{ responsive: true, scales: { x: { type: 'linear' } } }} />
    </div>
</Card>

<style>
    #card-content {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
</style>
