<script>
	import { stringToSeconds } from '@/lib/utils';

	export let currentTime;
	export let totalTime;
</script>

<div class="h-2 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
	<div
		class="h-full bg-blue-500 transition-all duration-300 ease-in-out dark:bg-blue-400"
		style="width: {(stringToSeconds(currentTime) / stringToSeconds(totalTime)) * 100}%;"
	></div>
</div>
