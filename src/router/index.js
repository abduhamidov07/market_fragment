import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/AllView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/elektronika',
      name: 'elektronika',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TechniqueView.vue')
    },
    {
      path: '/maishiyTexnika',
      name: 'maishiyTexnika',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HouseTechniqueView.vue')
    },
    {
      path: '/kiyim',
      name: 'kiyim',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ClotheView.vue')
    },
    {
      path: '/poyabzal',
      name: 'poyabzal',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FootWearView.vue')
    },
  ]
})

export default router
