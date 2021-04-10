<template>
    <div>
        <Banner :isBig="false" />

        <Heading>Accéder à votre compte</Heading>

        <b-container class="mb-5">
            <b-row class="mt-3">
                <b-col md="4" class="mb-4">
                   <h2 class="font-bold mt-2">Identification</h2>

                   <b-form @submit.stop.prevent="onSubmit" v-if="show">

                        <!-- Courriel -->
                        <b-form-group id="email-input-group" label="Adresse courriel" label-for="email-input-group">
                            <b-form-input
                                id="email"
                                name="email"
                                type="email"
                                v-model="$v.form.email.$model"
                                :state="validateState('email')"
                                aria-describedby="email-live-feedback"
                                ></b-form-input>

                            <b-form-invalid-feedback
                                id="email-live-feedback"
                                >Format invalide.</b-form-invalid-feedback>
                        </b-form-group>

                        <!-- Mot de passe -->
                        <b-form-group id="password-input-group" label="Mot de passe" label-for="password-input-group">
                            <b-form-input
                                id="password"
                                name="password"
                                type="password"
                                v-model="$v.form.password.$model"
                                :state="validateState('password')"
                                aria-describedby="password-live-feedback"
                            ></b-form-input>

                            <b-form-invalid-feedback
                                id="password-live-feedback"
                            >Le mot de passe est requis.</b-form-invalid-feedback>
                        </b-form-group>

                        <p class="warning" v-if="noMatchFound">L'utilisateur ou le mot de passe n'existe pas.</p>
                        <b-button type="submit" variant="primary" class="mr-1">Me connecter</b-button>
                    </b-form>
                </b-col>

                <Identification />
            </b-row>
        </b-container>

        <ImageTexte />

        <Pub />
    </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import Heading from '../components/Heading.vue'
import ImageTexte from '../components/ImageTexte.vue'
import Identification from '../components/Identification.vue'
import Pub from '../components/Pub.vue'

import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

export default {
    name: 'Connexion',
    components: {
        Banner,
        Heading,
        ImageTexte,
        Identification,
        Pub
    },
    mixins: [validationMixin],
    data() {
        return {
            form: {
                email: '',
                password: '',
            },
            show: true,
            loading: false,
            noMatch: false,
        }
    },
    computed: {
        users () {
            return this.$store.state.users
        },
        userForm () {
            return this.form
        },
        noMatchFound () {
            return this.noMatch
        }
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
            email: {
                required,
                email
            },
            password: {
                required
            },
        }
    },
    methods: {
        validateState(name) {
            const { $dirty, $error } = this.$v.form[name];
            return $dirty ? !$error : null;
        },
        onSubmit() {
            this.noMatch = false;

            // Validate form fields
            this.$v.form.$touch();
            if (this.$v.form.$anyError) {
                return;
            }

            let email = this.$v.form.email.$model;
            let password = this.$v.form.password.$model;
            let userID = "";
            let userAccessLevel = 0;

            // Search user in store
            let currentUser = this.users.filter(function (el) {
                return el.email === email
                    && el.password === password;
                }
            );
            
            // If user found, store ID and access level in variables
            if (currentUser.length > 0) {
                userID = currentUser[0].id;
                userAccessLevel = currentUser[0].accessLevel;
                this.$router.push('/mon-portail');
            }
            // Else display warning that no match have been found
            else {
                this.noMatch = true;
                return;
            }
            
            // Set variables in local storage
            localStorage.setItem('userID', userID);
            localStorage.setItem('userAccessLevel', userAccessLevel);
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/_variables.scss';

.warning {
    color: $red;
}
</style>