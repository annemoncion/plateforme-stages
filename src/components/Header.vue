<template>
  <header class="header">
    <b-navbar toggleable="lg" type="dark" class="header__nav">
      <b-container>
        <router-link class="navbar-brand" to="/"><img class="header__logo" :src="require('@/assets/img/logoipsum.svg')" alt="Logo E-Stage" /></router-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <b-navbar-nav class="ml-md-3 header__nav-block">
            <router-link to="/offres-de-stage" class="a-btn-primary a-btn-primary--green a-btn-primary--rounded">Trouvez votre stage</router-link>
            <router-link to="/demandes-de-stage" class="a-btn-primary a-btn-primary--green a-btn-primary--rounded">Trouvez votre futur stagiaire</router-link>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto header__nav-block">
            <router-link :to="connexion" class="a-btn-primary a-btn-primary--white a-btn-primary--rounded">Connexion</router-link>
            <router-link :to="connexion" class="a-btn-primary a-btn-primary--grey a-btn-primary--rounded">Inscription</router-link>
          </b-navbar-nav>

        </b-collapse>
      </b-container>
    </b-navbar> 
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    connexion() {
      return localStorage.userID ? '/mon-portail' : '/connexion'
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  &__nav {
    background-color: transparent;
    position: absolute;
    z-index: 3;
    width: 100%;
  }

  &__logo {
    width: 160px;
  }

  &__nav-block {
    margin: 0 -4px;
  }
}

.a-btn-primary {
  margin: 0 4px;
}
</style>