<template>
  <div class="admin-home">
    <b-row>
        <b-col>
            <h2 class="font-bold mt-2">En attente de validation</h2>
        </b-col>
    </b-row>
    <b-row>
        <b-col>
            <h3 class="font-bold">
                Demandes de stage  
                <b-icon icon="arrow90deg-up" class="arrow-turned" />
            </h3>
            <div v-if="applicationsToValidate.length > 0">
                <TuileCandidat 
                    v-for="application in applicationsToValidate" 
                    :key="application.id" 
                    :application="application" 
                    :isAdmin="true"
                    :isWaitingForValidation="true"
                    class="mb-2"/>
            </div>
            
        </b-col>
        <b-col>
            <h3 class="font-bold">
                Offres de stage  
                <b-icon icon="arrow90deg-up" class="arrow-turned" />
            </h3>
            <div v-if="internshipsToValidate.length > 0">   
                <TuileStage 
                    v-for="internship in internshipsToValidate" 
                    :key="internship.id" 
                    :internship="internship" 
                    :isAdmin="true"
                    :isWaitingForValidation="true"
                    class="mb-2" />
            </div>
        </b-col>
    </b-row>
  </div>
</template>

<script>
import TuileCandidat from '../TuileCandidat.vue'
import TuileStage from '../TuileStage.vue'

export default {
    name: 'Home',
    components: {
        TuileCandidat,
        TuileStage,
    },
    data () {
        return {
            loading: false,
        }
    },
    computed: {
        applicationsToValidate() {
            let data = this.$store.state.applications;
            let toValidate = [];

            for (const dataObject of data) {
                if (!dataObject.isValidated) {
                    toValidate.push(dataObject);
                }
            }

            return toValidate;
        },
        internshipsToValidate() {
            let data = this.$store.state.internships;
            let toValidate = [];

            for (const dataObject of data) {
                if (!dataObject.isValidated) {
                    toValidate.push(dataObject);
                }
            }

            return toValidate;
        }
    },
    created () {
        this.loading = true
        this.$store.dispatch('fetchApplications')
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