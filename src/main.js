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
import { faGithub, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VuePageTransition from 'vue-page-transition'
import VueLazyload from 'vue-lazyload'
import VueGtag from 'vue-gtag'

let id
switch (window.location.hostname) {
  case 'zapomenuta-orlova.netlify.app':
    id = 'G-P4CNPTGRMQ'
    break
  case 'zapomenutaorlova.muor.cz':
    id = 'G-1BM9VV7LGZ'
    break
}

Vue.use(VueGtag, {
  config: { id: id },
  bootstrap: false,
})

library.add(
  faMapMarkerAlt,
  faTimes,
  faEnvelope,
  faGithub,
  faFacebookF,
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
