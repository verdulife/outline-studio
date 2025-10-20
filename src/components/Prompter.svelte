<script>
	import CurrentPrompt from '@/components/CurrentPrompt.svelte';
	import NextPrompt from '@/components/NextPrompt.svelte';
</script>

<section class={$$props.class}>
	<div class="grid w-full grid-rows-[1fr_4lh] text-4xl bg-neutral-200/10">
		<CurrentPrompt />
		<NextPrompt />
	</div>
</section>
