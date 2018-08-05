import Vue from 'vue'
import Router from 'vue-router'
import ListVets from '@/components/ListVets'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ListVets',
      component: ListVets
    }
  ]
})
