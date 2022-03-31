import { createRouter, createWebHashHistory } from '@ionic/vue-router';
import { RouteRecordRaw} from 'vue-router';




const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import ('../views/HomePage.vue')
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import('@/views/Add.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
