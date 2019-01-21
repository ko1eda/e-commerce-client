<template>
  <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-item">
      <div class="tw-relative">
        <i class="fas fa-shopping-cart tw-text-grey-dark"/>
      </div>
    </a><!-- end cart icon -->

    <div v-if="uniqueItems !== 0" 
         class="badge-pos tw-rounded-full badge-size tw-bg-orange-primary tw-shadow tw-text-sm tw-text-white tw-absolute tw-flex tw-items-center tw-justify-center"
         v-text="uniqueItems"/>
    <!-- end items badge -->

    <div class="navbar-dropdown is-boxed is-right cart-width tw-font-sans">
      <a v-for="product in products" :key="product.id" class="navbar-item is-expanded tw-mb-4">
        <div class="tw-flex tw-items-center tw-w-full">

          <figure class="tw-h-12 tw-w-12 tw-overflow-hidden tw-mr-4 tw-flex tw-items-center">
            <img :src="product.image_path" alt="Cart item thumbnail">
          </figure><!-- end image row-->

          <div class="tw-w-full">
            <p class="tw-text-sm tw-mb-1" v-text="product.product.name"/>

            <div class="tw-flex tw-justify-between tw-text-sm">
              <span class="" v-text="product.quantity + 'x ' + product.name"/>
              <span class="" v-text="product.total"/>
            </div><!-- end quantity and total row -->

          </div><!-- end Name row -->
        </div>
      </a>

      <hr class="navbar-divider">
      <nuxt-link :to="{name: 'cart'}" tag="a" class="navbar-item tw-flex tw-justify-center tw-font-sans tw-text-lg tw-font-light tw-px-0" href="#">Open Cart</nuxt-link>
    </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
 computed : {
    ...mapGetters({
      uniqueItems : 'cart/uniqueItems',
      products : 'cart/products'
    })
  },
};

</script>

<style lang="scss" scoped>

.badge-size {
  height: 1.1rem;
  width: 1.1rem;
}

.badge-pos {
  top: 28px;
  left: 23px;
}

.cart-width {
  max-width: 400px;
}
</style>
