<template>
  <CartOverview :products="products"/>
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
