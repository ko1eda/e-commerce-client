<template>
  <div>
    <Navbar/>
    <div class="tw-px-8 tw-py-8 lg:tw-p-12">
      <div class="container">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navigation/Navbar';

export default {
  components: {
    Navbar
  },
};
</script>