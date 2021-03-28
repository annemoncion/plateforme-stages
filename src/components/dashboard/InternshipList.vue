<template>
  <div class="admin-internships">
    <b-row>
        <b-col>
            <h2 class="font-bold mt-2">
              Offres de stage 
              <b-icon icon="arrow90deg-up" class="arrow-turned" font-scale="0.75" />
            </h2>
           
            <div v-if="internships.length > 0">   
                <TuileStage 
                    v-for="internship in internships" 
                    :key="internship.id" 
                    :internship="internship" 
                    :isAdmin="true" 
                    class="mb-2" />
            </div>
        </b-col>
    </b-row>
  </div>
</template>

<script>
import TuileStage from '../TuileStage.vue'

export default {
    name: 'InternshipList',
    components: {
        TuileStage,
    },
    data () {
        return {
            loading: false,
        }
    },
    computed: {
        internships() {
            return this.$store.state.internships;
        }
    },
    created () {
        this.loading = true
        this.$store.dispatch('fetchInternships')
        .then(() => {
            this.loading = false
        })
    },
}
</script>

<style scoped lang="scss">
@import '@/assets/style/_variables.scss';
</style>