<template>
  <b-container class="my-4">
      <b-row>
            <b-col cols="12">
              <b-img fluid-grow :src="pub" />
            </b-col>
      </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Pub',
  data() {
    return {
        pub: require('@/assets/img/placeholder.jpg'),
    }
  },
}
</script>

<style scoped lang="scss">
</style>