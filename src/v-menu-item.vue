<template lang="pug">
	li(:class="classMenuItem")
		.popover-wrapper(v-if="$slots.default")
			.popover-target
				button.menu-item(
					type="button"
					:class="classMenuItemButton"
					:disabled="disabled"
					@click.self="clickMenuItemButton"
				)
					v-icon.no-event(:icon="icon")/
					.text-overflow-ellipsis.fill.no-event(v-if="text")
						span(style="vertical-align: inherit") {{text}}
					svg.icon.no-event(
						width="16"
						height="16"
						viewBox="0 0 16 16"
					)
						path(
							d="M11 8c0-.15-.07-.28-.17-.37l-4-3.5A.495.495 0 0 0 6 4.5v7a.495.495 0 0 0 .83.37l4-3.5c.1-.09.17-.22.17-.37z"
							fill-rule="evenodd"
						)
			.overlay.overlay-inline
				slot
		button.menu-item(
			v-else
			type="button"
			:class="classMenuItemButton"
			:disabled="disabled"
			@click.self="clickMenuItemButton"
		)
			v-icon.no-event(:icon="icon")/
			.text-overflow-ellipsis.fill.no-event(v-if="text")
				span(style="vertical-align: inherit") {{text}}
			.menu-item-label.no-event(v-if="label")
				span(style="vertical-align: inherit") {{label}}
</template>

<script lang="coffee">
	import vIcon from "./v-icon"

	export default
		props:
			active: default: no
			disabled: default: no
			href: default: ""
			icon: default: null
			intent: default: ""
			label: default: ""
			multiline: default: no
			onClick: default: null
			popoverProps: default: null
			shouldDismissPopover: default: yes
			target: default: undefined
			text: default: ""

		computed:
			classMenuItem: ->
				"submenu": @$slots.default

			classMenuItemButton: ->
				"active": @active
				"disabled": @disabled
				"intent-#{@intent}": @intent

		methods:
			clickMenuItemButton: (event) ->
				window.open @href, @target if @href
				@onClick? event
				return

		components: { vIcon }
</script>
