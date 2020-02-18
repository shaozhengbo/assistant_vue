import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Found from '@/views/Found'
import Me from '@/views/Me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/found',
      name: 'Found',
      component: Found
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/*',
      redirect: '/index'
    }
  ]
})
