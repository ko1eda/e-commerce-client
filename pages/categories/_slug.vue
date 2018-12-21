<template>
  <div>
    <Slider @slide-left="setGridSize(3)" @slide-right="setGridSize(4)">
      
      <template slot="side-left">
        <template v-if="gridSize() === 3" >
          <span class="tw-text-sm tw-font-bold tw-bg-orange-primary tw-rounded tw-inline-block tw-h-3 tw-w-3 tw-mt-1 tw-mr-1"/>
          <span class="tw-text-sm tw-font-bold tw-bg-orange-primary tw-rounded tw-inline-block tw-h-3 tw-w-3 tw-mt-1 tw-mr-1"/>
          <span class="tw-text-sm tw-font-bold tw-bg-orange-primary tw-rounded tw-inline-block tw-h-3 tw-w-3 tw-mt-1 "/>
        </template>
        <template v-else>
          <span class="tw-text-sm tw-font-bold tw-bg-grey tw-rounded tw-inline-block tw-h-3 tw-w-3 tw-mt-1 tw-mr-1"/>
          <span class="tw-text-sm tw-font-bold tw-bg-grey tw-rounded tw-inline-block tw-h-3 tw-w-3 tw-mt-1 tw-mr-1"/>
          <span class="tw-text-sm tw-font-bold tw-bg-grey tw-rounded tw-inline-block tw-h-3 tw-w-3 tw-mt-1 "/>
        </template>
      </template>


      <template slot="side-right" @slide="setGrid(4)">
        <template v-if="gridSize() === 4">
          <span class="tw-text-sm tw-font-bold tw-bg-orange-primary tw-rounded tw-inline-block tw-h-3 tw-w-3 tw-mt-1 tw-mr-1"/>
          <span class="tw-text-sm tw-font-bold tw-bg-orange-primary tw-rounded tw-inline-block tw-h-3 tw-w-3 tw-mt-1 tw-mr-1"/>
          <span class="tw-text-sm tw-font-bold tw-bg-orange-primary tw-rounded tw-inline-block tw-h-3 tw-w-3 tw-mt-1 tw-mr-1"/>
          <span class="tw-text-sm tw-font-bold tw-bg-orange-primary tw-rounded tw-inline-block tw-h-3 tw-w-3 tw-mt-1 "/>
        </template>
        <template v-else>
          <span class="tw-text-sm tw-font-bold tw-bg-grey tw-rounded tw-inline-block tw-h-3 tw-w-3 tw-mt-1 tw-mr-1"/>
          <span class="tw-text-sm tw-font-bold tw-bg-grey tw-rounded tw-inline-block tw-h-3 tw-w-3 tw-mt-1 tw-mr-1"/>
          <span class="tw-text-sm tw-font-bold tw-bg-grey tw-rounded tw-inline-block tw-h-3 tw-w-3 tw-mt-1 tw-mr-1"/>
          <span class="tw-text-sm tw-font-bold tw-bg-grey tw-rounded tw-inline-block tw-h-3 tw-w-3 tw-mt-1 "/>
        </template>
      </template>
    </Slider>

    <!-- start products grid -->
    <div class="columns is-multiline is-variable is-8">
      <div v-for="product in products" :key="product.id" :class="['column md:tw-flex tw-justify-center', grid]">
        <Product :product="product"/>
      </div><!-- end variable grid with products -->
    </div>
    
  </div>
</template>

<script>
import Slider from '@/components/Shared/Slider/GridSlider';
import  Product from '@/components/Product/Product';
import { mapActions, mapGetters } from 'vuex';

export default {
  components : {
    Slider,
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

    ...mapActions({
      setGridSize: 'setGridSize'
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
