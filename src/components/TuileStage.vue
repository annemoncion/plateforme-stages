<template>
  <div class="card">
    <div class="card-body">
        <h5 class="card-title">Titre du poste</h5>
        <h6 class="card-subtitle mb-2 text-muted">Lieu</h6>
        <h6 class="card-subtitle mb-2 text-muted">Secteur</h6>
        <div class="description">
          <p class="card-text description__text">Courte description. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ut ligula iaculis felis commodo cursus.</p>
          <img v-if="!enVedette" class="description__logo" :src="logoCie" alt="Alt du logo" />
        </div>
        <router-link to="/offre" class="a-btn-primary a-btn-primary--transparent mr-2">Détails</router-link>
        <a href="#" class="a-btn-primary a-btn-primary--purple">Postuler</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stage',
  props: {
    enVedette: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      logoCie: require('@/assets/img/logoipsum.svg'),
    }
  }
}
</script>

<style scoped lang="scss">
.description {
  display: flex;
  margin-bottom: 24px;

  &__logo {
    flex-shrink: 0;
  }
}
</style>