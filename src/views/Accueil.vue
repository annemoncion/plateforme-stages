<template>
  <div>
      <Banner />
      <b-container>
          <b-row class="my-5 text-center">
              <b-col offset-lg="3" lg="6">
                  <h1>Tu es à la recherche de ton stage de fin d'études?</h1>
                  <p class="light-text">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec facilisis at velit vitae rhoncus. Suspendisse potenti.</p>
              </b-col>
          </b-row>
      </b-container>
      
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'

export default {
    name: 'Accueil',
    components: {
        Banner,
    },
    data() {
        return {
        }
    },
}
</script>

<style scoped lang="scss">
</style>