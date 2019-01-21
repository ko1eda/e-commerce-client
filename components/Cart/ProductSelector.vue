<template>
  <div>
    <div v-show="!update" class="tw-cursor-pointer tw-mb-4 tw-text-sm" @click="update = true" >
      <i class="tw-text-grey-dark fas fa-edit"/>
      <span v-text="'Edit Quantity?'"/>
    </div>
    <div v-show="update" class="field tw-mb-4">
      <div class="field has-addons">
        <div class="control ">
          <div class="select is-small">
            <select v-model="stock" @change="typeof stock !== 'string' && $emit('input-stock', {stock})">
              <template v-for="i in product.current_stock" >
  
                <template>
                  <option :key="i" :value="i" v-text="i"/>
                </template>
  	              
              </template>
            </select>
          </div>
        </div>
        <!-- end quantity selector -->
  
        <div class="control tw-flex tw-items-center">
          <button type="submit" class="button tw-bg-orange-primary tw-text-white tw-mr-2 is-small">Update</button>
          <span class="tw-italic tw-text-sm tw-text-black"> {{ product.total_stock === 1 ? 'Only 1 left' : product.in_stock ? 'In stock' : 'Out of stock' }}</span>
        </div>
      </div>
      <!-- end quantity selection button -->
  
    </div><!-- end quantity selection -->
  </div>
</template>

<script>
export default {
  props: {
    product : {
      type: Object,
      required: true
    }
  },


  data() {
    return {
      stock: this.product.quantity,
      update: false
    };
  }


};
</script>

<style>

</style>
