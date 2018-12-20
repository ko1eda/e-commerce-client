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

    <div class="columns is-multiline is-variable is-8">
      <!-- if there are enough products to fit for per column do it, otherwise 3 per column -->
      <div v-for="product in products" :key="product.id" :class="['column md:tw-flex tw-justify-center', grid]">
  
        <div class="tw-max-w-sm tw-overflow-hidden hover:tw-shadow-lg tw-shadow trans tw-cursor-pointer">
          <div class="tw-w-full tw-relative">
            <div class="overlay"/>
  
            <div class="tw-flex tw-justify-center tw-items-center tw-absolute tw-w-full tw-h-full">
              <p class="price tw-text-3xl tw-font-bold tw-text-white" v-text="'$' + product.price"/>
            </div><!-- end overlay screen and price -->
  
            <img :src="product.image_path" class="tw-inline-block tw-max-w-full">
          </div>
    
          <div class="tw-px-4 tw-py-4 tw-leading-tight">
            <p class="tw-text-xl md:tw-text-2xl tw-font-light" v-text="product.name"/>
            <p class="tw-font-light tw-mt-1" v-text="product.description"/>
          </div>
         
        </div><!-- end card -->
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '@/components/Shared/Slider/GridSlider';
import { mapActions, mapGetters } from 'vuex';

export default {
  
  components : {
    Slider
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
  .trans{
    transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

   .trans:hover {
    .overlay {
      transition: opacity .6s cubic-bezier(0.215, 0.61, 0.355, 1);
      opacity: 1;
    }

    div > .price {
      transition: opacity .6s cubic-bezier(0.215, 0.61, 0.355, 1);
      opacity: 1;
    }
  }
 
  .overlay {
    z-index: 1;
    width: 100%;
    height: 99%;
    position: absolute;
    background-color: config('colors.grey-dark');
    top: 0px;
    left: 0px;
    opacity: 0;
  }

  .price {
    z-index: 2;
    position: absolute;
    opacity: 0;
  }
</style>
