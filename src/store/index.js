import Vue from 'vue'
import Vuex from 'vuex'
import State from './state'
import Mutations from './mutations'
import Getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    state: State,
    mutations: Mutations,
    getters: Getters
})