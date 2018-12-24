<template>
  <nuxt-link :to="{name: 'products-slug', params: {slug:product.slug}}" tag:="div" class="tw-text-grey-darkest">
    <div class="tw-max-w-xs md:tw-max-w-sm tw-overflow-hidden hover:tw-shadow-lg tw-shadow trans-shadow trans-overlay tw-cursor-pointer tw-border tw-border-grey-light">
      <div :class="['tw-w-full tw-relative', height]">
        <div class="overlay tw-absolute tw-w-full tw-h-full"/>

        <div class="tw-flex tw-justify-center tw-items-center tw-absolute tw-w-full tw-h-full">
          <p class="price tw-text-3xl tw-font-bold tw-text-white" v-text="'$' + product.price"/>
        </div><!-- end overlay screen and price -->

        <img :src="product.image_path" :class="['tw-inline-block tw-max-w-full tw-w-full ', height]">
      </div><!-- end image section -->

      <div class="tw-px-4 tw-leading-tight tw-h-24 tw-flex tw-flex-col tw-justify-center">
        <p class="tw-text-xl xl:tw-text-2xl tw-font-light" v-text="product.name"/>
        <p class="tw-font-light tw-mt-2" v-text="product.description"/>
      </div>
      
    </div><!-- end card -->
  </nuxt-link>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },

  /**
   * 
   * height : this sets the min and max height correctly
   *  for the image part of the card, no matter what the screen size is
   * 
   */
  computed: {
    height() {
      let arr = [];
      
      if (this.gridSize() === 3) {
        arr.push('min-h-400 max-h-400');
      } 
      else {
        // if its size 4, the items are smaller
        arr.push('min-h-300 max-h-300');
      }

      return arr;
    }
  },

  methods: {
    ...mapGetters({
      gridSize: 'gridSize'
    })
  },

};
</script>

<style lang="scss" scoped>
  @import '~bulma/sass/utilities/mixins.sass';

  .trans-shadow {
    transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .overlay {
    z-index: 1;
    background-color: config("colors.grey-dark");
    top: 0px;
    left: 0px;
    opacity: 0;
    transition: opacity .8s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .price {
    z-index: 2;
    position: absolute;
    opacity: 0;
    transition: opacity .8s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  // This sets the opacity on the price
  // and the overlay itself when the parent class is hovered
  .trans-overlay {
    &:hover {
      .overlay {
        opacity: .9;
      }

      div > .price {
        opacity: 1;
      }
    }
  }

  /**
    * Used with height computer property
    * These set the correct min and max height 
    * regardless of screen size 
    * 18.75 rem = 300px
    * 25 rem = 400px
  */
  .min-h-300 {
    min-height: 18.75rem;
  }
  .min-h-400 {
    min-height: 25rem;
    @include mobile {
      min-height: 18.75rem;
    }
  }
  .max-h-300 {
    max-height: 18.75rem;
  }

  .max-h-400 {
    max-height: 25rem;
    @include mobile {
      max-height: 18.75rem;
    }
  }
  // Set the max width of the images to 400
  .max-w {
   @include mobile {
      max-width: 25rem;
    }
  }
  
</style>

