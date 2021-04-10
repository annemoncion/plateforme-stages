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
                    v-for="internship in sortedInternships" 
                    :key="internship.id" 
                    :internship="internship" 
                    :isAdmin="true" 
                    class="mb-2"
                    @show-modal-modify="showModalModify"
                    @show-modal-delete="showModalDelete" />
            </div>

            <div v-else>
                <p>Vous n'avez aucune demande de stage active.</p>
            </div>

            <b-modal ref="modal-modify" hide-footer title="Modifier mon offre">
                <div class="d-block text-center">
                    <ModifyInternship 
                        :internship="internshipToModify" 
                        @hide-modal-modify="hideModalModify" />
                </div>
            </b-modal>

            <b-modal ref="modal-delete" hide-footer title="Supprimer mon offre">
                <div class="d-block text-center">
                    <p>Voulez-vous supprimer l'offre de stage suivante ?</p>
                    <h2>{{ internship.title }}</h2>
                </div>
                <b-button class="mt-3" variant="outline-danger" block @click="deleteInternship(internship.id)">Supprimer</b-button>
                <b-button class="mt-2" variant="outline-warning" block @click="hideModalDelete">Retour</b-button>
            </b-modal>
        </b-col>
    </b-row>
  </div>
</template>

<script>
import TuileStage from '../TuileStage.vue'
import ModifyInternship from './ModifyInternship.vue'

export default {
    name: 'InternshipList',
    components: {
        TuileStage,
        ModifyInternship,
    },
    data () {
        return {
            loading: false,
            internship: [],
        }
    },
    computed: {
        internships() {
            if (localStorage.userAccessLevel === "333") {
                return this.$store.getters.internshipsByUser(localStorage.userID);
            }
            else {
                return this.$store.state.internships;
            }  
        },
        internshipToModify() {
            return this.internship;
        },
        sortedInternships() {
            let intern = this.internships;
            intern.sort(function(a,b){
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return new Date(b.parutionDate) - new Date(a.parutionDate);
            });

            return intern;
        },
    },
    methods: {
        showModalModify(id) {

            if (id) {
                for (const internship of this.internships) {
                    if (internship.id === id) {
                        this.internship = internship
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
                for (const internship of this.internships) {
                    if (internship.id === id) {
                        this.internship = internship
                        break
                    }    
                }
            }

            this.$refs['modal-delete'].show()
        },
        hideModalDelete() {
            this.$refs['modal-delete'].hide()
        },
        deleteInternship() {
            this.$store.dispatch('deleteInternship', this.internship.id);
            this.$refs['modal-delete'].hide();
        },
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/_variables.scss';
</style>