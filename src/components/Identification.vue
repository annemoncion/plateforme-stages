<template>
  <b-col offset-md="1" md="7">
        <h2 class="font-bold mt-2">
            Se créer un compte stagiaire
        </h2>
        
        <b-form @submit.stop.prevent="onSubmit" @reset="resetForm" v-if="show">

            <!-- Prénom -->
            <b-form-group id="first-name-input-group" label="Prénom" label-for="first-name-input-group">
                <b-form-input
                    id="firstName"
                    name="firstName"
                    v-model="$v.form.firstName.$model"
                    :state="validateState('firstName')"
                    aria-describedby="first-name-live-feedback"
                    ></b-form-input>

                <b-form-invalid-feedback
                    id="first-name-live-feedback"
                    >Ce champ est obligatoire et requiert entre 2 et 60 caractères.</b-form-invalid-feedback>
            </b-form-group>

            <!-- Nom -->
            <b-form-group id="last-name-input-group" label="Nom" label-for="last-name-input-group">
                <b-form-input
                    id="lastName"
                    name="lastName"
                    v-model="$v.form.lastName.$model"
                    :state="validateState('lastName')"
                    aria-describedby="last-name-live-feedback"
                    ></b-form-input>

                <b-form-invalid-feedback
                    id="last-name-live-feedback"
                    >Ce champ est obligatoire et requiert entre 2 et 60 caractères.</b-form-invalid-feedback>
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
                >Ce champ est obligatoire et requiert entre 2 et 100 caractères.</b-form-invalid-feedback>
            </b-form-group>

            <!-- École -->
            <b-form-group id="school-input-group" label="Établissement scolaire" label-for="school-input-group">
                <b-form-input
                    id="school"
                    name="school"
                    v-model="$v.form.school.$model"
                    :state="validateState('school')"
                    aria-describedby="school-live-feedback"
                    ></b-form-input>

                <b-form-invalid-feedback
                    id="school-live-feedback"
                    >Ce champ est obligatoire et requiert entre 2 et 120 caractères.</b-form-invalid-feedback>
            </b-form-group>

            <!-- Courriel -->
            <b-form-group id="new-email-input-group" label="Adresse courriel" label-for="new-email-input-group">
                <b-form-input
                    id="newEmail"
                    name="email"
                    type="email"
                    v-model="$v.form.email.$model"
                    :state="validateState('email')"
                    aria-describedby="new-email-live-feedback"
                    ></b-form-input>

                <b-form-invalid-feedback
                    id="new-email-live-feedback"
                    >L'adresse courriel est obligatoire et doit avoir un format valide.</b-form-invalid-feedback>
            </b-form-group>

            <!-- Mot de passe -->
            <b-form-group id="new-password-input-group" label="Mot de passe" label-for="new-password-input-group">
                <b-form-input
                    id="newPassword"
                    name="password"
                    type="password"
                    v-model="$v.form.password.$model"
                    :state="validateState('password')"
                    aria-describedby="new-password-live-feedback"
                ></b-form-input>

                <b-form-invalid-feedback
                    id="new-password-live-feedback"
                >Le mot de passe est obligatoire et requiet entre 7 et 24 caractères.</b-form-invalid-feedback>
            </b-form-group>

            <b-button type="submit" variant="primary" class="mr-1">Soumettre</b-button>
            <b-button type="reset" variant="danger">Réinitialiser</b-button>
        </b-form>
    </b-col>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength, email } from "vuelidate/lib/validators";

export default {
    name: "Identification",
    mixins: [validationMixin],
    data() {
        return {
            form: {
                id: '',
                lastName: '',
                firstName: '',
                isBusiness: false,
                businessName: '',
                address: '',
                city: '',
                school: '',
                logoURL: '',
                email: '',
                phone: '',
                website: '',
                cvURL: '',
                password: '',
                isActive: true,
                isDeleted: false,
                isValidated: false,
                accessLevel: 111,
            },
            show: true,
            loading: false,
        }
    },
    computed: {
         
    },
    created () {
        this.loading = true
        this.$store.dispatch('fetchUsers')
        .then(() => {
            this.loading = false
        })
    },
    validations: {
        form: {
            firstName: {
                required,
                minLength: minLength(2),
                maxLength: maxLength(60),
            },
            lastName: {
                required,
                minLength: minLength(2),
                maxLength: maxLength(60),
            },
            city: {
                required,
                minLength: minLength(2),
                maxLength: maxLength(100),
            },
            school: {
                required,
                minLength: minLength(2),
                maxLength: maxLength(120),
            },
            email: {
                required,
                email,
            },
            password: {
                required,
                minLength: minLength(7),
                maxLength: maxLength(24),
            },
        }
    },
    methods: {
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
                lastName: '',
                firstName: '',
                city: '',
                school: '',
                email: '',
                password: '',
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
            // Ajouter l'ID
            this.form.id = this.generateID();
            this.$store.dispatch('addUser', this.form);

            let userID = this.form.id;
            let userAccessLevel = 111;

            // Définir les variables dans le LocalStorage du navigateur
            localStorage.setItem('userID', userID);
            localStorage.setItem('userAccessLevel', userAccessLevel);

            this.$router.push('/mon-portail');
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