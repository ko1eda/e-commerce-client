<template>
  <div class="tw-max-w-sm tw-overflow-hidden hover:tw-shadow-lg tw-shadow trans-shadow trans-overlay tw-cursor-pointer">
    <div class="tw-w-full tw-relative">
      <div class="overlay"/>

      <div class="tw-flex tw-justify-center tw-items-center tw-absolute tw-w-full tw-h-full">
        <p class="price tw-text-3xl tw-font-bold tw-text-white" v-text="'$' + product.price"/>
      </div>
      <!-- end overlay screen and price -->
      <img :src="product.image_path" class="tw-inline-block tw-max-w-full">
    </div>

    <div class="tw-px-4 tw-py-4 tw-leading-tight">
      <p class="tw-text-xl md:tw-text-2xl tw-font-light" v-text="product.name"/>
      <p class="tw-font-light tw-mt-1" v-text="product.description"/>
    </div>
  </div><!-- end card -->
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.trans-shadow {
  transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
}

// This sets the opacity on the price
// and the overlay itself when the parent class is hovered
.trans-overlay {
  &:hover {
    .overlay {
      opacity: 1;
    }

    div > .price {
      opacity: 1;
    }
  }
}

.overlay {
  z-index: 1;
  width: 100%;
  height: 99%;
  position: absolute;
  background-color: config("colors.grey-dark");
  top: 0px;
  left: 0px;
  opacity: 0;
  transition: opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.price {
  z-index: 2;
  position: absolute;
  opacity: 0;
  transition: opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
</style>

