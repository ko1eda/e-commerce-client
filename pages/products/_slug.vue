<template>
  <div class="columns is-variable is-6">
    <div class="column">
      <div class="tw-">
        <p class="tw-text-2xl"> {{ product.name }} </p>
        <hr class="tw-my-2 tw-mx-0 tw-bg-orange-primary tw-h-1 img-width">
        <p class="tw-text-xl"> {{ product.description }} </p>
        <div class="tw-mt-4 ">

          <figure class="image is-4by3">
            <img :src="product.image_path">
          </figure>
          
        </div>
      </div>
    </div><!-- end image column -->
  
    <div class="column ">
      <div class="tw-px-2 lg:tw-mt-12">
        <p class="tw-text-xl">Options</p>
        <hr class="tw-my-2 tw-mx-0 tw-bg-grey-light tw-h-1 img-width">

        <template v-if="product.in_stock">
          <form id="variations-list" action="" class="" >
            <Variation
              v-for="(variations, type) in product.variations"
              :key="type"
              :type="type"
              :variations="variations"
              :selected-type="selectedType"
              @input-variation="handleInputVariation"
              @input-stock="({stock}) => selectedStock = stock"/> <!-- Set the selected stock to the stock paramter emited from event-->
          </form>
        </template><!-- end if the product has any variations in stock -->
        
        <template v-else>
          <div class="tw-mt-4">
            <span class="ck-tag">Out of stock</span>
          </div>
        </template><!-- end v-else; out of stock tag -->

      </div>
    </div><!-- end options column -->
  
  </div>
</template>

<script>
import Variation from '@/components/Product/ProductVariation';

export default {

  components : {
    Variation
  },

  // selectedType: the selected variation option
  // selectedStock: the selected amount of stock 
  data() {
    return {
      product: null,
      selectedType: '',
      selectedStock: 0, 
      selectedVariation: null
    };
  },

  // fetch necessary info with ajax 
 async asyncData({params, app}) {
    let {data} = await app.$axios.$get(app.endpoints.products + '/' + params.slug);
    
    return {
      product: data,
    };
 },

/**
 * displayVariation : pull the variation and its type
 *  off of the event, update the image path of the item with 
 *  any variation image path and update the selected type property.
 * 
 */
  methods : {
    handleInputVariation({ variation, type }) {
      this.selectedVariation = variation; 
      this.selectedType = type; 
      this.product.image_path = variation.image_path;
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
