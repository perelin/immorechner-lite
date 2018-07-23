import Vue from 'vue'
import App from './app.vue'

import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue);

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})