<template>
  <div class="container">
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
      </div>
  
      <div class="column">
        <div class="column"/>
        <div class="column"/>
        <div class="column"/>
        <div class="column tw-mt-1"/>
        <!-- <div class="column tw-border tw-border-red"/> -->
       
        <div class="tw-px-2">
          <p class="tw-text-xl">Options</p>
          <hr class="tw-my-2 tw-mx-0 tw-bg-grey-light tw-h-1 img-width">
          <div v-text="$route.params.slug"/>
          
        </div>
      </div>
  
    </div>
  </div>
</template>

<script>
export default {
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
