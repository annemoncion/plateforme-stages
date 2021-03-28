<template>
<!-- 
    "acquiredSkillset": ["Rédaction", "Recherche"],
    "wantsPay": "À la discrétion de l'employeur",
    "additionalInfos": "Proin est felis, venenatis ut lorem vel, gravida scelerisque elit. Proin bibendum sem mi, nec pharetra mi rutrum in. Fusce consectetur a eros in luctus. Cras non nisi vitae nisi efficitur accumsan mollis eu est. Nullam molestie, ipsum bibendum imperdiet suscipit, nisi libero efficitur est, nec venenatis est lorem mollis justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi fringilla sed massa quis sollicitudin. Quisque sagittis maximus ultricies. Ut purus risus, blandit aliquam nulla vel, efficitur interdum turpis. Mauris pulvinar vulputate porta. Donec sed dolor at elit lobortis porttitor eu sed turpis. Sed tincidunt porttitor velit, sed porta est lacinia vitae. Nam cursus mauris a maximus ultricies. Phasellus blandit metus sit amet rutrum dignissim.",
    "internshipWeeksLength": 8,
    "mainTraining": "BAC en Journalisme, Université Concordia",
    "logoURL": "",
    "otherTrainings": ["BAC en Arts contemporains"],
    "internshipType": "Alternance travail/études",
    "authorID": "87b6983b-6942-43bb-9142-c8c96fed30f5",
    "isActive": true,
    "isDeleted": false,
    "isValidated": false
-->
  <div>
        <h2 class="font-bold mt-2">
            Demande de stage
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
                    >Ce champ est obligatoire et recquiert entre 5 et 60 caractères.</b-form-invalid-feedback>
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
                >Ce champ est obligatoire et recquiert entre 3 et 100 caractères.</b-form-invalid-feedback>
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
                >La description est obligatoire et recquiert entre 10 et 500 caractères.</b-form-invalid-feedback>
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

            <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                <b-form-checkbox-group
                    v-model="form.checked"
                    id="checkboxes-4"
                    :aria-describedby="ariaDescribedby"
                >
                    <b-form-checkbox value="me">Check me out</b-form-checkbox>
                    <b-form-checkbox value="that">Check that out</b-form-checkbox>
                </b-form-checkbox-group>
            </b-form-group>

            <b-button type="submit" variant="primary" class="mr-1">Soumettre</b-button>
            <b-button type="reset" variant="danger">Réinitialiser</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
    </b-card>

    </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength, minValue, maxValue } from "vuelidate/lib/validators";

export default {
    name: "NewPost",
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
                title: '',
                field: null,
                city: '',
                startDate: null,
                endDate: null,
                description: '',
                hoursPerWeek: null,
                checked: [],
                parutionDate: parutionDate,
            },
            show: true,
            loading: false,
            min: minDate,
            max: maxDate,
            today: today,
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
        }
    },
    methods: {
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

            alert("Le formulaire a bel et bien été envoyé.");
        }
    }
}
</script>