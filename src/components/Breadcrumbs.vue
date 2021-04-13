<template>
  <!-- Merci à https://github.com/iFgR/vue-breadcrumbs -->
  <div class="breadcrumbs">
    <ul class="breadcrumbs__list">
      <li
        v-for="(breadcrumb, idx) in breadcrumbList"
        :key="idx"
        @click="routeTo(idx)"
        class="breadcrumbs__item"
        :class="{'breadcrumbs__item--linked': !!breadcrumb.link}">

        {{ breadcrumb.name }}

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  data () {
    return {
      breadcrumbList: []
    }
  },
  mounted () { this.updateList() },
  watch: { '$route' () { this.updateList() } },
  methods: {
    routeTo (pRouteTo) {
      if (this.breadcrumbList[pRouteTo].link) this.$router.push(this.breadcrumbList[pRouteTo].link)
    },
    updateList () { this.breadcrumbList = this.$route.meta.breadcrumb }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/_variables.scss';

.breadcrumbs {
    margin-bottom: calc(24px + 3px); // Compenser pour la hauteur du titre des filtres

    &__list {
        display: flex;
        justify-content: flex-start;
        list-style-type: none;
        margin: 0;
        padding: 0;
        line-height: 1.2;
    }

    &__item {
        display: flex;
        width: auto;
        color: $grey-dark;
        font-size: 1.1em;
        cursor: default;
        align-items: center;
        margin: 0 4px;
        &:before {
          display: none;
        }
    }

    &__item--linked {
        cursor: pointer;
        font-size: 1em;
        font-weight: normal;
        &:hover {
            color: $fushia;
        }
    }

    &__item:not(:last-child)::after {
        content: '>';
        font-size: 1.1em;
        display: block;
        padding-left: 8px;
        color: $grey-dark;
    }
}
</style>