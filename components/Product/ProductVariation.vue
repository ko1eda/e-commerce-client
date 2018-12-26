<template>
  <div>
    <div class="field">
      <label class="tw-py-2 tw-inline-block tw-text-lg">{{ type }}</label>
      <div class="control is-expanded">
        <div class="select is-fullwidth" >
          <select v-model="variation" @change="typeof variation !== 'string' && $emit('input', {variation, type})">
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
            <select name="country">
              <option :value="1">1</option>
              <option :value="2">2</option>
              <option :value="3">3</option>
              <option :value="4">4</option>
            </select>
          </div>
        </div>

        <div class="control">
          <button type="submit" class="button tw-bg-orange-primary tw-text-white">Add to cart</button>
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

  methods: {}

};
</script>

<style>

</style>
