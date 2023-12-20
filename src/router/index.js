import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home.vue'), // 注意这里要带上 文件后缀.vue
  },
  {
    path: '/game',
    name: 'game',
    component: () => import('@/pages/home.vue'), // 注意这里要带上 文件后缀.vue
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

