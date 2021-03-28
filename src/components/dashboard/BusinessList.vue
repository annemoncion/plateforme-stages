<template>
  <div class="admin-businesses">
    <b-row>
        <b-col>
            <h2 class="font-bold mt-2">
              Liste des entreprises
              <b-icon icon="arrow90deg-up" class="arrow-turned" font-scale="0.75" />
            </h2>
           
            <b-row v-if="businesses.length > 0">
              <b-col md="4" v-for="business in businesses" :key="business.id">
                <UserTile :user="business" :isBusiness="true" class="mb-2"/>
              </b-col>
            </b-row>
        </b-col>
    </b-row>
  </div>
</template>

<script>
import UserTile from './UserTile.vue'

export default {
    name: 'BusinessList',
    components: {
        UserTile,
    },
    data () {
        return {
            loading: false,
        }
    },
    computed: {
        businesses() {
          let users = this.$store.state.users;
          let businesses = [];

          for (const user of users) {
              if (user.accessLevel === 333) {
                  businesses.push(user);
              }
          }

          return businesses;
        }
    },
    created () {
        this.loading = true
        this.$store.dispatch('fetchUsers')
        .then(() => {
            this.loading = false
        })
    },
}
</script>

<style scoped lang="scss">
@import '@/assets/style/_variables.scss';
</style>