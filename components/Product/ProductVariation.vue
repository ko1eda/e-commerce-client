<template>
  <div class="field">
    <label class="tw-py-2 tw-inline-block tw-text-lg">{{ type }}</label>
    <div class="control is-expanded">
      <div class="select is-fullwidth" >
        <select v-model="variation" @change="$emit('option-clicked', {variation})">
          <option value="Select an option" v-text="'Select an option'"/>
          <template v-for="variation in variations" >
          
            <template v-if="! variation.hasParentPrice">
              <option :key="variation.id" :value="variation" v-text="variation.name + ' ' + variation.price"/>
            </template><!-- display the price alongside if it is different than the parent -->

            <template v-else>
              <option :key="variation.id" :value="variation" v-text="variation.name" />
            </template>

          </template>
        </select>
      </div>
    </div>
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
    }
  },

  data() {
    return {
      variation: 'Select an option'
    };
  },

};
</script>

<style>

</style>
