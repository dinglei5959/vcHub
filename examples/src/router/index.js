import Vue from 'vue'
import Router from 'vue-router'
import LandScape from '@/pages/landscape-prompt.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandScape',
      component: LandScape
    }
  ]
})
