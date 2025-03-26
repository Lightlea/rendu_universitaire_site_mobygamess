import { createRouter, createWebHistory } from 'vue-router'
import Rankings from '../Rankings.vue'
import Home from '../views/Home.vue'
import TagPage from '../TagPage.vue'
import Company from '../company.vue'
import MobyPro from '../views/MobyPro.vue'
import TheGamePage from '../thegamepage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rankings',
    name: 'Rankings',
    component: Rankings
  },
  {
    path: '/tags',
    name: 'Tags',
    component: TagPage
  },
  {
    path: '/community',
    name: 'Community',
    component: () => import('../community.vue')
  },
  {
    path: '/company',
    name: 'Company',
    component: Company
  },
  {
    path: '/mobypro',
    name: 'MobyPro',
    component: MobyPro
  },
  {
    path: '/game/:id',
    name: 'Game',
    component: TheGamePage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
