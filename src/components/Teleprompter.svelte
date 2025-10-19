<script>
	import CurrentPrompt from '@/components/CurrentPrompt.svelte';
	import NextPrompt from '@/components/NextPrompt.svelte';
	import PreviousPrompt from '@/components/PreviousPrompt.svelte';
	import { entries } from '@/lib/stores';
	import { state } from '@/lib/stores';

	$: currentEntry = $entries[$state.currentEntry];
	$: previousEntry = $state.currentEntry > 0 ? $entries[$state.currentEntry - 1] : null;
	$: nextEntry =
		$state.currentEntry < $entries.length - 1 ? $entries[$state.currentEntry + 1] : null;
</script>

<section class={$$props.class}>
	<div class="grid w-full grid-rows-[auto_1fr_20%]">
		<PreviousPrompt entry={previousEntry} />
		<CurrentPrompt entry={currentEntry} />
		<NextPrompt entry={nextEntry} />
	</div>
</section>
