<script lang="ts">
	import Button from '@/components/Button.svelte';
	import Next from '@/lib/assets/Next.svelte';
	import Pause from '@/lib/assets/Pause.svelte';
	import Play from '@/lib/assets/Play.svelte';
	import ProgressBar from '@/components/ProgressBar.svelte';

	import { calculateTotalDuration, secondsToString } from '@/lib/utils';
	import { entries } from '@/lib/stores';
	import { state } from '@/lib/stores';

	let interval: ReturnType<typeof setInterval>;

	$: currentTime = secondsToString($state.timer);
	$: totalTime = calculateTotalDuration($entries);

	function togglePlay() {
		$state.isPlaying = !$state.isPlaying;

		if (!$state.isPlaying) {
			clearInterval(interval);
		} else {
			interval = setInterval(() => {
				state.update((s) => ({ ...s, timer: s.timer + 1 }));
			}, 1000);
		}
	}

	function next() {
		state.update((s) => ({ ...s, currentEntry: s.currentEntry + 1 }));
	}

	function previous() {
		state.update((s) => ({ ...s, currentEntry: Math.max(0, s.currentEntry - 1) }));
	}

	function reset() {
		const check = confirm('¿Estás seguro de que quieres reiniciar?');
		if (!check) return;

		state.set({ isPlaying: false, currentEntry: 0, timer: 0 });
	}
</script>

<section class={$$props.class}>
	<div class="flex flex-1 items-center gap-2 px-4">
		<Button click={next}><Next class="size-5 rotate-180" /></Button>

		<Button click={togglePlay}>
			{#if $state.isPlaying}
				<Pause class="size-5" />
			{:else}
				<Play class="size-5" />
			{/if}
		</Button>

		<Button click={next}><Next class="size-5" /></Button>

		<div class="mx-2 flex flex-1 grow items-center gap-4 border-x border-neutral-200/10 p-4">
			<time class="text-neutral-500" datetime={currentTime}>{currentTime}</time>
			<ProgressBar {currentTime} {totalTime} />
			<time class="text-neutral-500" datetime={totalTime}>{totalTime}</time>
		</div>

		<Button click={reset}>Reiniciar</Button>
	</div>
</section>
