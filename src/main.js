import Vue from "vue"
import vButtonGroup from "./v-button-group"
import vButton from "./v-button"
import vCheckbox from "./v-checkbox"
import vControlGroup from "./v-control-group"
import vFormGroup from "./v-form-group"
import vIcon from "./v-icon"
import vInputGroup from "./v-input-group"
import vMenuDivider from "./v-menu-divider"
import vMenuHeader from "./v-menu-header"
import vMenuItem from "./v-menu-item"
import vMenu from "./v-menu"
import vTab from "./v-tab"
import vTabs from "./v-tabs"

Vue.component("v-button-group", vButtonGroup)
Vue.component("v-button", vButton)
Vue.component("v-checkbox", vCheckbox)
Vue.component("v-control-group", vControlGroup)
Vue.component("v-form-group", vFormGroup)
Vue.component("v-icon", vIcon)
Vue.component("v-input-group", vInputGroup)
Vue.component("v-menu-divider", vMenuDivider)
Vue.component("v-menu-header", vMenuHeader)
Vue.component("v-menu-item", vMenuItem)
Vue.component("v-menu", vMenu)
Vue.component("v-tab", vTab)
Vue.component("v-tabs", vTabs)

if (document.querySelector("#app-blueprintvue")) {
	new Vue({
		el: "#app-blueprintvue"
	})
}
