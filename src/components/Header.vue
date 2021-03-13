<template>
  <header class="header">
    <b-navbar toggleable="lg" type="dark" class="header__nav">
      <b-container>
        <b-navbar-brand href="#"><img class="header__logo" :src="require('@/assets/img/logoipsum.svg')" alt="Logo E-Stage" /></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <b-navbar-nav class="ml-3 header__nav-block">
            <a href="/offres-de-stage" class="a-btn-primary a-btn-primary--green">Trouvez votre stage</a>
            <a href="/demandes-de-stage" class="a-btn-primary a-btn-primary--green">Trouvez votre futur stagiaire</a>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto header__nav-block">
            <a href="/offres-de-stage" class="a-btn-primary a-btn-primary--white">Connexion</a>
            <a href="/demandes-de-stage" class="a-btn-primary a-btn-primary--grey">Inscription</a>
          </b-navbar-nav>

        </b-collapse>
      </b-container>
    </b-navbar> 
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped lang="scss">
@import '@/assets/style/components/button.scss';
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