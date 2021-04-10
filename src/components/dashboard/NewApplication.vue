<template>
  <div class="mb-5">
        <h2 class="font-bold mt-2">
            Nouvelle demande de stage
            <b-icon icon="arrow90deg-up" class="arrow-turned" font-scale="0.75" />
        </h2>
        
        <b-form @submit.stop.prevent="onSubmit" @reset="resetForm" v-if="show">

            <!-- Titre de la demande -->
            <b-form-group id="title-input-group" label="Titre de la demande" label-for="title-input-group">
                <b-form-input
                    id="title"
                    name="title"
                    v-model="$v.form.title.$model"
                    :state="validateState('title')"
                    aria-describedby="title-live-feedback"
                    ></b-form-input>

                <b-form-invalid-feedback
                    id="title-live-feedback"
                    >Ce champ est obligatoire et requiert entre 5 et 60 caractères.</b-form-invalid-feedback>
            </b-form-group>

            <!-- Secteur d'activité -->
            <b-form-group id="field-input-group" label="Secteur d'activité" label-for="field-input-group">
                <b-form-select
                    id="field"
                    name="field"
                    v-model="$v.form.field.$model"
                    :options="fields"
                    :state="validateState('field')"
                    aria-describedby="field-live-feedback"
                ></b-form-select>

                <b-form-invalid-feedback id="field-live-feedback">Vous devez sélectionner un secteur d'activité.</b-form-invalid-feedback>
            </b-form-group>

            <!-- Ville -->
            <b-form-group id="city-input-group" label="Ville" label-for="city-input-group">
                <b-form-input
                    id="city"
                    name="city"
                    v-model="$v.form.city.$model"
                    :state="validateState('city')"
                    aria-describedby="city-live-feedback"
                ></b-form-input>

                <b-form-invalid-feedback
                    id="city-live-feedback"
                >Ce champ est obligatoire et requiert entre 3 et 100 caractères.</b-form-invalid-feedback>
            </b-form-group>

            <!-- Date de début de stage -->
            <b-form-group id="start-date-input-group" label="Date de début de stage" label-for="start-date-input-group">
                <b-form-datepicker 
                    id="startDate" 
                    v-model="$v.form.startDate.$model"
                    :state="validateState('startDate')"
                    aria-describedby="startDate-live-feedback"
                    placeholder="Aucune date sélectionnée"
                    :min="min"
                    :max="max"
                    locale="fr"
                ></b-form-datepicker>

                <b-form-invalid-feedback
                    id="startDate-live-feedback"
                >Vous devez sélectionnez une date.</b-form-invalid-feedback>
            </b-form-group>

            <!-- Date de fin de stage -->
            <b-form-group v-if="$v.form.startDate.$model" id="end-date-input-group" label="Date de fin de stage" label-for="end-date-input-group">
                <b-form-datepicker 
                    id="endDate" 
                    v-model="$v.form.endDate.$model"
                    :state="validateState('endDate')"
                    aria-describedby="endDate-live-feedback"
                    :min="$v.form.startDate.$model"
                    :max="max"
                    placeholder="Aucune date sélectionnée"
                    locale="fr"
                ></b-form-datepicker>

                <b-form-invalid-feedback
                    id="endDate-live-feedback"
                >Vous devez sélectionnez une date.</b-form-invalid-feedback>
            </b-form-group>

            <!-- Nombre de semaines de stage -->
            <b-form-group v-if="$v.form.endDate.$model" id="weeks-number-input-group" label="Nombre de semaines de stage" label-for="weeks-number-input-group">
                <b-form-input
                    id="weeksNumber"
                    name="weeksNumber"
                    v-model="form.weeksNumber"
                    :value="form.weeksNumber"
                    type="number"
                    aria-describedby="weeks-number-live-feedback"
                    disabled
                ></b-form-input>

                <b-form-invalid-feedback
                    id="weeks-number-live-feedback"
                >Le nombre d'heures de travail par semaine est obligatoire et doit se situer entre 5 h et 40 h.</b-form-invalid-feedback>
            </b-form-group>

            <!-- Description -->
            <b-form-group id="desc-input-group" label="Description de la demande" label-for="desc-input-group">
                <b-form-textarea
                    id="description"
                    name="description"
                    v-model="$v.form.description.$model"
                    :state="validateState('description')"
                    aria-describedby="description-live-feedback"
                ></b-form-textarea>

                <b-form-invalid-feedback
                    id="description-live-feedback"
                >La description est obligatoire et requiert entre 10 et 500 caractères.</b-form-invalid-feedback>
            </b-form-group>

            <!-- Nombre d'heures par semaine -->
            <b-form-group id="hours-weekly-input-group" label="Nombre d'heures de travail par semaine" label-for="hours-weekly-input-group">
                <b-form-input
                    id="hoursPerWeek"
                    name="hoursPerWeek"
                    v-model="$v.form.hoursPerWeek.$model"
                    :state="validateState('hoursPerWeek')"
                    type="number"
                    min="5"
                    max="40"
                    aria-describedby="hoursPerWeek-live-feedback"
                ></b-form-input>

                <b-form-invalid-feedback
                    id="hoursPerWeek-live-feedback"
                >Le nombre d'heures de travail par semaine est obligatoire et doit se situer entre 5 h et 40 h.</b-form-invalid-feedback>
            </b-form-group>

            <!-- Rémunération -->
            <b-form-group id="wants-pay-input-group" label="Le stage doit-il être rémunéré?" label-for="wants-pay-input-group">
                <b-form-select
                    id="wantsPay"
                    name="wantsPay"
                    v-model="$v.form.wantsPay.$model"
                    :options="salaries"
                    :state="validateState('wantsPay')"
                    aria-describedby="wants-pay-live-feedback"
                ></b-form-select>

                <b-form-invalid-feedback id="wants-pay-live-feedback">Vous devez sélectionner une option.</b-form-invalid-feedback>
            </b-form-group>

            <!-- Type de stage -->
            <b-form-group id="internship-type-input-group" label="Type de stage" label-for="internship-type-input-group">
                <b-form-select
                    id="internshipType"
                    name="internshipType"
                    v-model="$v.form.internshipType.$model"
                    :options="internshipTypes"
                    :state="validateState('internshipType')"
                    aria-describedby="internship-type-live-feedback"
                ></b-form-select>

                <b-form-invalid-feedback id="internship-type-live-feedback">Vous devez sélectionner une option.</b-form-invalid-feedback>
            </b-form-group>

            <!-- Formation principale -->
            <b-form-group id="main-training-input-group" label="Nom de mon programme d'études" label-for="main-training-input-group">
                <b-form-input
                    id="mainTraining"
                    name="mainTraining"
                    v-model="$v.form.mainTraining.$model"
                    :state="validateState('mainTraining')"
                    aria-describedby="main-training-live-feedback"
                    ></b-form-input>

                <b-form-invalid-feedback
                    id="main-training-live-feedback"
                    >Ce champ est obligatoire et requiert un maximum de 120 caractères.</b-form-invalid-feedback>
            </b-form-group>

            <!-- Autres formations -->
            <b-form-group id="other-trainings-input-group" label="Autres formations" label-for="other-trainings-input-group">
                <b-form-input
                    id="otherTrainings"
                    name="otherTrainings"
                    v-model="$v.form.otherTrainings.$model"
                    :state="validateState('otherTrainings')"
                    aria-describedby="other-trainings-live-feedback" 
                    ></b-form-input>

                <b-form-invalid-feedback
                    id="other-trainings-live-feedback"
                    >Ce champ est obligatoire et requiert un maximun de 250 caractères.</b-form-invalid-feedback>
            </b-form-group>

            <!-- Compétences acquises -->
            <b-form-group id="acquired-skillset-input-group" label="Compétences acquises" label-for="acquired-skillset-input-group">
                <b-form-textarea
                    id="acquiredSkillset"
                    name="acquiredSkillset"
                    v-model="$v.form.acquiredSkillset.$model"
                    :state="validateState('acquiredSkillset')"
                    aria-describedby="acquired-skillset-live-feedback"
                    ></b-form-textarea>

                <b-form-invalid-feedback
                    id="acquired-skillset-live-feedback"
                    >Ce champ est obligatoire et requiert un maximum de 250 caractères.</b-form-invalid-feedback>
            </b-form-group>

            <!-- Infos additionnelles -->
            <b-form-group id="additional-infos-input-group" label="Informations additionnelles" label-for="additional-infos-input-group">
                <b-form-textarea
                    id="additionalInfos"
                    name="additionalInfos"
                    v-model="$v.form.additionalInfos.$model"
                    :state="validateState('additionalInfos')"
                    aria-describedby="additional-infos-live-feedback"
                ></b-form-textarea>

                <b-form-invalid-feedback
                    id="additional-infos-live-feedback"
                >Le maximum de 500 caractères a été dépassé.</b-form-invalid-feedback>
            </b-form-group>

            <b-button type="submit" variant="primary" class="mr-1">Soumettre</b-button>
            <b-button type="reset" variant="danger">Réinitialiser</b-button>
    </b-form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength, minValue, maxValue } from "vuelidate/lib/validators";

