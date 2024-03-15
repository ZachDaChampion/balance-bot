<script lang="ts">
	import { Button, TextFieldOutlined } from 'm3-svelte';

	function connect() {
		alert('test');
	}

	let url = 'ws://balancebot:80';
</script>

<div id="container">
	<h1>BalanceBot Web UI</h1>
	<p>Welcome to the BalanceBot Web UI. Connect to your bot's WebSocket server below.</p>
	<div style="height: 48px;"></div>
	<form on:submit|preventDefault={connect}>
		<div id="form-container">
			<TextFieldOutlined bind:value={url} name="WebSocket URL" />
			<Button type="filled">Connect</Button>
		</div>
	</form>
</div>

<style>
	#container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		width: 100vw;
	}

	#form-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

</style>
