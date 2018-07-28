<template lang="pug">
	ul.menu.elevation-1(
		:class="classMenu"
		:style="styleMenu"
	)
		slot
</template>

<script lang="coffee">
	export default
		props:
			large: default: no
			maxWidth: default: "fit-content"

		computed:
			classMenu: ->
				"large": @large

			styleMenu: ->
				maxWidth: @maxWidth + (Number.isFinite(@maxWidth) and "px" or "")
</script>
