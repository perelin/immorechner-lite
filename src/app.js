import Vue from 'vue'
import App from './app.vue'

import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faArrowDown } from '@fortawesome/free-solid-svg-icons'
library.add(faHome, faArrowDown)

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)

import ImmorechnerUtils from './utils/immorechner_util'
Vue.mixin(ImmorechnerUtils.formatPercentMixin);
Vue.mixin(ImmorechnerUtils.formatEuroMixin);

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})