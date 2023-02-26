<script lang="ts">
	import { fly } from 'svelte/transition';
	import LinkButton from '../../components/LinkButton.svelte';
	import Counter from './Counter.svelte';

	let count: number = 0;
</script>

<div
	class="flex h-fit w-1/2 flex-col flex-wrap items-center justify-center gap-2 rounded-md bg-sky-700 p-2"
>
	<Counter {count} />
	<button
		class="rounded-md bg-blue-400 p-3 font-bold text-blue-200 transition-colors hover:bg-blue-600"
		on:click={() => count++}>Click here to update!</button
	>

	{#if count > 2}
		<div in:fly={{ duration: 300, x: 10 }}>
			<LinkButton href="/props-counter">Let's Continue</LinkButton>
		</div>
	{/if}
</div>
