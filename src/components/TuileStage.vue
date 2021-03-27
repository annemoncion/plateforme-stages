<template>
  <div class="card">
    <div class="card-body">
        <h5 class="card-title">{{ internship.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ internship.city }}</h6>
        <h6 class="card-subtitle mb-2 text-muted">{{ internship.field }}</h6>
        <div class="description">
          <p class="card-text description__text">{{ internship.description }}</p>
          <img v-if="!enVedette" class="description__logo" :src="logoCie" alt="Alt du logo" />
        </div>
        <router-link :to="{ name: 'detailOffre', params: {internship: internship, id:internship.id} }" class="a-btn-primary a-btn-primary--transparent mr-2">Détails</router-link>
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
    internship: {
      type: Object,
    },
  },
  data() {
    return {
      logoCie: require('@/assets/img/logoipsum-black.svg'),
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