<template>
  <div class="admin-applications">
    <b-row>
        <b-col>
            <h2 class="font-bold mt-2">
              Demandes de stage 
              <b-icon icon="arrow90deg-up" class="arrow-turned" font-scale="0.75" />
            </h2>
           
            <div v-if="applications.length > 0">   
                <TuileCandidat 
                    v-for="application in applications" 
                    :key="application.id" 
                    :application="application" 
                    :isAdmin="true" 
                    class="mb-2"/>
            </div>
        </b-col>
    </b-row>
  </div>
</template>

<script>
import TuileCandidat from '../TuileCandidat.vue'

export default {
    name: 'ApplicationList',
    components: {
        TuileCandidat,
    },
    data () {
        return {
            loading: false,
        }
    },
    computed: {
        applications() {
            return this.$store.state.applications;
        }
    },
    created () {
        this.loading = true
        this.$store.dispatch('fetchApplications')
        .then(() => {
            this.loading = false
        })
    },
}
</script>

<style scoped lang="scss">
@import '@/assets/style/_variables.scss';
</style>