import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import home from './modules/home'
import details from './modules/details'

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    home: home,
    details: details
  },
  // prevent some future retard from mutating the store from outside of a mutation handler. will throw errors
  strict: process.env.NODE_ENV !== 'production'
})

export default store