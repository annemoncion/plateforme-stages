<template>
    <div>
        <Banner :isBig="false" />

        <Heading>Offres de stage</Heading>

        <b-container>
            <b-row>
                <b-col md="8">
                    <Breadcrumbs />
                    <Stage />
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

        <EnVedette :category="'candidat'" />

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
            urlStart: "--bg-ping-pong: url('",
            urlEnd: "')",
        }
    },
}
</script>

<style scoped lang="scss">

</style>