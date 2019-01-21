<template>
  <div class="tw--mt-4">
    <h1 class="tw-text-2xl tw-font-light tw-mb-4" v-text="$auth.user.name + '\'s' + ' Cart:'"/>
    <CartOverview :products="products"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CartOverview from '@/components/Cart/CartOverview';

export default {
  components: {
    CartOverview
  },

  computed : {
    ...mapGetters({
      'products' : 'cart/products'
    })
  }

};
</script>

<style lang="scss" scoped>

</style>
