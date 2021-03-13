<template>
  <div id="app">
    <Header />
    <nav>
      <!-- Boucler à traver les routes. (Voir objet "menuItems") -->
      <!--<router-link v-for="(item, i) in menuItems" :key="i" :to="item.path">{{ item.name }}</router-link>-->
    </nav>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  // Comme définit présentement, le filtre de traduction doit être importé dans chaque composant qui l'utilise. Ce serait un comportement à revoir.
  name: 'App',
  components: {
    Header,
    Footer
  },
}
</script>

<style lang="scss">
@import '@/assets/style/main-style.scss';
</style>