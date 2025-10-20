<script>
	import OwnerLabel from '@/components/OwnerLabel.svelte';
	import { secondsToString } from '@/lib/utils';

	export let entry;
	const { duration, title, owner } = entry;
</script>

<article
	class="flex flex-col items-start rounded-md border-b border-neutral-200/10 bg-neutral-950 p-4"
>
	<p class="text-lg">{title}</p>

	<div class="flex w-full items-end justify-between">
		<span class="text-2xl text-neutral-400">{secondsToString(duration)}</span>
		<OwnerLabel>{owner}</OwnerLabel>
	</div>
</article>
