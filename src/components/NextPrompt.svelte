<script>
	import PromptTimer from '@/components/PromptTimer.svelte';

	export let entry;
</script>

<article class="flex flex-1 flex-col p-4">
	<div class="flex flex-1 items-center">
		{#if entry}
			<p class="text-4xl text-neutral-400">{entry.title}</p>
		{:else}
			<p class="text-4xl text-neutral-400 italic">--</p>
		{/if}
	</div>

	<PromptTimer />
</article>
