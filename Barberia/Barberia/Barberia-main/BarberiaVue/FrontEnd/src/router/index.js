import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Barberos',
    name: 'Barberos',
    component: () => import('../views/Barberos.vue')
  },
  {
    path: '/Servicios',
    name: 'Servicios',
    component: () => import('../views/Servicios.vue')
  },
  {
    path: '/Turnos',
    name: 'Turnos',
    component: () => import('../views/Turnos.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Logout',
    name: 'Logout',
    component: () => import('../views/Logout.vue')
  }

]

const router = createRouter({
  routes,
  history: createWebHistory()
  
})

export default router;
