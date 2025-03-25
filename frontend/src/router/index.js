import { createRouter, createWebHistory } from 'vue-router'
import Rankings from '../Rankings.vue'
import Home from '../views/Home.vue'
import TagPage from '../TagPage.vue'
import company from '../company.vue'  // 改为小写
import MobyPro from '../views/MobyPro.vue'  // 确保路径正确

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
  },  // 添加缺失的逗号
  { 
    path: '/company',   
    name: 'company',    // 改为小写
    component: company  // 改为小写
  },    
  { 
    path: '/mobypro',   
    name: 'MobyPro',
    component: MobyPro 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router