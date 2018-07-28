<template lang="pug">
	.button-group(
		:class="classButtonGroup"
	)
		slot
</template>

<script lang="coffee">
	export default
		props:
			alignText: default: ""
			fill: default: no
			large: default: no
			minimal: default: no
			vertical: default: no

		computed:
			classButtonGroup: ->
				"align-#{@alignText}": @alignText in ["left", "right"]
				"fill": @fill
				"large": @large
				"minimal": @minimal
				"vertical": @vertical
</script>
