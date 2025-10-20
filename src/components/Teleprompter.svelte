<script>
	import CurrentPrompt from '@/components/CurrentPrompt.svelte';
	import NextPrompt from '@/components/NextPrompt.svelte';
	import { entries } from '@/lib/stores';
	import { state } from '@/lib/stores';

	$: currentEntry = $entries[$state.currentEntry];
	$: nextEntry =
		$state.currentEntry < $entries.length - 1 ? $entries[$state.currentEntry + 1] : null;
</script>

<section class={$$props.class}>
	<div class="grid w-full grid-rows-[1fr_20%]">
		<CurrentPrompt entry={currentEntry} />
		<NextPrompt entry={nextEntry} />
	</div>
</section>
