<template lang="pug">
	button.button(
		:type="type"
		:class="classButton"
		:style="styleButton"
		:disabled="disabled"
		@click="typeof onClick === 'function' ? onClick : () => {}"
	)
		svg.button-spinner.spinner(
			v-if="loading"
			width="20"
			height="20"
			viewBox="0 0 100 100"
			stroke-width="16"
		)
			path.spinner-track(
				d="M 50,50 m 0,-44.5 a 44.5,44.5 0 1 1 0,89 a 44.5,44.5 0 1 1 0,-89"
			)
			path.spinner-head(
				d="M 50,50 m 0,-44.5 a 44.5,44.5 0 1 1 0,89 a 44.5,44.5 0 1 1 0,-89"
				pathLength="280"
				stroke-dasharray="280 280"
				stroke-dashoffset="210"
			)
		v-icon(
			:icon="icon"
			:style="styleButtonChild"
		)/
		span.button-text(
			v-if="$slots.default"
			:style="styleButtonChild"
		)
			slot
		v-icon(
			:icon="rightIcon"
			:style="styleButtonChild"
		)/
</template>

<script lang="coffee">
	import vIcon from "./v-icon"

	export default
		props:
			active: default: no
			alignText: default: "center"
			disabled: default: no
			fill: default: no
			icon: default: null
			intent: default: ""
			large: default: no
			loading: default: no
			minimal: default: no
			onClick: default: null
			rightIcon: default: null
			small: default: no
			type: default: "button"

		computed:
			classButton: ->
				"active": @active
				"disabled": @disabled
				"fill": @fill
				"large": @large
				"loading": @loading
				"minimal": @minimal
				"small": @small
				"intent-#{@intent}": @intent

			styleButton: ->
				textAlign: @alignText

			styleButtonChild: ->
				visibility: "hidden" if @loading

		components: { vIcon }
</script>

<style lang="stylus">
	.button
		svg.spinner
			width 20px
			height 20px
			stroke-width 16
</style>
