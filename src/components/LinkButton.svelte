<script lang="ts">
	export let href: string;
</script>

<a
	{href}
	class="inline-block min-w-[12rem] rounded-md bg-sky-800 p-3 text-center font-bold text-sky-200 transition-colors duration-300 hover:bg-sky-900"
	><slot /></a
>
