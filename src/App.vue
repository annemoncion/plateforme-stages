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