import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router.js';

Vue.config.productionTip = false;

import 'leaflet/dist/leaflet.css';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
