import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EnochMemberView from '../views/EnochMemberView.vue'
import LegalInsightsView from '../views/LegalInsightsView.vue'
import ZoomDownloadView from '../views/ZoomDownloadView.vue'

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
  },
  {
    path: '/insights',
    name: 'LegalInsights',
    component: LegalInsightsView
  },
  {
    path: '/zoom',
    name: 'ZoomDownload',
    component: ZoomDownloadView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
