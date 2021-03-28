<template>
  <div class="admin-candidates">
    <b-row>
        <b-col>
            <h2 class="font-bold mt-2">
              Liste des candidats
              <b-icon icon="arrow90deg-up" class="arrow-turned" font-scale="0.75" />
            </h2>
           
            <b-row v-if="candidates.length > 0">
              <b-col md="4" v-for="candidate in candidates" :key="candidate.id">
                <UserTile :user="candidate" class="mb-2"/>
              </b-col>
            </b-row>
        </b-col>
    </b-row>
  </div>
</template>

<script>
import UserTile from './UserTile.vue'

export default {
    name: 'CandidateList',
    components: {
        UserTile,
    },
    data () {
        return {
            loading: false,
        }
    },
    computed: {
        candidates() {
          let users = this.$store.state.users;
          let candidates = [];

          for (const user of users) {
              if (user.accessLevel === 111) {
                  candidates.push(user);
              }
          }

          return candidates;
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