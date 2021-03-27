<template>
<b-container class="heading">
    <b-row>
        <b-col cols="12">
            <h1 class="heading__title">
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
.heading {
    position: relative;
    top: -48px;
    &__title {
       color: #fff; 
    }
}
</style>