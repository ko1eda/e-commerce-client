<template>
  <div>
    <div class="field">
      <label class="tw-py-2 tw-inline-block tw-text-lg">{{ type }}</label>
      <div class="control is-expanded">
        <div class="select is-fullwidth" >
          <select v-model="variation" @change="typeof variation !== 'string' && $emit('input-variation', {variation, type}) && resetStock()">
            <option value="" v-text="'Select an option'"/> 
            <!-- default option, by setting the value to '' this will be selected by default when variations is an empty string  -->
            <option v-for="item in variations" :key="item.id" :value="item">
              {{ item.name }}

              <template v-if="! item.hasParentPrice">
                {{ (item.price) }}
              </template>

            </option>
          </select>
        </div>
      </div>
    </div>


    <div v-show="variation" class="field tw-mb-3">
      <label class="tw-py-2 tw-inline-block">Select a quantity</label>
      <div class="field has-addons">
        <div class="control ">
          <div class="select">
            <select v-model="stock" @change="typeof stock !== 'string' && $emit('input-stock', {stock})">
              <option :value="''" v-text="0"/>
              <template v-for="i in variation.current_stock" >

                <template >
                  <option :key="i" :value="i" v-text="i"/>
                </template>
                
              </template>
            </select>
          </div>
        </div>

        <div class="control tw-flex tw-items-center">
          <button type="submit" class="button tw-bg-orange-primary tw-text-white tw-mr-2">Add to cart</button>
          <span class="tw-italic tw-text-sm tw-text-black"> {{ variation.in_stock ? 'in stock' : 'out of stock' }}</span>
        </div>
      </div>

    </div><!-- end quantity selection -->

  </div>
</template>

<script>
export default {
  props : {
    type : {
      required : true,
      type: String 
    },

    variations : {
      type: Array,
      required: true
    },

    selectedType : {
      type: String,
      required: true
    }
  },

  data() {
    return {
      variation: '',
      stock: ''
    };
  },

  /**
   * selectedType: watch the selected type prop
   *  on each of these components
   *  If the variation type changes (aka a variation from another dropdown is chosen)
   *  then reset this variations selection to its default value 
   */
  watch : {
    selectedType : function () {
      if (this.selectedType !== this.type) this.variation = '';
    }
  },

/**
 *  resetStock : reset the stock back to default (0)
 *    after a new variation is selected
 */ 
  methods: {
    resetStock() {
      this.stock = '';
    }
  }

};
</script>

<style>

</style>
