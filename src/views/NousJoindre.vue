<template>
    <div>
        <Banner :isBig="false" />

        <Heading>Nous joindre</Heading>

        <b-container>
            <b-row class="my-4">
                <b-col md="4" class="about__logo-container">
                    <img class="about__logo" :src="require('@/assets/img/logoipsum-black.svg')" alt="Logo E-Stage" />
                </b-col>
                <b-col offset-md="1" md="7">
                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lorem sit amet nibh lobortis tincidunt in id dui. Quisque convallis, nisl nec efficitur ultricies, lectus odio volutpat magna, vel ultricies metus justo in elit. Nunc sit amet dictum ligula, quis rhoncus ipsum. Aenean dui lacus, fermentum et mauris sit amet, vehicula condimentum dui. Phasellus molestie metus sit amet lectus maximus, vel laoreet felis dictum. Nullam commodo elementum convallis. Suspendisse aliquet purus sollicitudin vestibulum blandit. Sed varius augue nec vulputate ornare. Quisque in augue vel ipsum varius porttitor id non leo.</p>
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
    name: 'NousJoindre',
    components: {
        Banner,
        Heading,
        Pub,
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