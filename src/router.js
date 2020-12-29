import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/mapa',
    name: 'Mapa',
    component: () => import('./pages/Map.vue'),
  },
  {
    path: '/misto/:name',
    name: 'Místo',
    component: () => import('./pages/Place.vue'),
  },
  {
    path: '*',
    name: 'Not Found',
    component: () => import('./pages/NotFound.vue'),
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes,
});

export default router;
