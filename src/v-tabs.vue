<template lang="pug">
	.tabs.flex.h-fill(:class="classTabs")
		ul.tab-list(
			:class="classTabList"
			role="tablist"
		)
			.tab-indicator-wrapper(:style="styleTabIndicatorWrapper")
				.tab-indicator
			slot
</template>

<script lang="coffee">
	export default
		props:
			animate: default: yes
			large: default: no
			onChange: default: null
			selectedTabIndex: default: 0
			vertical: default: no

		data: ->
			curSelectedTabIndex: @selectedTabIndex

		computed:
			classTabs: ->
				"vertical": @vertical
				"flex-col": !@vertical

			classTabList: ->
				"large": @large

			styleTabIndicatorWrapper: ->
				height: (if @large then 40 else 30) + "px"
				transition: if @animate then undefined else "none"

		mounted: ->
			for slot, i in @$slots.default
				tabPanelEl = document.createElement "div"
				@$el.insertBefore tabPanelEl, null

				tabPanelEl.classList.add "tab-panel"
				tabPanelEl.setAttribute "role", "tabpanel"
				tabPanelEl.setAttribute "aria-hidden", @selectedTabIndex isnt i

				tabPanelChildEl = document.createElement "div"
				tabPanelEl.appendChild tabPanelChildEl

				tabPanelChildEl.style.display = "block"
				tabPanelChildEl.classList.add "overflow-auto"

				for tabPanelChild2El in Array.from slot.elm.children
					tabPanelChildEl.insertAdjacentElement "beforeend", tabPanelChild2El
			return
</script>

<style lang="stylus">
	.tab-panel[aria-hidden=false]
		display flex
		flex-direction column
</style>
