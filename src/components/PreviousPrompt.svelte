<script>
	import PromptTimer from '@/components/PromptTimer.svelte';

	export let entry;
</script>

<article class="flex flex-1 flex-col border-b border-neutral-200/10 p-4">
	<div class="flex-1">
		{#if entry}
			<p class="text-3xl text-neutral-600">{entry.title}</p>
		{:else}
			<p class="text-3xl text-neutral-600 italic">--</p>
		{/if}
	</div>

	<PromptTimer />
</article>
