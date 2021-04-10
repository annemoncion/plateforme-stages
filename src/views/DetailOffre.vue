<template>
    <div>
        <Banner :isBig="false" />

        <Heading>Offres de stage</Heading>

        <b-container>
            <b-row>
                <b-col md="8">
                    <Breadcrumbs />
                    <FicheStage :internship="internship" />
                </b-col>
                <b-col md="4">
                    <FieldFilter />
                </b-col>
            </b-row>
        </b-container>
        
        <PingPong :imgFirst="true">
            <template v-slot:title>Pourquoi publier une offre de stage?</template>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec facilisis at velit vitae rhoncus.</p>
            <ul class="mb-3">
                <li>Donec facilisis at velit vitae rhoncus</li>
                <li>In faucibus orci luctus et ultrices</li>
                <li>Ipsum primis in faucibus orci luctus</li>
            </ul>
            <a class="a-btn-primary a-btn-primary--purple">Publier une offre maintenant!</a>
            <template v-slot:image>
                <div :style="urlStart + pingPongFirst + urlEnd"></div>
            </template>
        </PingPong>

        <EnVedette :category="'stage'" />

        <PingPong :imgFirst="false">
            <template v-slot:title>Trouvez un stage à la hauteur de vos attentes</template>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec facilisis at velit vitae rhoncus.</p>
            <ul class="mb-3">
                <li>Donec facilisis at velit vitae rhoncus</li>
                <li>In faucibus orci luctus et ultrices</li>
                <li>Ipsum primis in faucibus orci luctus</li>
            </ul>
            <a class="a-btn-primary a-btn-primary--purple">Publier une offre maintenant!</a>
            <template v-slot:image>
                <div :style="urlStart + pingPongSecond + urlEnd"></div>
            </template>
        </PingPong>

        <Pub />
    </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import Breadcrumbs from '../components/Breadcrumbs.vue'
import FicheStage from '../components/FicheStage.vue'
import EnVedette from '../components/EnVedette.vue'
import FieldFilter from '../components/FieldFilter.vue'
import Heading from '../components/Heading.vue'
import PingPong from '../components/PingPong.vue'
import Pub from '../components/Pub.vue'

export default {
    name: 'DetailOffre',
    components: {
        Banner,
        Breadcrumbs,
        EnVedette,
        FicheStage,
        FieldFilter,
        Heading,
        PingPong,
        Pub
    },
    data() {
        return {
            pingPongFirst: require('@/assets/img/pingpong3.jpg'),
            pingPongSecond: require('@/assets/img/pingpong4.jpg'),
            urlStart: "--bg-ping-pong: url('",
            urlEnd: "')",
            loading: false,
            currentApplication: [],
        }
    },
    computed: {
        internship() {
            let id = this.$route.params.id
            let internships = this.$store.state.internships
            // Search internship with route id param
            let currentInternship = internships.filter(function (el) {
                return el.id === id;
                }
            );
            return currentInternship[0];
        }
    },
    created () {
        this.loading = true
        this.$store.dispatch('fetchInternships')
        .then(() => {
            this.loading = false
        })     
    },
}
</script>

<style scoped lang="scss">

</style>