import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuardsView from '../views/GuardsView'
import HitsView from '../views/HitsView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/guards',
    name: 'guards',
    component: GuardsView
  },
  {
    path: '/hits',
    name: 'hits',
    component: HitsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
