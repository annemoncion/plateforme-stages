<template>
  <b-container fluid class="pingpong my-4">
    <b-row class="pingpong__row" :class="rowReverse">
        <b-col md="6" class="pingpong__content p-5">
            <div class="pingpong__text">
                <h2 class="mb-3 pingpong__title"><slot name="title"></slot></h2>
                <slot></slot>
            </div>
        </b-col>
        <b-col md="6" class="pingpong__image px-0">
            <slot name="image"></slot>
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'PingPong',
  props: {
      imgFirst: Boolean,
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
        font-size: 3.2em;
        font-weight: 700;
    }

    &__text {
        max-width: 540px;
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