<template>
  <footer class="footer">
    <div class="footer__top  py-5">
      <b-container class="footer-content">
        <b-row>
          <b-col cols="12" class="mb-2">
            <h4>Ils sont à la recherche d'un.e stagiaire:</h4>
          </b-col>
          <b-col lg="3">
            <a>Lien vers un poste</a>
          </b-col>
          <b-col lg="3">
            <a>Lien vers un poste</a>
          </b-col>
          <b-col lg="3">
            <a>Lien vers un poste</a>
          </b-col>
          <b-col lg="3">
            <a>Lien vers un poste</a>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-container class="footer__bottom pt-4 pb-3">
      <b-row>
        <b-col md="4" class="mb-2">
          <p class="footer__copyright">
            &#169; 2021 
            <router-link class="footer__copyright-link" to="/">EnStage</router-link>
            - Projet éducationnel</p>
        </b-col>
        <b-col md="8" class="footer__bottom-right">
          <ul class="footer__bottom-items">
            <li class="footer__bottom-item" v-for="link in links" :key="link.title">
              <router-link class="footer__bottom-link" :to="link.route">{{ link.title }}</router-link>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </footer>
  
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      links: [
        {
          title: "Accueil",
          route: "/"
        },
        {
          title: "À propos",
          route: "/a-propos"
        },
        {
          title: "Confidentialité",
          route: "/politiques-de-confidentialite"
        },
        {
          title: "Nous joindre",
          route: "/nous-joindre"
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/_variables.scss';

.footer {
  &__top {
    background-color: $white-grey;
  }

  &__bottom-right {
    display: flex;
    justify-content: flex-end;
  }

  &__bottom-items {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    margin: 0 -24px -8px;
    padding-left: 0;
  }

  &__bottom-item {
    margin: 0 24px 8px;
    
    &:before {
      display: none;
    }
  }

  &__bottom-link {
    color: #000;
    font-weight: 600;
    font-size: 0.9em;
  }

  &__copyright {
    font-weight: 600;
    font-size: 0.9em;
    color: $grey-medium;
  }
}
</style>