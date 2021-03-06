import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import Memo from '@/components/Memo'
import Memos from '@/components/Memos'

Vue.use(Router)
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Memos,
    },
    {
      path: '/memos',
      name: 'Memos',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '',
          component: Memos,
        },
        {
          path: 'new',
          component: Memo,
        },
        {
          path: ':id',
          component: Memo,
        },
      ]
    },
  ]
})
