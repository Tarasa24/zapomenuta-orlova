import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faMapMarkerAlt,
  faTimes,
  faEnvelope,
  faGlobe,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VuePageTransition from 'vue-page-transition'
import VueLazyload from 'vue-lazyload'

library.add(
  faMapMarkerAlt,
  faTimes,
  faEnvelope,
  faGithub,
  faGlobe,
  faChevronDown
)
Vue.component('fa', FontAwesomeIcon)
Vue.use(VuePageTransition)
Vue.use(VueLazyload, {
  loading: require('./assets/img/loading.svg'),
})

import 'leaflet/dist/leaflet.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
