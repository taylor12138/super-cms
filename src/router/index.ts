import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import LocalCache from '@/untils/cache'
import Login from '../views/Login/login.vue'
import Main from '../views/Main/main.vue'
import { firstMenu } from '@/untils/menu-route'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About/about.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/:pathMatch(.*)',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/NotFound/not-found.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = LocalCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
  if (to.path === '/main') {
    return firstMenu.url
  }
})

export default router
