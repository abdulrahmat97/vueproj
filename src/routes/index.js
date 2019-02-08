import Vue from 'vue'
import Router from 'vue-router'
import Hal1 from '../pages/hal1.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hal1',
      name: 'hal1',
      component: Hal1
    },
    {
      path: '/hal2',
      name: 'hal2',
      component: () => import('../pages/hal2.vue')
    },
    {
      path: '/barang',
      name: 'barang',
      component: () => import('../pages/Barang.vue')
    },
    {
      path: '/barang/input',
      name: 'input',
      component: () => import('../pages/Input.vue')
    },
    {
      path:'/barang/:id/edit',
      name:'edit',
      component: () => import('@/pages/Edit.vue')
    }
  ]
})
