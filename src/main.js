import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarkerAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faMapMarkerAlt, faTimes)
Vue.component('fa', FontAwesomeIcon)

import 'leaflet/dist/leaflet.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
