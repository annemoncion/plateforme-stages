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
                    v-for="application in sortedApplications" 
                    :key="application.id" 
                    :application="application" 
                    :isAdmin="true" 
                    class="mb-2"
                    @show-modal-modify="showModalModify"
                    @show-modal-delete="showModalDelete" />
            </div>

            <div v-else>
                <p>Vous n'avez aucune demande de stage active.</p>
            </div>

            <b-modal ref="modal-modify" hide-footer title="Modifier ma demande">
                <div class="d-block text-center">
                    <ModifyApplication 
                        :application="applicationToModify" 
                        @hide-modal-modify="hideModalModify" />
                </div>
            </b-modal>

            <b-modal ref="modal-delete" hide-footer title="Supprimer ma demande">
                <div class="d-block text-center">
                    <p>Voulez-vous supprimer la demande de stage suivante ?</p>
                    <h2>{{ application.title }}</h2>
                </div>
                <b-button class="mt-3" variant="outline-danger" block @click="deleteApplication(application.id)">Supprimer</b-button>
                <b-button class="mt-2" variant="outline-warning" block @click="hideModalDelete">Retour</b-button>
            </b-modal>
        </b-col>
    </b-row>
  </div>
</template>

<script>
import TuileCandidat from '../TuileCandidat.vue'
import ModifyApplication from './ModifyApplication.vue'

export default {
    name: 'ApplicationList',
    components: {
        TuileCandidat,
        ModifyApplication,
    },
    data() {
        return {
            loading: false,
            application: [],
        }
    },
    computed: {
        applications() {
            if (localStorage.userAccessLevel === "111") {
                return this.$store.getters.applicationsByUser(localStorage.userID);
            }
            else {
                return this.$store.state.applications;
            } 
        },
        sortedApplications() {
            let app = this.applications;
            app.sort(function(a,b){
                // Transformer les string en dates, et les soustraire l'une de l'autre
                // pour obtenir une valeur soit négative, positive ou égale à zéro.
                return new Date(b.parutionDate) - new Date(a.parutionDate);
            });

            return app;
        },
        applicationToModify() {
            return this.application;
        },
    },
    methods: {
        showModalModify(id) {

            if (id) {
                for (const application of this.applications) {
                    if (application.id === id) {
                        this.application = application
                        break
                    }    
                }
            }

            this.$refs['modal-modify'].show()
        },
        hideModalModify() {
            this.$refs['modal-modify'].hide()
        },
        showModalDelete(id) {

            if (id) {
                for (const application of this.applications) {
                    if (application.id === id) {
                        this.application = application
                        break
                    }    
                }
            }

            this.$refs['modal-delete'].show()
        },
        hideModalDelete() {
            this.$refs['modal-delete'].hide()
        },
        deleteApplication() {
            this.$store.dispatch('deleteApplication', this.application.id);
            this.$refs['modal-delete'].hide();
        },
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/_variables.scss';
</style>