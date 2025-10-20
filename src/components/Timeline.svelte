<script>
	import EntryCard from '@/components/EntryCard.svelte';
	import TimelineHeader from '@/components/TimelineHeader.svelte';

	import { calculateTotalDuration } from '@/lib/utils';
	import { entries } from '@/lib/stores';

	$: duration = calculateTotalDuration($entries);
</script>

<section class={$$props.class}>
	<div class="border-r border-neutral-200/10">
		<TimelineHeader {duration} />

		<div class="flex h-full flex-col">
			{#each $entries as entry}
				<EntryCard {entry} />
			{/each}
		</div>
	</div>
</section>
