<template>
  <div>
    <Navbar/>
    <div class="tw-px-8 tw-py-12 xl:tw-p-12">
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