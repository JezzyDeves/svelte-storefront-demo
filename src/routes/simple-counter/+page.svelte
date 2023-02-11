<script lang="ts">
	let count = 0;
</script>

<div
	class="flex h-52 w-1/2 flex-col flex-wrap items-center justify-center rounded-md bg-sky-700 p-2"
>
	<h1 class="my-2 self-center text-center text-xl font-bold text-sky-200">
		Reactivity is easy and boilerplate free
	</h1>
	<button
		class="mt-2 rounded-md border-2 border-transparent bg-gradient-to-b from-blue-600 via-blue-500 to-blue-600 p-3 font-bold text-sky-200 hover:border-2 hover:border-sky-400"
		on:click={() => count++}>The count is: {count}</button
	>
</div>
