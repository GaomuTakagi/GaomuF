import Vue from 'vue'
import Router from 'vue-router'
import Talk from '@/components/Talk'
import Common from '@/components/Common'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Talking',
      components: {
        default: Talk,
        common: Common
      }
    }
  ]
})
