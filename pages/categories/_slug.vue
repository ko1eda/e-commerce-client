<template>
  <div class="columns">
    <!-- <div class="column tw-border tw-border-orange">
      <div class="column tw-border tw-border-orange"/>
      <div class="column tw-border tw-border-orange"/>
      <div class="column tw-border tw-border-orange"/>
      <div class="tw-p-6">
        <p class="tw-text-2xl"> Nike Air Max</p>
        <hr class="tw-my-2 tw-bg-grey-light tw-h-1">
        <p class="tw-text-xl"> Cool shoes for a cool dude.</p>
      </div>
    </div>

    <div class="column tw-border tw-border-red">
      <div v-text="$route.params.slug"/>
    </div> -->
    <div v-text="$route.params.slug"/>

  </div>
</template>

<script>
export default {

};
</script>

<style>

</style>
