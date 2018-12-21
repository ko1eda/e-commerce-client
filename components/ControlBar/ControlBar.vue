<template>
  <div class="tw-w-100 tw-mb-6 md:tw-mb-8 tw-flex tw-justify-between tw-items-center">
    <nav class="breadcrumb tw-mb-0 tw--ml-2" aria-label="breadcrumbs">
      <ul class="tw-pl-0">
        <template v-for="(breadcrumb, index) in breadcrumbs" >
          <template v-if="index !== breadcrumbs.length - 1">
            <li :key="index" >
              <nuxt-link :to="path(index)" tag="a" v-text="breadcrumb"/>
            </li>
          </template>

          <template v-else>
            <li :key="index" class="is-active">
              <a v-text="breadcrumb"/>
            </li>
          </template>
        </template>
      </ul>
    </nav>
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
      breadcrumbs: this.$route.path.split('/'),
    };
  },
  /**
   * Watch the route path and if it changes, change the breadcrumbs to match
   * 
   * Note: watcher will cause the initial component render
   *  to re-render because it updates the state of breadcrumbs
   *  on the initial render (because the initial render changes the path)
   *  as far as I can tell this cannot be helped
   */
  watch: {
    '$route.path': function () {
      this.breadcrumbs = this.$route.path.split('/');
    }
  },

  methods: {
    ...mapGetters({
      gridSize: 'gridSize' 
    }),

    ...mapActions({
      setGridSize: 'setGridSize'
    }),
    
    /**
     * Returns the reduced string
     * of every path up until the index
     * so if breadcrumbs = [items,categories,shoes]
     * then the first path would be /items
     * then /items/categories etc tc 
     * 
     */
    path(index) {
      return this.breadcrumbs.slice(index, index + 1).reduce((prev, next) => {
        return prev + '/' + next;
      }, '');
    } 
  },
};
</script>
