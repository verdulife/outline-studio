<script>
	import OwnerLabel from '@/components/OwnerLabel.svelte';

	export let entry;
	const { duration, title, owner } = entry;
</script>

<article class="flex flex-col items-start border-b border-neutral-200/10 p-4">
	<span class="text-xl text-neutral-400">{duration}</span>
	<p class="text-2xl">{title}</p>
	<OwnerLabel>{owner}</OwnerLabel>
</article>
