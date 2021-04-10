<template>
    <div>
        <Banner :isBig="false" />

        <Heading>Politiques de confidentialité</Heading>

        <b-container>
            <b-row class="my-2 my-md-4">
                <b-col offset-md="2" md="8">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lorem sit amet nibh lobortis tincidunt in id dui. Quisque convallis, nisl nec efficitur ultricies, lectus odio volutpat magna, vel ultricies metus justo in elit. Nunc sit amet dictum ligula, quis rhoncus ipsum. Aenean dui lacus, fermentum et mauris sit amet, vehicula condimentum dui. Phasellus molestie metus sit amet lectus maximus, vel laoreet felis dictum. Nullam commodo elementum convallis. Suspendisse aliquet purus sollicitudin vestibulum blandit. Sed varius augue nec vulputate ornare. Quisque in augue vel ipsum varius porttitor id non leo.</p>
                    <p>Sed vitae nisl sollicitudin enim porttitor maximus in quis purus. In rutrum fermentum quam eget venenatis. Vivamus imperdiet ultricies ante, non sagittis felis pellentesque ut. Integer ullamcorper risus purus, id lobortis nunc porta tincidunt. Curabitur eget justo eget turpis sodales egestas nec sit amet orci. Vestibulum vitae tincidunt nunc. Maecenas consectetur aliquet aliquam. Aenean iaculis sapien ipsum, in pretium odio dignissim quis. Quisque auctor neque vel convallis maximus.</p>
                    <p>Duis condimentum lacus vel velit congue, nec cursus erat ornare. Integer congue augue leo, et dignissim eros euismod vel. Vivamus ac finibus massa, at faucibus turpis. Sed in convallis ligula, ut molestie eros. Suspendisse euismod ex lorem, eget ultrices ipsum molestie sed. Integer tempus sit amet dolor quis egestas. Nunc porta ante augue, quis vulputate purus sollicitudin quis. Duis ultrices tincidunt aliquet. Proin ex orci, posuere eu pharetra at, pharetra quis ligula. Praesent ut orci convallis, ultrices orci sit amet, blandit orci. Nullam velit libero, fringilla ac sem vel, venenatis commodo urna. Suspendisse tempor lectus magna, nec venenatis ipsum interdum luctus. Maecenas risus augue, eleifend quis lectus id, malesuada cursus tortor. Maecenas sed erat a sapien pulvinar dictum ac ut nisl.</p>
                    <p>Aenean et est nibh. Pellentesque at lacus ante. Aenean sed metus a libero vehicula commodo a vel nunc. Cras eget vehicula lectus, non mollis mi. Quisque nec sapien tellus. Vestibulum congue ut risus ut tincidunt. Cras convallis, neque eu maximus mattis, arcu ante viverra leo, a malesuada felis ex at lorem. Integer porta auctor ligula et interdum. Nunc aliquam aliquam ante. Ut sit amet eleifend nisi, ut varius turpis. Nam bibendum efficitur risus. Proin sit amet est mollis, blandit libero consequat, porttitor nibh. Duis massa elit, posuere a tortor sed, fermentum tristique dui.</p>
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
    name: 'PolitiqueConfidentialite',
    components: {
        Banner,
        Heading,
        Pub,
    },
}
</script>

<style scoped lang="scss">
@import '@/assets/style/_variables.scss';
</style>