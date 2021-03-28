import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Custom Bootstrap
import '@/assets/style/custom-bootstrap.scss'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
