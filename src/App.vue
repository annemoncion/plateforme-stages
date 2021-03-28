<template>
  <div id="app">
    <Header v-if="publicWebsite" />
    <router-view />
    <Footer v-if="publicWebsite" />
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
  computed: {
    publicWebsite() {
      return this.$route.path !== "/mon-portail";
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/main-style.scss';
</style>