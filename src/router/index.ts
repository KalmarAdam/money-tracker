import { createRouter, createWebHashHistory } from '@ionic/vue-router';
import { RouteRecordRaw} from 'vue-router';
import {auth} from "@/main";




const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import ('../views/HomePage.vue'),
    async beforeEnter(to, from) {
      return !auth.currentUser ? '/login' : true
    }
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import('@/views/Add.vue'),
    async beforeEnter(to, from) {
      return !auth.currentUser ? '/login' : true
    }
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import('@/views/Categories.vue'),
    async beforeEnter(to, from) {
      return !auth.currentUser ? '/login' : true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue'),
    async beforeEnter(to, from) {
      return auth.currentUser ? '/home' : true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    async beforeEnter(to, from) {
      return auth.currentUser ? '/home' : true
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