export default {
    name: "NewApplication",
    mixins: [validationMixin],
    data() {
        const now = new Date()
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
        const minDate = new Date(today)
        // Date maximum: Un an et 15 jours
        const maxDate = new Date(today) 
        maxDate.setMonth(maxDate.getMonth() + 12)
        maxDate.setDate(15)
        let month = '' + (today.getMonth() + 1)
        let day = '' + today.getDate()
        const year = today.getFullYear()

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        const parutionDate = [year, month, day].join('-')

        return {
            form: {
                id: '',
                title: '',
                field: null,
                city: '',
                startDate: null,
                endDate: null,
                description: '',
                hoursPerWeek: null,
                acquiredSkillset: '',
                wantsPay: null,           
                additionalInfos: '',
                weeksNumber: 0,
                mainTraining: '',
                otherTrainings: '', 
                internshipType: null,     
                parutionDate: parutionDate,
                authorID: '',
                isActive: true,
                isDeleted: false,
                isValidated: false
            },
            show: true,
            loading: false,
            min: minDate,
            max: maxDate,
            today: today,
            salaries: [
                {text: "Sélectionnez", value: null},
                {text: "Oui", value: "Oui"},
                {text: "Non", value: "Non"},
                {text: "À la discrétion de l'employeur", value: "À la discrétion de l'employeur"},
            ],
            internshipTypes: [
                {text: "Sélectionnez", value: null},
                {text: "Temps plein", value: "Temps plein"},
                {text: "Temps partiel", value: "Temps partiel"},
                {text: "Alternance travail/études", value: "Alternance travail/études"},
            ]
        }
    },
    computed: {
        fields() {
          let fields = this.$store.state.fields;
          let activeFields = [{text: 'Sélectionnez', value: null}];

          for (const field of fields) {
              if (!field.isDeleted) {
                  activeFields.push({'text': field.title, 'value': field.title});
              }
          }

          return activeFields;
        },
        endDate() {
            return this.form.endDate
        },
        currentUser() {
            return this.$store.getters.currentUser(localStorage.userID);
        }     
    },
    watch: {
        endDate(value){
            // binding this to the data value in the codePostal input
            this.form.endDate = value

            if (value) {
                this.updateWeeksNumber()
            }
            
        },

    },
    created () {
        this.loading = true
        this.$store.dispatch('fetchFields')
        .then(() => {
            this.loading = false
        })
    },
    validations: {
        form: {
            field: {
                required
            },
            title: {
                required,
                minLength: minLength(5),
                maxLength: maxLength(60),
            },
            city: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(100),
            },
            startDate: {
                required
            },
            endDate: {
                required
            },
            description: {
                required,
                minLength: minLength(10),
                maxLength: maxLength(500),
            },
            hoursPerWeek: {
                required,
                minValue: minValue(5),
                maxValue: maxValue(40)
            },
            wantsPay: {
                required,
            },
            internshipType: {
                required,
            },
            mainTraining: {
                required,
                maxLength: maxLength(120),
            },
            otherTrainings: {
                required,
                maxLength: maxLength(250),
            },
            acquiredSkillset: {
                required,
                maxLength: maxLength(250),
            },
            additionalInfos: {
                maxLength: maxLength(500),
            },
        }
    },
    methods: {
        updateWeeksNumber() {
            if (this.form.startDate.length > 0 &&  this.form.endDate.length > 0) {
                this.form.weeksNumber = Math.round(((new Date(this.form.endDate)) - (new Date(this.form.startDate))) / (7 * 24 * 60 * 60 * 1000))
            }
            else {
                this.form.weeksNumber = 0;
            }  
        },
        // Fonction pour générer un identifiant unique pour le mock API. Ne pas utiliser en production.
        generateID() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        },
        validateState(name) {
            const { $dirty, $error } = this.$v.form[name];
            return $dirty ? !$error : null;
        },
        resetForm() {
            this.form = {
                title: '',
                field: null,
                city: '',
                startDate: null,
                endDate: null,
                description: '',
                hoursPerWeek: null,
                acquiredSkillset: '',
                wantsPay: null,           
                additionalInfos: '',
                weeksNumber: 0,
                mainTraining: '',
                otherTrainings: '', 
                internshipType: null
            };

            this.$nextTick(() => {
                this.$v.$reset();
            });
        },
        onSubmit() {
            this.$v.form.$touch();
            if (this.$v.form.$anyError) {

                return;
            }
            // Append ID
            this.form.id = this.generateID();
            // Add author ID
            this.form.authorID = this.currentUser.id;
            // Add new data to store
            this.$store.dispatch('addApplication', this.form);
            this.$emit('switch-tab', 'ApplicationList');
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/_variables.scss';

form {
    max-width: 800px;
}
</style>