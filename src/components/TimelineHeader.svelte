<script>
	import Button from '@/components/Button.svelte';
	import Clock from '@/lib/assets/Clock.svelte';

	import { entries, globalState } from '@/lib/stores';
	import { calculateTotalDuration, secondsToString } from '@/lib/utils';

	function addEntry() {
		const fakeEntry = {
			order: $entries.length + 1,
			duration: 600,
			title: 'Nueva entrada',
			owner: 'Usuario'
		};

		$entries = [...$entries, fakeEntry];
		$globalState.duration = calculateTotalDuration($entries);
	}
</script>

<header
	class="sticky top-0 flex items-center justify-between border-b border-neutral-200/10 bg-neutral-950 p-4"
>
	<p class="inline-flex items-center gap-2 text-sm text-neutral-500">
		<Clock class="size-4" /> Total

		<time class="font-semibold" datetime={secondsToString($globalState.duration)}>
			{secondsToString($globalState.duration)}
		</time>
	</p>

	<Button click={addEntry}>Añadir entrada</Button>
</header>
