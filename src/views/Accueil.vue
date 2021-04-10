<template>
  <div>
      <Banner :isBig="true" />

      <EnVedette :isHomePage="true" :category="'stage'" />

      <PingPong :imgFirst="true">
        <template v-slot:title>Pourquoi publier une offre de stage?</template>
        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec facilisis at velit vitae rhoncus.</p>
        <ul class="mb-3">
            <li>Donec facilisis at velit vitae rhoncus</li>
            <li>In faucibus orci luctus et ultrices</li>
            <li>Ipsum primis in faucibus orci luctus</li>
        </ul>
        <router-link :to="connexion" class="a-btn-primary a-btn-primary--purple mt-3">Publier une offre maintenant!</router-link>
        <template v-slot:image>
            <div :style="urlStart + pingPongFirst + urlEnd"></div>
        </template>
      </PingPong>

      <EnVedette :isHomePage="true" :category="'candidat'" />

      <PingPong :imgFirst="false">
        <template v-slot:title>Trouvez un stage à la hauteur de vos attentes</template>
        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec facilisis at velit vitae rhoncus.</p>
        <ul class="mb-3">
            <li>Donec facilisis at velit vitae rhoncus</li>
            <li>In faucibus orci luctus et ultrices</li>
            <li>Ipsum primis in faucibus orci luctus</li>
        </ul>
        <router-link :to="connexion" class="a-btn-primary a-btn-primary--purple">Publier une offre maintenant!</router-link>
        <template v-slot:image>
            <div :style="urlStart + pingPongSecond + urlEnd"></div>
        </template>
      </PingPong>

       <b-container>
          <b-row class="my-5 text-center">
              <b-col offset-lg="3" lg="6">
                  <h2>Facile à utiliser !</h2>
                  <p class="light-text">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec facilisis at velit vitae rhoncus. Suspendisse potenti.</p>
              </b-col>
          </b-row>
      </b-container>
      
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import EnVedette from '../components/EnVedette.vue'
import PingPong from '../components/PingPong.vue'

export default {
    name: 'Accueil',
    components: {
        Banner,
        EnVedette,
        PingPong,
    },
    data() {
        return {
            pingPongFirst: require('@/assets/img/pingpong1.jpg'),
            pingPongSecond: require('@/assets/img/pingpong2.jpg'),
            urlStart: "--bg-ping-pong: url('",
            urlEnd: "')",
        }
    },
    computed: {
        connexion() {
            return localStorage.userID ? '/mon-portail' : '/connexion'
        }
    }
}
</script>

<style scoped lang="scss">
</style>