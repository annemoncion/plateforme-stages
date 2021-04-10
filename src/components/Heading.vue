<template>
<b-container class="heading">
    <b-row>
        <b-col cols="12">
            <h1 class="heading__title mt-2 mt-md-0">
                <slot></slot>
            </h1>
        </b-col>    
    </b-row>
</b-container>
  
</template>

<script>
export default {
  name: 'Heading',
}
</script>

<style scoped lang="scss">
@import '@/assets/style/_variables.scss';

.heading {
    @media (min-width: $md) {
        position: relative;
        top: -48px;
        margin-bottom: -48px;

        &__title {
            color: #fff; 
        }
    }
}
</style>