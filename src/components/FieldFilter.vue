<template>
    <div class="filter">
        <h5 class="filter__title">
            <span class="filter__title-text">Secteurs d'activité</span>
            <span class="filter__dash"></span>
        </h5>

        <ul class="filter__list">
            <li
                class="filter__item filter__item--no-filter" 
                :class="[{'filter__item--is-active' : noActiveFilter}, {'filter__item--hidden' : disabled}]"
                @click="clearFilter()">
                    <strong>Tous les secteurs</strong>
            </li>
            <li
                v-for="field, k in fields" 
                :key="k"
                class="filter__item" 
                :class="[{'filter__item--is-active' : field.isActive}, {'filter__item--disabled' : disabled}]"
                @click="activateFilter(k)">
                    {{field.title}}
            </li>
        </ul>


    </div>
</template>

<script>
export default {
  name: 'FieldFilter',
  props: {
      disabled: {
          type: Boolean,
          default: false
      },
      currentField: {
          type: String,
          default: '',
      }
  },
  data() {
      return {
          loading: true,
          noFilter: true,
      }
  },
  computed: {
    fields: {
      //return this.$store.state.fields
        get(){
            return this.$store.state.fields
        },
        set(newFields){
            return newFields
        }
    },
    noActiveFilter () {
        return this.disabled ? false : this.noFilter     
    },
  },
  created () {
    this.loading = true
    this.$store.dispatch('fetchFields')
      .then(() => {
        this.loading = false
      })
  },
  mounted () {
    if (this.fields.length > 0) {
        this.matchField();
    }
  },
  watch: {
    fields: function (change) {
        // binding this to the data value in the codePostal input
        this.fields = change

        if (change) {
            this.matchField();    
        }
    } 
  },
  methods: {
    activateFilter(index) {
        if (!this.disabled) {
            for (let i = 0; i < this.fields.length; i++) {
                this.fields[i].isActive = false;
            }
            this.noFilter = false;
            this.fields[index].isActive = true;
            this.$emit('filter-data', this.fields[index].title);
        }     
      },
    clearFilter() {
        if (!this.disabled) {
            for (let i = 0; i < this.fields.length; i++) {
                this.fields[i].isActive = false;
            }
            this.noFilter = true;
            this.$emit('filter-data', '');
        }
    },
    matchField() {
        if (this.currentField.length > 0) {
            let currentFieldIndex = this.fields.findIndex(x => x.title == this.currentField)
            this.fields[currentFieldIndex].isActive = true;   
        }
        else {
            for (let i = 0; i < this.fields.length; i++) {
                this.fields[i].isActive = false;
            }
        }     
    }
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

        &:hover:not(.filter__item--disabled),
        &--is-active:not(.filter__item--disabled) {
            background-color: $purple;
            color: $white;
            cursor: pointer;
        }

        &--is-active {
            background-color: $purple;
            color: $white;
            border-left: 6px solid $fushia;
        }

        &--no-filter {
            color: $purple;
            font-size: 1.1em;
        }

        &--hidden {
            display: none;
        }
    }


}
</style>