<template lang="pug">
	li.tab(
		role="tab"
		@click="clickTab"
	)
		slot
		| {{label}}
</template>

<script lang="coffee">
	export default
		props:
			label: default: ""

		data: ->
			tabIndex: -1

		methods:
			clickTab: ->
				tabChild = @$el.parentElement.children
				panelChild = @$parent.$el.children
				indicatorEl = @$el.parentElement.firstElementChild

				tabChild[@$parent.curSelectedTabIndex + 1].removeAttribute "aria-selected"
				panelChild[@$parent.curSelectedTabIndex + 1].setAttribute "aria-hidden", yes

				@$parent.curSelectedTabIndex = @tabIndex

				tab = tabChild[@$parent.curSelectedTabIndex + 1]
				tab.setAttribute "aria-selected", yes
				panelChild[@$parent.curSelectedTabIndex + 1].setAttribute "aria-hidden", no

				indicatorEl.style.width = tab.offsetWidth + "px"
				indicatorEl.style.height = tab.offsetHeight + "px"

				tabRect = tab.getBoundingClientRect()
				parentRect = @$el.parentElement.getBoundingClientRect()
				transX = tabRect.left - parentRect.left
				transY = tabRect.top - parentRect.top

				indicatorEl.style.transform = "translate(#{transX}px, #{transY}px)"
				return

		mounted: ->
			@$nextTick ->
				@tabIndex = Array::indexOf.call(@$el.parentElement.children, @$el) - 1
				@clickTab() if @$parent.curSelectedTabIndex is @tabIndex
				return

			return
</script>
