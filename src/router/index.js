import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Found from '@/views/Found'
import Me from '@/views/Me'
import Overtime from '@/views/Overtime'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/found',
      name: 'found',
      component: Found
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    },
    {
      path: '/overtime',
      name: 'overtime',
      component: Overtime
    },
    {
      path: '/*',
      redirect: '/index'
    }
  ]
})
