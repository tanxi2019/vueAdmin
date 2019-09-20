import Vue from 'vue'
import Router from 'vue-router'
import Customers from '@/components/Customers'
import add from '@/components/add'
import feedback from '@/components/feedback'
import about from '@/components/about'
import CustomerDetails from  '@/components/CustomerDetails'
import Edit from '@/components/Edit'
import login from  '@/components/login'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Customers',
      component:Customers
    },
    {
      path: '/add',
      name: 'add',
      component: add
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: feedback
    },
    { path:'/customerDetails/:id',
      name: 'customerDetails',
      component:CustomerDetails
    },
    { path:'/edit/:id',
      name:'edit',
      component:Edit
    },
    { path:'/login',
      name:'login',
      component:login
    }
  ]
})
