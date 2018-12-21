<template>
  <div>
    <Navbar/>
    <div class="tw-px-8 tw-py-8 lg:tw-p-10">
      <div class="container">
        <ControlBar/>
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navigation/Navbar';
import ControlBar from '@/components/ControlBar/ControlBar';

export default {
  components: {
    Navbar,
    ControlBar
  },
};
</script>