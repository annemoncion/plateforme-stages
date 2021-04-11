<template>
  <div class="admin-home">
    <b-row>
        <b-col>
            <h2 class="font-bold mt-2">En attente de validation</h2>
        </b-col>
    </b-row>
    <b-row v-if="currentUser">
        <b-col v-if="currentUser.accessLevel === 111 || currentUser.accessLevel === 999">
            <h3 class="font-bold">
                Demandes de stage  
                <b-icon icon="arrow90deg-up" class="arrow-turned" />
            </h3>
            <div v-if="applicationsList.length > 0">
                <TuileCandidat 
                    v-for="application in applicationsList" 
                    :key="application.id" 
                    :application="application" 
                    :isAdmin="true"
                    :isWaitingForValidation="true"
                    :isEditable="currentUser.accessLevel === 999"
                    class="mb-2"/>
            </div>
            <div v-else>
                <p>Aucune demande de stage en attente de validation.</p>
            </div>   
        </b-col>

        <b-col v-if="currentUser.accessLevel === 333 || currentUser.accessLevel === 999">
            <h3 class="font-bold">
                Offres de stage  
                <b-icon icon="arrow90deg-up" class="arrow-turned" />
            </h3>
            <div v-if="internshipsList.length > 0">   
                <TuileStage 
                    v-for="internship in internshipsList" 
                    :key="internship.id" 
                    :internship="internship" 
                    :isAdmin="true"
                    :isWaitingForValidation="true"
                    :isEditable="currentUser.accessLevel === 999"
                    class="mb-2" />
            </div>
            <div v-else>
                <p>Aucune offre de stage en attente de validation.</p>
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
            return this.$store.state.applications.filter(application => !application.isValidated && !application.isDeleted);
        },
        internshipsToValidate() {
            return this.$store.state.internships.filter(internship => !internship.isValidated && !internship.isDeleted);
        },
        applicationsFilteredByUser() {
            return this.applicationsToValidate.filter(application => application.authorID === this.currentUser.id);
        },
        internshipsFilteredByUser() {
            return this.internshipsToValidate.filter(internship => internship.authorID === this.currentUser.id);
        },
        internshipsList() {
            return this.currentUser.accessLevel === 333 ? this.internshipsFilteredByUser : this.internshipsToValidate;
        },
        applicationsList() {
            return this.currentUser.accessLevel === 111 ? this.applicationsFilteredByUser : this.applicationsToValidate;
        },
        currentUser() {
            return this.$store.getters.currentUser(localStorage.userID);
        }
    },
    created () {
        this.loading = true
        this.$store.dispatch('fetchApplications')
        this.$store.dispatch('fetchInternships')
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