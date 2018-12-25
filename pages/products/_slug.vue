<template>
  <div class="columns is-variable is-6">
    <div class="column">
      <div class="tw-">
        <p class="tw-text-2xl"> {{ product.name }} </p>
        <hr class="tw-my-2 tw-mx-0 tw-bg-orange-primary tw-h-1 img-width">
        <p class="tw-text-xl"> {{ product.description }} </p>
        <div class="tw-mt-4 ">
          <!-- align the image center on ipad size and make sure it isnt stretching down the y axis with flex-items-start -->
          <figure class="image is-4by3">
            <img :src="product.image_path">
          </figure>
        </div>
      </div>
    </div><!-- end image column -->
  
    <div class="column tw-flex tw-flex-col tw-justify-between tw-items-center ">
      <div class="tw-px-2 tw-mt-8 lg:tw-mt-16">
        <p class="tw-text-xl">Options</p>
        <hr class="tw-my-2 tw-mx-0 tw-bg-grey-light tw-h-1 img-width">
        <!-- <span class="tag is-large tw-font-sans tw-rounded-lg">{{ $route.params.slug }}</span> -->

  
        <div id="variations-list" class="tw-mb-2" >
          <Variation
            v-for="(variations, type) in product.variations"
            :key="type"
            :type="type"
            :variations="variations"
            @option-clicked="displayVariation"/>
        </div>
      </div>

      <div class="">
        <button class="button tw-w-48 hover:tw-shadow tw-shadow-inner tw-font-sans tw-bg-orange tw-font-semibold tw-text-white">Checkout {{ product.price }}</button>
      </div>
   
    </div>
  
  </div>
</template>

<script>
import  Variation from '@/components/Product/ProductVariation';

export default {

  components : {
    Variation
  },

  data() {
    return {
      originalProduct: null,
      product: null,
    };
  },

  // fetch necessary info with ajax display picture and item details
  // create two new distinct data objects using the spread operator
 async asyncData({params, app}) {
    let {data} = await app.$axios.$get(app.endpoints.products + '/' + params.slug);
    
    return {
      originalProduct: {...data},
      product: {...data},
    };
 },

  methods : {
    displayVariation({ variation }) {
      if (variation === 'Select an option') {
        this.product = {...this.originalProduct};
      } else {
        this.product.price = variation.price;
        this.product.image_path = variation.image_path;
        this.product.name = this.originalProduct.name + ' ' + variation.name;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/mixins.sass';
  .img-width {
      width: 100%;
    
     @include desktop {
        width: 640px;
     }
  }
</style>
