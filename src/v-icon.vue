<template lang="pug">
	span.icon(
		v-if="icon"
		:class="classIcon"
		:style="styleIcon"
	)
</template>

<script lang="coffee">
	export default
		props:
			icon: default: null
			iconSize: default: 16
			intent: default: ""

		computed:
			classIcon: ->
				"icon-#{@icon}": @icon
				"intent-#{@intent}": @intent

			styleIcon: ->
				fontSize: Math.floor(@iconSize) + "px" if Number.isFinite @iconSize
</script>
