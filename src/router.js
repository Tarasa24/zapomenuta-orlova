import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/mapa',
    name: 'Map',
    component: () => import('./pages/Map.vue'),
  },
  {
    path: '/misto/:index',
    name: 'Place',
    component: () => import('./pages/Place.vue'),
  },
  {
    path: '/o-projektu',
    name: 'About',
    component: () => import('./pages/About.vue'),
  },
  {
    path: '/instalace',
    name: 'Installation',
    component: () => import('./pages/Installation.vue'),
  },
  {
    path: '/prameny',
    name: 'Sources',
    component: () => import('./pages/Sources.vue'),
  },
  {
    path: '*',
    name: 'Not Found',
    component: () => import('./pages/NotFound.vue'),
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            selector: to.hash,
          })
        }, 400)
      })
    else return { x: 0, y: 0 }
  },
})

export default router
