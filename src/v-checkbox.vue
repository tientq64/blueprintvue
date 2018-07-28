<template lang="pug">
	label.control.checkbox(
		:class="classCheckbox"
	)
		input(
			v-model="curChecked"
			type="checkbox"
			:disabled="disabled"
			:indeterminate="indeterminate"
			@change="$emit('update:checked', curChecked), typeof onChange === 'function' ? onChange : () => {}"
		)/
		span.control-indicator
		slot {{label}}
</template>

<script lang="coffee">
	export default
		props:
			alignIndicator: default: "left"
			checked: default: no
			disabled: default: no
			indeterminate: default: no
			inline: default: no
			label: default: ""
			large: default: no
			onChange: default: null

		data: ->
			curChecked: @checked

		computed:
			classCheckbox: ->
				"align-#{@alignIndicator}": @alignIndicator in ["left", "right"]
				"disabled": @disabled
				"inline": @inline
				"large": @large
</script>

<style lang="stylus" scoped>
	.checkbox
		width fit-content
</style>
