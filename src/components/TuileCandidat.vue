<template>
  <div class="card">
    <div class="card-body">
        <h5 class="card-title">{{ application.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ application.city }}</h6>
        <h6 class="card-subtitle mb-2 text-muted">{{ application.field }}</h6>
        <div class="description">
          <p class="card-text description__text">{{ application.description }}</p>
          <img v-if="!enVedette" class="description__logo" :src="logoSchool" alt="Alt du logo" />
        </div>
        <router-link :to="{ name: 'detailDemande', params: {application: application, id:application.id} }" class="a-btn-primary a-btn-primary--transparent mr-2">Détails</router-link>
        <a href="#" class="a-btn-primary a-btn-primary--purple">Contacter</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Candidat',
  props: {
    enVedette: {
      type: Boolean,
      default: false,
    },
    application: {
      type: Object,
    },
  },
  data() {
    return {
      logoSchool: require('@/assets/img/logoipsum.svg'),
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  width: 100%
}

.description {
  display: flex;
  margin-bottom: 24px;

  &__logo {
    flex-shrink: 0;
  }
}
</style>