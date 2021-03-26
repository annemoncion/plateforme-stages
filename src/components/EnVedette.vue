<template>
    <b-container class="enVedette my-5">
        <b-row class="mb-4 text-center">
            <b-col offset-lg="3" lg="6">
                <h1 class="light-text">{{ sectionTitle }}</h1>
                <p class="light-text mb-0">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec facilisis at velit vitae rhoncus. Suspendisse potenti.</p>
            </b-col>
        </b-row>
        <b-row>
            <b-col v-for="index in 4" :key="index" lg="3">
                <component :is="capitalizedCategorie" :enVedette="true"></component>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="text-center mt-4">
                <router-link :to="activeCategory.actionLink" class="a-btn-primary a-btn-primary--red a-btn-primary--rounded">{{ activeCategory.actionBtn }}</router-link>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Candidat from '../components/TuileCandidat.vue'
import Stage from '../components/TuileStage.vue'

export default {
  name: 'EnVedette',
  components: {
      Candidat,
      Stage
  },
  props: {
    category: {
        type: String,
        default: "stage",
    },
    isHomePage: {
        type: Boolean,
        default: false,
    },
  },
  data() {
      return {
          stage: {
              title: "Tu es à la recherche d'un stage?",
              actionBtn: "Voir toutes les offres de stage",
              actionLink: "/offres-de-stage",
          },
          candidat: {
              title: "Votre futur stagiaire se trouve ici",
              actionBtn: "Voir tous les candidats",
              actionLink: "/demandes-de-stage",
          }
      }
  },
  computed: {
    activeCategory() {
        return this[this.category];
    },
    sectionTitle() {
        return this.isHomePage && this.category === "stage" ? "Tu es à la recherche de ton stage de fin d'études?" : this[this.category].title;
    },
    capitalizedCategorie() {
        if (typeof this.category !== 'string') return ''
        return this.category.charAt(0).toUpperCase() + this.category.slice(1)
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/_variables.scss';
</style>