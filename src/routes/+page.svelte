<script>
	import LinkButton from '../components/LinkButton.svelte';

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
	<div in:fade={{ duration: 500, delay: 2000 }}>
		<LinkButton href="/simple-counter">Let's Get Started</LinkButton>
	</div>
{/if}
