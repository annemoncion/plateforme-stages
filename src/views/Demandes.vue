<template>
    <div>
        <Banner :isBig="false" />

        <Heading>Candidats</Heading>

        <b-container>
            <b-row class="mt-3">
                <b-col md="8">
                    <Breadcrumbs />
                    <div v-if="applications.length > 0">
                        <div v-for="application in applications" :key="application.id" class="mb-3">
                            <Candidat :application="application" />
                        </div>
                    </div>
                    <div v-else>
                        <p>Aucune demande de stage n'est présentement disponible dans ce secteur.</p>
                    </div>      
                </b-col>
                <b-col md="4">
                    <FieldFilter @filter-data="filterApplications" />
                </b-col>
            </b-row>
        </b-container>
        
        <PingPong :imgFirst="true" :image="pingPongFirst">
            <template v-slot:title>Pourquoi publier une offre de stage?</template>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec facilisis at velit vitae rhoncus.</p>
            <ul class="mb-3">
                <li>Donec facilisis at velit vitae rhoncus</li>
                <li>In faucibus orci luctus et ultrices</li>
                <li>Ipsum primis in faucibus orci luctus</li>
            </ul>
            <router-link :to="connexion" class="a-btn-primary a-btn-primary--purple">Publier une offre maintenant!</router-link>
        </PingPong>

        <EnVedette :category="'stage'" />

        <PingPong :imgFirst="false" :image="pingPongSecond">
            <template v-slot:title>Trouvez un stage à la hauteur de vos attentes</template>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec facilisis at velit vitae rhoncus.</p>
            <ul class="mb-3">
                <li>Donec facilisis at velit vitae rhoncus</li>
                <li>In faucibus orci luctus et ultrices</li>
                <li>Ipsum primis in faucibus orci luctus</li>
            </ul>
            <router-link :to="connexion" class="a-btn-primary a-btn-primary--purple">Publier une offre maintenant!</router-link>
        </PingPong>

        <Pub />
    </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import Breadcrumbs from '../components/Breadcrumbs.vue'
import Candidat from '../components/TuileCandidat.vue'
import EnVedette from '../components/EnVedette.vue'
import FieldFilter from '../components/FieldFilter.vue'
import Heading from '../components/Heading.vue'
import PingPong from '../components/PingPong.vue'
import Pub from '../components/Pub.vue'

export default {
    name: 'Demandes',
    components: {
        Banner,
        Breadcrumbs,
        Candidat,
        EnVedette,
        FieldFilter,
        Heading,
        PingPong,
        Pub
    },
    data() {
        return {
            pingPongFirst: require('@/assets/img/pingpong3.jpg'),
            pingPongSecond: require('@/assets/img/pingpong4.jpg'),
            filter: {
                field: "",
                active: false
            }
        }
    },
    computed: {
        applications () {
            if (this.filter.active) {
                return this.$store.getters.applicationsByField(this.filter.field)
            }
            else {
                return this.$store.getters.publicApplications
            }
        },
        connexion() {
            return localStorage.userID ? '/mon-portail' : '/connexion'
        }
    },
    created () {
        this.loading = true
        this.$store.dispatch('fetchApplications')
        .then(() => {
            this.loading = false
        })
    },
    methods: {
        filterApplications(field) {
            if (field.length > 0) {
                this.filter.field = field;
                this.filter.active = true; 
            }
            else {
                this.filter.active = false;
            }
        }
    }
}
</script>

<style scoped lang="scss">

</style>