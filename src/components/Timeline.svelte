<script>
	import EntryCard from '@/components/EntryCard.svelte';
	import TimelineHeader from '@/components/TimelineHeader.svelte';

	import { entries, globalState } from '@/lib/stores';
	import { calculateTotalDuration } from '@/lib/utils';

	$globalState.duration = calculateTotalDuration($entries);
</script>

<section class={$$props.class}>
	<div class="min-h-full border-r border-neutral-200/10">
		<TimelineHeader />

		<div class="flex h-full flex-col bg-neutral-200/10">
			{#each $entries as entry}
				<EntryCard {entry} />
			{/each}
		</div>
	</div>
</section>
