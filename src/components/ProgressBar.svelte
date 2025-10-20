<script>
	import { globalState } from '@/lib/stores';
</script>

<div class="h-2 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
	<div
		class="h-full bg-blue-500 transition-all duration-300 ease-in-out dark:bg-blue-400"
		style="width: {($globalState.timer / $globalState.duration) * 100}%;"
	></div>
</div>
