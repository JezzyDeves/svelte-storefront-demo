<script lang="ts">
	import { fly } from 'svelte/transition';
	import LinkButton from '../../components/LinkButton.svelte';

	let awaiter: Promise<void>;
	let waited: boolean = false;

	async function waitForSomething(): Promise<void> {
		return new Promise<void>((resolve) => {
			setTimeout(() => {
				waited = true;
				resolve();
			}, 1500);
		});
	}
</script>

<div
	class="flex h-52 w-fit flex-col flex-wrap items-center justify-center gap-2 rounded-md bg-gradient-to-b from-sky-800 to-sky-700 p-2 px-10"
>
	<h1 class="my-2 self-center text-center text-xl font-bold text-sky-200">
		Awaiting and managing loading state is super easy!
	</h1>
	<button
		class="mt-2 rounded-md bg-blue-400 p-3 font-bold text-blue-200 transition-colors hover:bg-blue-600"
		on:click={() => (awaiter = waitForSomething())}>Click me to wait</button
	>

	{#await awaiter}
		<small class="font-bold text-blue-200">Loading...</small>
	{:then}
		{#if waited}
			<small class="font-bold text-blue-200">Done!</small>
		{:else}
			<small class="font-bold text-blue-200">Click the button to see me change!</small>
		{/if}
	{/await}

	{#if waited}
		<div in:fly={{ duration: 300, x: 10 }}>
			<LinkButton href="/">Let's Continue</LinkButton>
		</div>
	{/if}
</div>
