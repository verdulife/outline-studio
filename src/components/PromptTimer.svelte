<script lang="ts">
	import { secondsToString } from '@/lib/utils';

	export let entry;
</script>

<footer class={$$props.class}>
	<div class="flex items-end justify-between">
		<p>
			{secondsToString(entry.duration)}
		</p>
	</div>
</footer>
