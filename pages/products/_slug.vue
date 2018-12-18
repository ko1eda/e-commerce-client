<template>
  <div class="columns">
    <div class="column">
      <div class="tw-">
        <p class="tw-text-2xl"> {{ product.name }} </p>
        <hr class="tw-my-2 tw-mx-0 tw-bg-orange-primary tw-h-1 img-width">
        <p class="tw-text-xl"> {{ product.description }} </p>
        <div class="tw-mt-4">
          <img :src="product.image_path">
        </div>
      </div>
    </div><!-- end image column -->
  
    <div class="column">
      <div class="column"/>
      <div class="column"/>
      <div class="column"/>
      <div class="column tw-mt-1"/>
      <div class="tw-px-2">
        <p class="tw-text-xl">Price</p>
        <hr class="tw-my-2 tw-mx-0 tw-bg-grey-light tw-h-1 img-width">
        <span class="tag is-large tw-font-sans tw-rounded-lg tw-bg-green-primary tw-text-white">$ {{ product.price }}</span>
      </div>
      <div class="tw-px-2 tw-mt-20">
        <p class="tw-text-xl">Options</p>
        <hr class="tw-my-2 tw-mx-0 tw-bg-grey-light tw-h-1 img-width">
        <span class="tag is-large tw-font-sans tw-rounded-lg">{{ $route.params.slug }}</span>
      </div>
    </div>
  
  </div>
</template>

<script>
export default {

  data() {
    return {
      product: null // will be bset by asyncData automaically before page loads
    };
  },

  // fetch necessary info with ajax display picture and item details
 async asyncData({params, app}) {
    let {data} = await app.$axios.$get(app.endpoints.products + '/' + params.slug);
    
    return {
      product: data
    };
 }
};
</script>

<style>
  .img-width {
    width: 620px;
  }
</style>
