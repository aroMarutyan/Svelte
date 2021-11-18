<script>
	import {fade, fly} from "svelte/transition"
	export let name;
	import {randomStore} from "./store"
	import Child from "./Child.svelte"
import { dataset_dev } from "svelte/internal";

	let randos = [];

	// $: result = randos
	// $: result = Math.round(rando) ? "winner": "loser"

	function setRando(){
		const rando = Math.round(Math.random()*100)
		randos = [...randos, rando]
	}
</script>

<main>
{$randomStore} 
<!-- //Using $ Automatically subscribes to the store and manages that subscription. Very useful! -->
<button on:click={()=>randomStore.set(Math.random())}></button>

	<!-- <h1>Hello {name}!</h1>
<p>The random number is {rando}</p>
<p>{result}</p>
<p>{result}</p>
	<button on:click={setRando}>RandomizE</button>
	<!-- <input bind:value={rando} > -->
	<!-- {#if result > 75}
<p>Big winner! top 25%</p>
	{:else if result > 50}
<p transition:fade>Decent, top 50%</p>
{:else}
<p 
in:fly={{x:1000, duration:500}}
out:fly={{x:-500, duration:500}}
>Loser! 💩💩💩</p>
	{/if} -->

	<Child {...data}/>
	<!-- <Child userId={dataset_dev.userId} name={data.name} email={data.email}/> -->
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>