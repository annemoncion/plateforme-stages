<template>
  <b-container fluid class="pingpong my-4">
    <b-row class="pingpong__row" :class="rowReverse">
        <b-col md="6" class="pingpong__content px-2 py-4 p-lg-5">
            <div class="pingpong__text">
                <h2 class="mb-3 pingpong__title"><slot name="title"></slot></h2>
                <slot></slot>
            </div>
        </b-col>
        <b-col md="6" class="pingpong__image px-0">
            <div :style="{ backgroundImage: 'url(' + image + ')' }"></div>
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'PingPong',
  props: {
      imgFirst: Boolean,
      image: String,
  },
  computed: {
      rowReverse() {
          return this.imgFirst ? "pingpong__row--reverse" : "";
      }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/_variables.scss';

.pingpong {
    &__row {
        &--reverse {
            flex-direction: row-reverse;

            .pingpong__content {
                align-items: flex-start;
            }
        }
    }

    &__content {
        background-color: $white-grey;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    }

    &__title {
        font-size: 2.2em;
        font-weight: 700;

        @media (min-width: $md) {
            font-size: 3.2em;
        }
    }

    &__text {
        max-width: 540px;
    }

    &__image {
        position: relative;
        min-height: 260px;

        @media (min-width: $md) {
            min-height: 560px;
        }

        div {
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