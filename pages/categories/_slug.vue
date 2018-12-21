<template>
  <div class="columns is-multiline is-variable">
    <div v-for="product in products" :key="product.id" :class="['column tw-flex tw-justify-center', grid]">
      <Product :product="product"/>
    </div><!-- end variable grid with products -->
  </div>
</template>

<script>
import  Product from '@/components/Product/Product';
import { mapGetters } from 'vuex';

export default {
  components : {
    Product
  },

  data() {
    return {
      products: null,

    };
  },

  /**
   * Sets the size of each column in the grid
   * to either 3 or 4 depending on the muber of blocks desired.
   */
  computed: {
    grid() {
      // if you want 3 blocks, then grid size is 4
      if(this.gridSize() === 3) {
        return 'is-4';
      }

      // if you want 4 blocks then grid size is 3 (smaller)
      return 'is-3';
    },
  },

  methods: {
    ...mapGetters({
      gridSize: 'gridSize' 
    }),
  },

  // fetch necessary info with ajax display picture and item details
 async asyncData({params, app}) {
    let {data} = await app.$axios.$get(app.endpoints.products + '/?category=' + params.slug);
    
    return {
      products: data
    };
 }
};
</script>

<style lang="scss" scoped>

</style>
