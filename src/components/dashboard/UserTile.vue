<template>
    <div class="user">
      <h4>{{ userName }}</h4>
      <p v-if="!isBusiness">{{  user.school }}</p>
      <p v-if="isBusiness">{{  user.businessName }}</p>
      <p>{{ user.city }}</p>
      <div v-if="currentUser.accessLevel === 999" class="user__buttons mt-1">
        <button class="a-btn-primary a-btn-primary--green">
          <b-icon icon="pencil-square" class="mr-1" />
          Modifier
        </button>
        <button class="a-btn-primary a-btn-primary--red mx-1">
          <b-icon icon="x-square-fill" class="mr-1" />
          Supprimer
        </button>
      </div>

      <div v-if="currentUser.accessLevel === 333" class="user__buttons mt-1">
        <a class="a-btn-primary a-btn-primary--green" :href="'mailto:' + user.email">
          <b-icon icon="pencil-square" class="mr-1" />
          Contacter
        </a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'UserTile',
  props: {
    isBusiness: {
      type: Boolean,
      default: false,
    },
    user: Object,
  },
  data() {
    return {
    }
  },
  computed: {
      userName() {
          return this.user.firstName + " " + this.user.lastName;
      },
      currentUser() {
          return this.$store.getters.currentUser(localStorage.userID);
      }
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/style/_variables.scss';

.user {
    background-color: $white;
    padding: 30px;
    text-align: center;

    &__buttons {
      display: flex;
      flex-direction: column;
    }
}

</style>