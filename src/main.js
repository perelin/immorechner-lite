import Vue from 'vue'
import App from './App.vue'

// vuex
import store from './store'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faArrowDown } from '@fortawesome/free-solid-svg-icons'
library.add(faHome, faArrowDown)
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Utils
import ImmorechnerUtils from './utils/immorechner_util'
Vue.mixin(ImmorechnerUtils.formatPercentMixin);
Vue.mixin(ImmorechnerUtils.formatEuroMixin);

// Other
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)
import VueCharts from 'vue-chartjs'
import { Bar, Line, Pie, Doughnut } from 'vue-chartjs'

// Init
new Vue({
    el: '#app',
    store,
    render: h => h(App)
})