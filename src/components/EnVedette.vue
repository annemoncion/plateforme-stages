<template>
    <b-container class="featured my-5">
        <b-row class="mb-4 text-center">
            <b-col offset-lg="3" lg="6">
                <div class="featured__title-container">
                    <h1 class="light-text featured__title">{{ sectionTitle }}</h1>
                </div>    
                <p class="light-text mb-0">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec facilisis at velit vitae rhoncus. Suspendisse potenti.</p>
            </b-col>
        </b-row>
        <b-row>
            <b-col v-for="dataItem in dataFetched" :key="dataItem.id" lg="3" class="featured__cards mb-2 mb-lg-0">
                <component :internship="internship(dataItem)" :application="application(dataItem)" :is="capitalizedCategorie" :enVedette="true"></component>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="text-center mt-4">
                <router-link :to="activeCategory.actionLink" class="a-btn-primary a-btn-primary--red a-btn-primary--rounded">{{ activeCategory.actionBtn }}</router-link>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Candidat from '../components/TuileCandidat.vue'
import Stage from '../components/TuileStage.vue'

export default {
    name: 'EnVedette',
    components: {
        Candidat,
        Stage
    },
    props: {
        category: {
            type: String,
            default: "stage",
        },
        isHomePage: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            stage: {
                title: "Tu es à la recherche d'un stage?",
                actionBtn: "Voir toutes les offres de stage",
                actionLink: "/offres-de-stage",
            },
            candidat: {
                title: "Votre futur stagiaire se trouve ici",
                actionBtn: "Voir tous les candidats",
                actionLink: "/demandes-de-stage",
            },
            loading: false,
        }
    },
    computed: {
        activeCategory() {
            return this[this.category];
        },
        dataType() {
            return this.category === "stage" ? "internships" : "applications";
        },
        dataFetched() {
            let data = this.$store.state[this.dataType];
            let featuredData = data.slice(Math.max(data.length - 4, 0));
            return featuredData;
        },
        sectionTitle() {
            return this.isHomePage && this.category === "stage" ? "Tu es à la recherche de ton stage de fin d'études?" : this[this.category].title;
        },
        capitalizedCategorie() {
            if (typeof this.category !== 'string') return ''
            return this.category.charAt(0).toUpperCase() + this.category.slice(1)
        },
    },
    created () {
        this.loading = true
        this.$store.dispatch('fetchInternships')
        .then(() => {
            this.loading = false
        })
        this.$store.dispatch('fetchApplications')
        .then(() => {
            this.loading = false
        })
    },
    methods: {
        internship(instance) {
            return this.dataType === "internships" ? instance : {};
        },
        application(instance) {
            return this.dataType === "applications" ? instance : {};
        },
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/_variables.scss';

.featured {
    &__title-container {
        width: 100%;
    }
    
    &__title {
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
    }

    &__cards {
        display: flex;
        align-items: stretch;
    }
}
</style>