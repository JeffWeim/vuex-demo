import Vue from 'vue'
import { sync } from 'vuex-router-sync'

import store from './store'
import router from './router'

sync(store, router)

import App from './App.vue'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
