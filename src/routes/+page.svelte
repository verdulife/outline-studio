<script>
	import Controls from '@/components/Controls.svelte';
	import Teleprompter from '@/components/Teleprompter.svelte';
	import Timeline from '@/components/Timeline.svelte';
</script>

<main
	class="grid h-full grid-cols-1 grid-rows-[1fr_auto] overflow-clip rounded-md border border-neutral-200/10 bg-neutral-950 shadow-lg"
>
	<div class="flex h-full overflow-hidden">
		<Timeline class="w-lg overflow-y-scroll border-r border-neutral-200/10" />
		<Teleprompter class="flex grow" />
	</div>

	<Controls class="col-span-2 flex border-t border-neutral-200/10" />
</main>
