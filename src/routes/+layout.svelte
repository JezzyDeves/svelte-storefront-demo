<script lang="ts">
	import '../app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />

<div
	class="flex min-h-screen w-screen flex-col flex-wrap content-center items-center justify-center bg-slate-900 font-roboto"
>
	<slot />
</div>
