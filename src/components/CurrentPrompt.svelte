<script>
	import PromptTimer from '@/components/PromptTimer.svelte';
	import OwnerLabel from '@/components/OwnerLabel.svelte';
	
	import { entries, globalState } from '@/lib/stores';

	$: entry = $entries[$globalState.currentEntry];
</script>

<article class="flex flex-1 flex-col rounded-md border-b border-neutral-200/10 bg-neutral-950 p-4">
	<div class="flex flex-1 flex-col items-start gap-2">
		<OwnerLabel>{entry.owner}</OwnerLabel>
		<p class="text-6xl text-neutral-400">{entry.title}</p>
	</div>

	<PromptTimer {entry} class="text-[10ch]" />
</article>
