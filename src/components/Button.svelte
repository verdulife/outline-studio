<script>
	export let click,
		disabled = false;
</script>

<button
	on:click={click}
	class="flex cursor-pointer items-center justify-center rounded bg-neutral-900 px-4 py-2 text-sm font-semibold text-neutral-600 transition-all hover:text-neutral-400 active:scale-95"
	class:opacity-40={disabled}
	class:pointer-events-none={disabled}
>
	<slot />
</button>
