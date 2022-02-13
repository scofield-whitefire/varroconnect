import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Wallets from '@/views/Wallets.vue'
import Connect from '@/views/Connect.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/wallets',
    name: 'Wallets',
    component: Wallets
  },
  {
    path: '/connect/:path',
    name: 'Connect',
    component: Connect,
    params: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
