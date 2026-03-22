import { createRouter, createWebHashHistory } from 'vue-router'


import HomeView from '../pages/HomeView.vue' 
import AllProjects from '../pages/AllProjects.vue'

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: HomeView // This component will stack Hero, About, Skills, etc.
  },
  { 
    path: '/all-projects', 
    name: 'AllProjects', 
    component: AllProjects 
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
 
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

export default router