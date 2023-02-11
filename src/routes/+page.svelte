<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let visible = false;
	onMount(() => {
		visible = true;
	});
</script>

{#if visible}
	<h1
		in:fade={{ duration: 2000 }}
		class="mb-3 rounded-md bg-sky-700 p-2 text-center text-4xl font-bold text-sky-200"
	>
		Welcome to Svelte + SvelteKit 👋
	</h1>
	<a
		href="/simple-counter"
		in:fade={{ duration: 500, delay: 2000 }}
		class="w-48 rounded-md bg-sky-800 p-3 text-center font-bold text-sky-200 transition-colors duration-300 hover:bg-sky-900"
		>Let's Get Started!</a
	>
{/if}
