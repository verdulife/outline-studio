<script>
	import PromptTimer from '@/components/PromptTimer.svelte';
	import OwnerLabel from '@/components/OwnerLabel.svelte';

	import { entries, globalState } from '@/lib/stores';

	$: entry = $entries[$globalState.currentEntry + 1] || null;
</script>

<article class="flex flex-1 flex-col rounded-md bg-neutral-950 p-4">
	<div class="flex flex-1 items-start">
		{#if entry}
			<div class="flex items-center gap-3">
				<OwnerLabel>{entry.owner}</OwnerLabel>
				<p class="text-neutral-400">{entry.title}</p>
			</div>
		{:else}
			<p class=" text-neutral-400 italic">--</p>
		{/if}
	</div>

	{#if entry}
		<PromptTimer {entry} />
	{/if}
</article>
