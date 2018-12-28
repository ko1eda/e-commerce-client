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

        <form id="variations-list" action="" class="" >
          <Variation
            v-for="(variations, type) in product.variations"
            :key="type"
            :type="type"
            :variations="variations"
            :selected-type="selectedType"
            @input-variation="displayVariation"
            @input-stock="( {stock} ) => selectedStock = stock"/> <!-- Set the selected stock to the stock paramter emited from event-->
        </form>
      </div>
    </div><!-- end options column -->
  
  </div>
</template>

<script>
import  Variation from '@/components/Product/ProductVariation';

export default {

  components : {
    Variation
  },

  // selectedType: the selected variation option
  data() {
    return {
      originalProduct: null,
      product: null,
      selectedType: '',
      selectedStock: 0
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
    displayVariation({ variation, type }) {
      this.selectedType = type; 
      // if (variation === 'Select an option') {
      //   this.product = {...this.originalProduct};
      // } else {
      //   this.product.price = variation.price;
      //   this.product.image_path = variation.image_path;
      //   // this.product.name = this.originalProduct.name + ' ' + variation.name;
      // }
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
