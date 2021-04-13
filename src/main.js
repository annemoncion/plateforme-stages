import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Importer le thème Bootstrap personnalisé
import '@/assets/style/custom-bootstrap.scss'

// Rendre Bootstrap Vue accessible de tout le projet
Vue.use(BootstrapVue)
// Installer les icônes de Bootstrap Vue
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
