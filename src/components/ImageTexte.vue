<template>
    <b-container>
        <b-row v-if="displayTopBlock">
            <b-col cols="12" class="image-text__purple-block p-3 py-4 p-md-4">
                <h4 class="text-white">Duis condimentum lacus vel velit congue, nec cursus erat ornare</h4>
                <p class="text-white">Integer congue augue leo, et dignissim eros euismod vel. Vivamus ac finibus massa, at faucibus turpis. Sed in convallis ligula, ut molestie eros. Suspendisse euismod ex lorem, eget ultrices ipsum molestie sed. Integer tempus sit amet dolor quis egestas. Nunc porta ante augue, quis vulputate purus sollicitudin quis. Duis ultrices tincidunt aliquet. Proin ex orci, posuere eu pharetra at, pharetra quis ligula. Praesent ut orci convallis, ultrices orci sit amet, blandit orci. Nullam velit libero, fringilla ac sem vel, venenatis commodo urna. Suspendisse tempor lectus magna, nec venenatis ipsum interdum luctus.</p>
            </b-col>
        </b-row>

        <b-row class="mb-2">
            <b-col md="6" class="image-text__image">
                <div :style="{ backgroundImage: 'url(' + img + ')' }"></div>
            </b-col>
            <b-col md="6" class="p-3 py-4 py-md-5 px-md-4 image-text__grey-block">
                <p class="mb-0 text-white size-medium">Maecenas eget lorem sit amet nibh lobortis tincidunt in id dui. Quisque convallis, nisl nec efficitur. Nunc porta ante augue, quis vulputate purus sollicitudin quis. Duis ultrices tincidunt aliquet. Proin ex orci, posuere eu pharetra at, pharetra quis ligula.</p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'ImageTexte',
    props: {
        displayTopBlock: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            img: require('@/assets/img/pingpong1.jpg'),
        }
    },
}
</script>

<style scoped lang="scss">
@import '@/assets/style/_variables.scss';

.image-text {
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
        min-height: 260px;

        @media (min-width: $md) {
            min-height: 560px;
        }

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