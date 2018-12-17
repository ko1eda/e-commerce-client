<template>
  <div>
    <Navbar/>
    <div class="tw-p-4 xl:tw-p-12">
      <nuxt/>
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