<script>
	import Button from '@/components/Button.svelte';
	import Clock from '@/lib/assets/Clock.svelte';
	import { entries } from '@/lib/stores';

	export let duration;

	function addEntry() {
		const fakeEntry = {
			order: $entries.length + 1,
			duration: '30:00',
			title: 'Nueva entrada',
			owner: 'Usuario'
		};

		$entries = [...$entries, fakeEntry];
	}
</script>

<header
	class="sticky top-0 flex items-center justify-between border-b border-neutral-200/10 bg-neutral-950 p-4"
>
	<p class="text-sm text-neutral-500 inline-flex items-center gap-2">
		<Clock class="size-4" /> Total <time class="font-semibold" datetime={duration}>{duration}</time>
	</p>
	<Button click={addEntry}>Añadir entrada</Button>
</header>
