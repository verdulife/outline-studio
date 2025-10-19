<script>
	import PromptTimer from '@/components/PromptTimer.svelte';

	export let entry;
	const { duration, title, owner } = entry;
</script>

<article class="flex flex-1 flex-col border-b border-neutral-200/10 p-4">
	<div class="flex flex-1 items-center">
		<p class="text-7xl">{title}</p>
	</div>

	<PromptTimer />
</article>
