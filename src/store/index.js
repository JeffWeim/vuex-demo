import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import moduleA from './modules/moduleA'

const store = new Vuex.Store({
  modules: {
    a: moduleA
  }
})

export default store