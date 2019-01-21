<template>
  <div>
    <div class="tw-bg-grey-light tw-rounded tw-mb-4 tw-p-4 sm:tw-p-12">
      <template v-for="(product, index) in products" >
        
        <div :key="product.id" :class="['tw-flex tw-bg-white tw-w-full tw-px-4 sm:tw-px-8 tw-py-4 tw-rounded ', index === products.length - 1 ? '' : 'tw-mb-4 sm:tw-mb-6']">
          <figure :key="product.id" class="tw-h-32 tw-w-32 tw-overflow-hidden tw-mr-8 sm:tw-flex tw-items-center tw-mt-4 tw-hidden" >
            <img :src="product.image_path" alt="Cart item thumbnail" class="tw-h-full tw-w-full">
          </figure><!-- end image col-->
  
          <div class="tw-w-full">
            <div class="tw-mt-1 tw-text-lg sm:tw-text-xl tw-font-light tw-flex tw-justify-between">
              <p v-text="product.product.name"/>
              <a :title="'Remove ' + product.product.name + ' ' + product.name + ' from cart'" class="delete is-small tw-align-center hover:tw-bg-red-light sm:tw-h-4"/>
            </div>
            <!-- end parent name -->
            <hr class="tw-my-2 tw-mx-0 tw-bg-grey-light tw-h-1 tw-w-full">
            <!-- end parent name divider -->
  
            <div class="tw-mb-4 tw-w-full tw-mb-2">
              <span v-text="product.quantity + 'x ' "/>
              <span class="" v-text="product.name "/>
            </div>
            <!-- end variation name -->
  
            <ProductSelector :product="product"/>
            
            <div class="tw-mt-2 tw-text-lg sm:tw-text-xl tw-flex tw-justify-between tw-items-center tw-font-sans tw-font-light">
              <p v-text="'Item Subtotal:'"/>
              <p v-text="product.total"/>
            </div>
            <!-- end product subtotal row -->
          </div>
          <!--end info col  -->
        </div>
        <!-- end item component -->

      </template><!-- end loop -->
    </div>  
  
    <div class="tw-w-full">
      <button class="button tw-bg-orange-primary tw-text-white tw-w-full">Checkout</button>
    </div>
  </div>
</template>

<script>
import ProductSelector from '@/components/Cart/ProductSelector';
export default {
  components : {
    ProductSelector
  },

  props : {
    products: {
      type: Array,
      required: true
    }
  }

};
</script>

<style>

</style>
