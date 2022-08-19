import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import CircleAdd from '@/components/CircleAdd'
import Circle from '@/components/Circle/Index'
import ViewCircle from '@/components/ViewCircle'
import EditCircle from '@/components/EditCircle'
import Index from '@/components/Index'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/circle',
      name: 'circle',
      component: Circle
    },
    {
      path: '/circle/create',
      name: 'circle-create',
      component: CircleAdd
    },
    {
      path: '/circle/:circleId',
      name: 'vcircle',
      component: ViewCircle
    },
    {
      path: '/circle/:circleId/edit',
      name: 'vcircle-edit',
      component: EditCircle
    },
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '*',
      redirect: 'index'
    }
  ]
})

export default router
