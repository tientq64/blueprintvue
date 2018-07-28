<template lang="pug">
	.control-group(:class="classControlGroup")
		slot
</template>

<script lang="coffee">
	export default
		props:
			fill: default: no
			vertical: default: no

		computed:
			classControlGroup:
				"fill": @fill
				"vertical": @vertical
</script>
