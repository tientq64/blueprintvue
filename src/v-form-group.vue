<template lang="pug">
	.form-group(:class="classFormGroup")
		label.label
			| {{label}}
			span.text-muted  {{labelInfo}}
		.form-content
			slot
			.form-helper-text {{helperText}}
</template>

<script lang="coffee">
	export default
		props:
			helperText: default: ""
			inline: default: no
			intent: default: ""
			label: default: ""
			labelInfo: default: ""

		computed:
			classFormGroup: ->
				"inline": @inline
				"intent-#{@intent}": @intent
</script>
