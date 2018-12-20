<template>
  <div class="tw-w-100 tw-flex tw-justify-end tw-mb-6">
    <div class="tw-w-48 tw-px-2 tw-flex tw-justify-between tw-items-center">

      <div class="tw-flex tw-items-center tw-h-full">
        <slot :toggle-left="toggleLeft" :toggle-right="toggleRight" name="side-left"/>
      </div>
      <!-- end left side toggle -->

      <div class="tw-border tw-w-12 tw-h-6 tw-rounded-full tw-flex tw-items-center tw-bg-grey-light " @click="toggle">
        <span :style="sliderStyles" class="tw-rounded-full tw-border tw-bg-grey tw-border-grey-dark tw-h-6 tw-w-6 tw-inline-block tw-cursor-pointer"/>
      </div>
      <!-- end slider -->

      <div class="tw-flex tw-items-center tw-h-full">
        <slot :toggle-left="toggleLeft" :toggle-right="toggleRight" name="side-right"/>
      </div>
      <!-- end right side toggle -->
    </div>
    <!-- end outer space between div holding block symbols and button in center -->
  </div>
</template>

<script>
import SliderMixin from '@/components/Shared/Slider/Slider.js';

export default {
  mixins: [SliderMixin],

  // Set the starting side based on the global gridSize or the StartLeft value
  created() {
    let left = this.$store.getters.gridSize === 3 ? true : false;

    if (!left && !this.startLeft) left = false;

    this.isLeft = left;
  },

};
</script>

<style lang="scss" scoped>

</style>
