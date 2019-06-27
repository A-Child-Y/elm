import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Find from '@/components/Find'
import Order from '@/components/Order'
import Mine from '@/components/Mine'
import Address from '@/components/Address'
import City from '@/components/City'
import Login from '@/components/Login'
import Info from '@/components/Info'
import Details from '@/components/Details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        // requireAuth:true,
        keepAlive:true,
        // isBack:true
      }
    },
    {
      path:'/find',
      name:'find',
      component:Find
    },
    {
      path:'/order',
      name:'order',
      component:Order
    },
    {
      path:'/mine',
      name:'mine',
      component:Mine
    },
    {
      path:'/address',
      name:'address',
      component:Address
    },
    {
      path:'/city',
      name:'city',
      component: City
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/info',
      name:'info',
      component: Info
    },
    {
      path:'/details',
      name:'details',
      component:Details
    }
  ]
})
