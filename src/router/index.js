import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EnochMemberView from '../views/EnochMemberView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/member',
    name: 'Member',
    component: EnochMemberView,
  },
  {
    path: '/member/:id',
    name: 'MemberDetail',
    component: () => import('../views/MemberDetailView.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
