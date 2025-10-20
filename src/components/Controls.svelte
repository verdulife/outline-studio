<script lang="ts">
	import Button from '@/components/Button.svelte';
	import Next from '@/lib/assets/Next.svelte';
	import Pause from '@/lib/assets/Pause.svelte';
	import Play from '@/lib/assets/Play.svelte';
	import ProgressBar from '@/components/ProgressBar.svelte';

	import { globalState, entries } from '@/lib/stores';
	import { secondsToString } from '@/lib/utils';

	$: isFirst = $globalState.currentEntry === 0;
	$: isLast = $globalState.currentEntry + 1 >= $entries.length;

	function togglePlay() {
		$globalState.isPlaying = !$globalState.isPlaying;

		const interval = setInterval(() => {
			if ($globalState.isPlaying) {
				$globalState.timer += 1;
			} else {
				clearInterval(interval);
			}
		}, 1000);
	}

	function previous() {
		$globalState.currentEntry -= 1;
	}

	function next() {
		$globalState.currentEntry += 1;
	}

	function reset() {
		const check = confirm('¿Estás seguro de que quieres reiniciar?');
		if (!check) return;

		$globalState.isPlaying = false;
		$globalState.currentEntry = 0;
		$globalState.timer = 0;
	}
</script>

<section class={$$props.class}>
	<div class="grid w-full grid-cols-[auto_1fr_auto] bg-neutral-200/10">
		<div class="flex items-center gap-2 rounded-md bg-neutral-950 p-4">
			<Button click={previous} disabled={isFirst}><Next class="size-5 rotate-180" /></Button>

			<Button click={togglePlay}>
				{#if $globalState.isPlaying}
					<Pause class="size-5" />
				{:else}
					<Play class="size-5" />
				{/if}
			</Button>

			<Button click={next} disabled={isLast}><Next class="size-5" /></Button>
		</div>

		<div
			class="flex flex-1 grow items-center gap-4 rounded-md border-x border-neutral-200/10 bg-neutral-950 p-4"
		>
			<time class="text-neutral-500" datetime={secondsToString($globalState.timer)}>
				{secondsToString($globalState.timer)}
			</time>

			<ProgressBar />

			<time class="text-neutral-500" datetime={secondsToString($globalState.duration)}>
				{secondsToString($globalState.duration)}
			</time>
		</div>

		<div class="flex items-center rounded-md bg-neutral-950 p-4">
			<Button click={reset}>Reiniciar</Button>
		</div>
	</div>
</section>
