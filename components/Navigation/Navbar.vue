<template>
  <nav class="navbar shadow tw-border-b tw-px-4 xl:tw-px-32">
    <div class="navbar-brand">
      <nuxt-link :to="{name: 'index'}" tag="a" class="navbar-item">
        <div class="tw-relative">
          <div class="tw-rounded-full tw-border tw-border-grey-darker tw-w-16 tw-h-16 tw-mr-32 "/>
          <p class="logo-text tw-text-2xl">The Market</p>
        </div>
      </nuxt-link>
      <div class="navbar-burger burger hover:tw-bg-transparent" data-target="">
        <span/>
        <span/>
        <span/>
      </div>
    </div>

    <div id="" class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link :to="{name: 'index'}" tag="a" class="navbar-item" v-text="'Home'" />
        
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Categories</a>
          <div class="navbar-dropdown is-boxed">
            <nuxt-link 
              v-for="(category, index) in categories" 
              v-if="category.children.length"
              :key="category.children[index].slug" 
              :to="{name: 'categories-slug', params: {slug: category.children[index].slug}}" 
              tag="a" 
              class="navbar-item">
              <span class="tw-ml-2" v-text="category.children[index].name"/>
            </nuxt-link> <!-- end child categories -->
            
            <nuxt-link 
              v-for="category in categories" 
              v-else
              :key="category.slug" 
              :to="{name: 'categories-slug', params: {slug: category.slug}}" 
              tag="a" 
              class="navbar-item" 
              v-text="category.name"/>
          </div>
        </div><!-- end Categories drop down -->
      </div><!-- end navbar start -->

      <div class="navbar-end">

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Username</a>
          <div class="navbar-dropdown is-boxed">
            <a class="navbar-item" href="#">Order History</a>
            <hr class="navbar-divider">
            <a class="navbar-item" href="#">Sign out</a>
          </div>
        </div>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Cart</a>
          <div class="navbar-dropdown is-boxed">
            <a class="navbar-item" href="#">Item 1</a>
            <hr class="navbar-divider">
            <a class="navbar-item" href="#">Total: $15.99</a>
          </div>
        </div>

      </div>
    </div>
  </nav>
</template>

<script>
import {mapGetters} from 'vuex';
export default {

  computed : {
    ...mapGetters({
      categories : 'categories' 
    })
  },

};
</script>

<style lang="scss" scoped>
.shadow {
  box-shadow: 0px -1px 25px rgba(0, 0, 0, 0.1);
}

.logo-text {
  position: absolute;
  top: 14px;
  left: 16px;
}
</style>
