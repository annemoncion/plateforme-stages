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

            <b-row>
                <b-col cols="12" class="about__purple-block p-4">
                    <h4 class="text-white">Duis condimentum lacus vel velit congue, nec cursus erat ornare</h4>
                    <p class="text-white">Integer congue augue leo, et dignissim eros euismod vel. Vivamus ac finibus massa, at faucibus turpis. Sed in convallis ligula, ut molestie eros. Suspendisse euismod ex lorem, eget ultrices ipsum molestie sed. Integer tempus sit amet dolor quis egestas. Nunc porta ante augue, quis vulputate purus sollicitudin quis. Duis ultrices tincidunt aliquet. Proin ex orci, posuere eu pharetra at, pharetra quis ligula. Praesent ut orci convallis, ultrices orci sit amet, blandit orci. Nullam velit libero, fringilla ac sem vel, venenatis commodo urna. Suspendisse tempor lectus magna, nec venenatis ipsum interdum luctus.</p>
                </b-col>
            </b-row>

            <b-row class="mb-2">
                <b-col md="6" class="about__image">
                    <div :style="urlStart + pingPongFirst + urlEnd"></div>
                </b-col>
                <b-col md="6" class="py-5 px-4 about__grey-block">
                    <p class="mb-0 text-white size-medium">Maecenas eget lorem sit amet nibh lobortis tincidunt in id dui. Quisque convallis, nisl nec efficitur. Nunc porta ante augue, quis vulputate purus sollicitudin quis. Duis ultrices tincidunt aliquet. Proin ex orci, posuere eu pharetra at, pharetra quis ligula.</p>
                </b-col>
            </b-row>

        </b-container>

        <Pub />
    </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import Heading from '../components/Heading.vue'
import Pub from '../components/Pub.vue'

export default {
    name: 'APropos',
    components: {
        Banner,
        Heading,
        Pub,
    },
    data() {
        return {
            pingPongFirst: require('@/assets/img/pingpong1.jpg'),
            urlStart: "--bg-ping-pong: url('",
            urlEnd: "')",
        }
    },
}
</script>

<style scoped lang="scss">
@import '@/assets/style/_variables.scss';

.about {

    &__logo {
        width: 100%;
    }

    &__card {
        text-align: center;
    }

    &__card-title {
        margin-top: 24px;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.5em;
    }

    &__purple-block {
        background-color: $purple;
    }

    &__grey-block {
        background-color: $grey-dark;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__image {
        position: relative;
        min-height: 560px;

        div {
            background-image: var(--bg-ping-pong), none;
            background-position: 0 center;
            background-size: cover;
            background-repeat: no-repeat;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
    }
}

</style>