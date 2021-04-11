<template>
    <div>
        <Banner :isBig="false" />

        <Heading>Offres de stage</Heading>

        <b-container>
            <b-row class="mt-3">
                <b-col md="8">
                    <Breadcrumbs />
                    <div v-if="internships.length > 0">
                        <div v-for="internship in internships" :key="internship.id" class="mb-3">
                            <Stage :internship="internship" />
                        </div>
                    </div>
                    <div v-else>
                        <p>Aucune offre n'est présentement disponible dans ce secteur.</p>
                    </div>
                </b-col>
                <b-col md="4">
                    <FieldFilter @filter-data="filterInternships" />
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

        <EnVedette :category="'candidat'" />

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
import EnVedette from '../components/EnVedette.vue'
import FieldFilter from '../components/FieldFilter.vue'
import Heading from '../components/Heading.vue'
import PingPong from '../components/PingPong.vue'
import Pub from '../components/Pub.vue'
import Stage from '../components/TuileStage.vue'

export default {
    name: 'Offres',
    components: {
        Banner,
        Breadcrumbs,
        EnVedette,
        FieldFilter,
        Heading,
        PingPong,
        Pub,
        Stage,
    },
    data() {
        return {
            pingPongFirst: require('@/assets/img/pingpong2.jpg'),
            pingPongSecond: require('@/assets/img/pingpong1.jpg'),
            filter: {
                field: "",
                active: false
            }
        }
    },
    computed: {
        internships () {
            if (this.filter.active) {
                return this.$store.getters.internshipsByField(this.filter.field)
            }
            else {
                return this.$store.getters.publicInternships
            }
        },
        connexion() {
            return localStorage.userID ? '/mon-portail' : '/connexion'
        }
    },
    created () {
        this.loading = true
        this.$store.dispatch('fetchInternships')
        .then(() => {
            this.loading = false
        })
    },
    methods: {
        filterInternships(field) {
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