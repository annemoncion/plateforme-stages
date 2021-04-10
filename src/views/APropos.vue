<template>
    <div>
        <Banner :isBig="false" />

        <Heading>À propos</Heading>

        <b-container>
            <b-row class="my-4">
                <b-col md="4" class="about__logo-container">
                    <img class="about__logo" :src="require('@/assets/img/logoipsum-black.svg')" alt="Logo E-Stage" />
                </b-col>
                <b-col offset-md="1" md="7">
                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lorem sit amet nibh lobortis tincidunt in id dui. Quisque convallis, nisl nec efficitur ultricies, lectus odio volutpat magna, vel ultricies metus justo in elit. Nunc sit amet dictum ligula, quis rhoncus ipsum. Aenean dui lacus, fermentum et mauris sit amet, vehicula condimentum dui. Phasellus molestie metus sit amet lectus maximus, vel laoreet felis dictum. Nullam commodo elementum convallis. Suspendisse aliquet purus sollicitudin vestibulum blandit. Sed varius augue nec vulputate ornare. Quisque in augue vel ipsum varius porttitor id non leo.</p>
                </b-col>
            </b-row>

            <b-row class="my-4">
                <b-col md="4" class="about__card">
                    <b-img fluid class="about__card-img" :src="require('@/assets/img/pingpong1.jpg')" alt="Description de l'image" />
                    <h3 class="about__card-title">Forces avenir</h3>
                    <p class="about__card-content">Sed vitae nisl sollicitudin enim porttitor maximus in quis purus. In rutrum fermentum quam eget venenatis. Vivamus imperdiet ultricies ante, non sagittis felis pellentesque ut. Integer ullamcorper risus purus, id lobortis nunc porta tincidunt.</p>
                </b-col>
                <b-col md="4" class="about__card">
                    <b-img fluid class="about__card-img" :src="require('@/assets/img/pingpong2.jpg')" alt="Description de l'image" />
                    <h3 class="about__card-title">Centraide</h3>
                    <p class="about__card-content">Sed vitae nisl sollicitudin enim porttitor maximus in quis purus. In rutrum fermentum quam eget venenatis. Vivamus imperdiet ultricies ante, non sagittis felis pellentesque ut. Integer ullamcorper risus purus, id lobortis nunc porta tincidunt.</p>
                </b-col>
                <b-col md="4" class="about__card">
                    <b-img fluid class="about__card-img" :src="require('@/assets/img/pingpong3.jpg')" alt="Description de l'image" />
                    <h3 class="about__card-title">Fondation Réno-jouets</h3>
                    <p class="about__card-content">Sed vitae nisl sollicitudin enim porttitor maximus in quis purus. In rutrum fermentum quam eget venenatis. Vivamus imperdiet ultricies ante, non sagittis felis pellentesque ut. Integer ullamcorper risus purus, id lobortis nunc porta tincidunt.</p>
                </b-col>
            </b-row>
        </b-container>

        <ImageTexte :displayTopBlock="true" />

        <Pub />
    </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import Heading from '../components/Heading.vue'
import ImageTexte from '../components/ImageTexte.vue'
import Pub from '../components/Pub.vue'

export default {
    name: 'APropos',
    components: {
        Banner,
        Heading,
        ImageTexte,
        Pub,
    },
}
</script>