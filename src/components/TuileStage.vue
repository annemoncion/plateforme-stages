<template>
  <div class="card" :class="{'is-admin' : isAdmin}">
    <div class="card-body pb-1">
        <h5 class="card-title" :class="{'is-admin__title' : isAdmin}">
          <b-icon v-if="isAdmin" icon="people-fill" font-scale="1.5" class="mr-1" />
          {{ internship.title }}
          <span v-if="isAdmin && !isWaitingForValidation" class="is-admin__parution"><strong>Publié le:</strong> {{internship.parutionDate}}</span>
        </h5>
        <div v-if="!isAdmin">
          <h6 class="card-subtitle mb-2 text-muted">{{ internship.city }}</h6>
          <h6 class="card-subtitle mb-2 text-muted">{{ internship.field }}</h6>
        </div>
        <div v-else class="is-admin__cols">
          <div class="is-admin__col">
            <p class="mb-1 "><strong>Ville:</strong> {{ internship.city }}</p>
            <p class="mb-2 "><strong>Entreprise:</strong> {{ businessName }}</p>
          </div>
          <div v-if="!isWaitingForValidation" class="is-admin__col is-admin__col--last">
            <p class="mb-1 "><strong>Début:</strong> {{ internship.startDate }}</p>
            <p class="mb-1 "><strong>Fin:</strong> {{ internship.endDate }}</p>
          </div>
        </div>
        <div class="description">
          <p class="card-text description__text">{{ internship.description }}</p>
          <img v-if="!enVedette && !isAdmin" class="description__logo" :src="logoCie" alt="Alt du logo" />
        </div>
    </div>
    <div v-if="!isAdmin" class="card-footer">
        <router-link :to="{ name: 'detailOffre', params: {internship: internship, id:internship.id} }" class="a-btn-primary a-btn-primary--transparent mr-2">Détails</router-link>
        <a href="#" class="a-btn-primary a-btn-primary--purple d-inline-block">Postuler</a>
    </div>
    <div v-else class="card-footer is-admin__footer">
      <router-link :to="{ name: 'detailOffre', params: {internship: internship, id:internship.id} }" target="_blank" class="a-btn-primary a-btn-primary--blue is-admin__footer-left">Détails</router-link>
      <div v-if="isWaitingForValidation">
        <button class="a-btn-primary a-btn-primary--red mx-1">Refuser</button>
        <button class="a-btn-primary a-btn-primary--green">Accepter</button>
      </div>
      <div v-else>
        <button class="a-btn-primary a-btn-primary--green" @click="showModalModify(internship.id)">
          <b-icon icon="pencil-square" class="mr-1" />
          Modifier
        </button>
        <button class="a-btn-primary a-btn-primary--red mx-1" @click="showModalDelete(internship.id)">
          <b-icon icon="x-square-fill" class="mr-1" />
          Supprimer
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TuileStage',
  props: {
    enVedette: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isWaitingForValidation: {
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
  },
  computed: {
      businessName () {
          const users = this.$store.state.users;
          let businessName = "";

          for (const user of users) {
              if (user.id === this.internship.authorID) {
                  businessName = user.businessName;
              }
          }

          return businessName;
      }
  },
  created () {
      this.loading = true
      this.$store.dispatch('fetchUsers')
      .then(() => {
          this.loading = false
      })
  },
  methods: {
      showModalModify(id) {
        this.$emit('show-modal-modify', id);
      },
      showModalDelete(id) {
        this.$emit('show-modal-delete', id);
      }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/_variables.scss';
@import '@/assets/style/components/tile.scss';

.is-admin {
  border-top: solid 6px $green;
}
</style>