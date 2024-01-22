import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/test/TestPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'test',
      component: HomeView
    },{
      path: '/activity',
      name: 'activity',
      component: ()=>import('@/views/activity/ActivityPage.vue')
    }
  ]
})

export default router
