<template>
  <div>
    <div class="columns is-centered tw-mb-8">
      <div class="column">
        <p class="tw-text-2xl tw-font-light tw-text-grey-darker tw-text-center">Log In</p>
      </div>
    </div>

    <div class="columns is-centered">
      <div class="column is-4 tw-text-sm sm:tw-flex sm:tw-justify-center md:tw-block">
        <div class="tw-overflow-hidden tw-border tw-border-grey-light tw-px-8 xl:tw-px-12 tw-py-12">

          <div class="field tw-mb-4">
            <label class="tw-inline-block tw-mb-2">Email</label>
            <p class="control">
              <input class="input" type="email" required>
            </p>
          </div>
    
          <div class="field tw-mb-8">
            <label class="tw-inline-block tw-mb-2">Password</label>
            <p class="control">
              <input class="input" type="password" required>
            </p>
          </div>
    
          <div class="field is-grouped is-grouped-centered">
            <p class="control">
              <button class="tw-bg-orange-primary hover:tw-bg-grey-dark tw-p-2 tw-rounded tw-w-32 tw-text-white">
                Continue
              </button>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

</style>
