<template>
  <div class="banner" :class="big" :style="{ backgroundImage: 'url(' + bannerImage + ')' }">
      <div class="banner__filter"></div>
      <b-container>
          <b-row>
              <b-col offset-lg="3" lg="6">
                    <h2 class="banner__title">Trouvez votre stage!</h2>

                    <b-input-group class="banner__search">
                        <b-form-input class="banner__input" placeholder="Mot clé"></b-form-input>
                        <b-input-group-append class="banner__container-btn">
                            <b-button class="banner__btn">
                                <div class="banner__btn-filter"></div>
                                Rechercher
                            </b-button>
                        </b-input-group-append>
                    </b-input-group>
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
      isBig: Boolean,
  },
  data() {
      return {
          imageBig: require('@/assets/img/banner-big.jpg'),
          imageSmall: require('@/assets/img/banner-small.jpg'),
      }
  },
  computed: {
      big() {
          return this.isBig ? "banner--big" : "";
      },
      bannerImage() {
          return this.isBig ? this.imageBig : this.imageSmall;
      }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/_variables.scss';

.banner {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 50vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &--big {
        height: 100vh;

        .banner__search {
            margin-top: 60px;
        }
    }

    &__filter {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #000;
        opacity: 0.3;
    }

    &__title {
        font-weight: 600;
        color: #fff;
        text-align: center;
        font-size: 2.5em;
    }

    &__search {
        background-color: $white;
        padding: 2px;
        margin-top: 16px;
        &:focus-within {
            -webkit-box-shadow: 0px 0px 10px 2px rgba(var(--purple-rgb),0.3); 
            box-shadow: 0px 0px 10px 2px rgba(var(--purple-rgb),0.3);
        }
    }

    &__input {
        border: 0;
        outline: 0;
        border-radius: 0;
        padding-left: 24px;
        font-size: 0.8em;
        align-self: center;
        position: relative;
        left: -2px;

        &:focus {
            outline: 0;
            -webkit-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0); 
            box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
        }
    }

    &__btn {
        border-radius: 0;
        font-size: 0.8em;
        padding: 12px 40px;
        border: 0;
        background: $purple;
        background: linear-gradient(90deg, rgba(var(--purple-rgb),1) 0%, rgba(var(--fushia-rgb),1) 100%);
        transition: background-position 0.2s ease;

        &:hover, &:focus {
            border: 0;
            border-radius: 0;
            .banner__btn-filter {
                opacity: 1;
            }
            
        }
    }

    &__btn-filter {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: $purple;
        opacity: 0;
        transition: opacity 0.4s ease;
        z-index: -1;
    }
}
</style>