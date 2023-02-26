<script lang="ts">
	import { fly } from 'svelte/transition';
	import LinkButton from '../../components/LinkButton.svelte';

	let count = 0;
</script>

<div
	class="flex h-52 w-fit flex-col flex-wrap items-center justify-center gap-2 rounded-md bg-gradient-to-b from-sky-800 to-sky-700 p-2 px-10"
>
	<h1 class="my-2 self-center text-center text-xl font-bold text-sky-200">
		Reactivity is easy and boilerplate free
	</h1>
	<button
		class="mt-2 rounded-md bg-blue-400 p-3 font-bold text-blue-200 transition-colors hover:bg-blue-600"
		on:click={() => count++}>The count is: {count}</button
	>

	{#if count > 2}
		<div in:fly={{ duration: 300, x: 10 }}>
			<LinkButton href="/props-counter">Let's Continue</LinkButton>
		</div>
	{/if}
</div>
