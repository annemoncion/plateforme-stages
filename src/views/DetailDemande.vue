<template>
    <div>
        <Banner :isBig="false" />

        <Heading>Candidats</Heading>

        <b-container>
            <b-row>
                <b-col md="8">
                    <Breadcrumbs />
                    <FicheCandidat :application="application" />
                </b-col>
                <b-col md="4">
                    <FieldFilter v-if="application" :currentField="application.field" :disabled="true" />
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
            <a class="a-btn-primary a-btn-primary--purple">Publier une offre maintenant!</a>
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
            <a class="a-btn-primary a-btn-primary--purple">Publier une offre maintenant!</a>
        </PingPong>

        <Pub />
    </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import Breadcrumbs from '../components/Breadcrumbs.vue'
import FicheCandidat from '../components/FicheCandidat.vue'
import EnVedette from '../components/EnVedette.vue'
import FieldFilter from '../components/FieldFilter.vue'
import Heading from '../components/Heading.vue'
import PingPong from '../components/PingPong.vue'
import Pub from '../components/Pub.vue'

export default {
    name: 'DetailDemande',
    components: {
        Banner,
        Breadcrumbs,
        EnVedette,
        FicheCandidat,
        FieldFilter,
        Heading,
        PingPong,
        Pub
    },
    data() {
        return {
            pingPongFirst: require('@/assets/img/pingpong3.jpg'),
            pingPongSecond: require('@/assets/img/pingpong4.jpg'),
            loading: false,
            currentApplication: [],
        }
    },
    computed: {
        application() {
            let id = this.$route.params.id;
            return this.$store.getters.applicationByID(id);
        }
    },
    created () {
        this.loading = true
        this.$store.dispatch('fetchApplications')
        .then(() => {
            this.loading = false
        })     
    },
}
</script>

<style scoped lang="scss">

</style>