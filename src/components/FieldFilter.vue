<template>
    <div class="filter">
        <h5 class="filter__title">
            <span class="filter__title-text">Secteurs d'activité</span>
            <span class="filter__dash"></span>
        </h5>

        <ul class="filter__list">
            <li
                class="filter__item filter__item--no-filter" 
                :class="{'is-active' : noActiveFilter}"
                @click="clearFilter()">
                    <strong>Tous les secteurs</strong>
            </li>
            <li
                v-for="field, k in fields" 
                :key="k"
                class="filter__item" 
                :class="{'is-active' : field.isActive}"
                @click="activateFilter(k)">
                    {{field.title}}
            </li>
        </ul>


    </div>
</template>

<script>
export default {
  name: 'FieldFilter',
  data() {
      return {
          loading: false,
          noFilter: true,
      }
  },
  computed: {
    fields () {
      return this.$store.state.fields
    },
    noActiveFilter () {
        return this.noFilter
    }
  },
  created () {
    this.loading = true
    this.$store.dispatch('fetchFields')
      .then(() => {
        this.loading = false
      })
  },
  methods: {
      activateFilter(index) {
          for (let i = 0; i < this.fields.length; i++) {
              this.fields[i].isActive = false;
          }
          this.noFilter = false;
          this.fields[index].isActive = true;
          this.$emit('filter-data', this.fields[index].title);
      },
      clearFilter() {
          for (let i = 0; i < this.fields.length; i++) {
              this.fields[i].isActive = false;
          }
          this.noFilter = true;
          this.$emit('filter-data', '');
      },
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/_variables.scss';

.filter {

    &__title {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
    }

    &__title-text {
        flex-shrink: 0;
        margin-right: 8px;
    }
    
    &__dash {
        height: 6px;
        width: 100%;
        background-color: $grey-medium;
        flex-grow: 1;
        position: relative;
        top: 4px;
    }

    &__list {
        list-style-type: none;
        padding-left: 0;
    }

    &__item {
        background-color: $white-grey;
        border-left: 6px solid $grey-light;
        border-bottom: 1px solid $grey-light;
        margin-bottom: 1px;
        padding: 12px;
        font-size: 0.9em;
        font-weight: 600;
        -webkit-transition: background-color 0.2s ease, color 0.1s ease;
        -moz-transition: background-color 0.2s ease, color 0.1s ease;
        -o-transition: background-color 0.2s ease, color 0.1s ease;
        transition: background-color 0.2s ease, color 0.1s ease;

        &:before {
            display: none;
        }

        &:hover,
        &.is-active {
            background-color: $purple;
            color: $white;
            cursor: pointer;
        }

        &.is-active {
            border-left: 6px solid $fushia;
        }

        &--no-filter {
            color: $purple;
            font-size: 1.1em;
        }
    }


}
</style>