import Vue from 'vue'
import router from 'vue-router'

import Home from './views/Home.vue'
import Details from './views/Details.vue'

Vue.use(router)

export default new router({
  mode: 'history',
  saveScrollPosition: true,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/details/:id',
      component: Details
    }
  ]
})