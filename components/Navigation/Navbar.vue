<template>
  <nav class="navbar tw-border-b tw-px-4 xl:tw-px-20 is-fixed-top">
    <div class="navbar-brand">
      <nuxt-link :to="{name: 'index'}" tag="a" class="navbar-item tw-px-0 tw-text-orange-primary">
        <div class="tw-relative">
          <div class="tw-rounded-full tw-border tw-border-grey-darker tw-w-16 tw-h-16 tw-mr-32 "/>
          <p class="logo-text tw-text-2xl tw-font-semibold">The Market</p>
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
            <template v-for="(category, index) in categories">
              <template v-if="category.children"><!-- if a category has children, create them recusrively, else just print them normally -->
                <TreeList 
                  :key="index"
                  :items="category.children" 
                  :offset="2" 
                  :depth="0"
                  :route-name="'categories-slug'"
                  :name="category.name" 
                  :slug="category.slug"/>
              </template>
              <template v-else>
                <nuxt-link
                  :key="index"
                  :to="{name: catgory.name, params: {slug: category.slug}}" 
                  tag="a" 
                  class="navbar-item">
                  <span v-text="category.name"/>
                </nuxt-link>
              </template>
            </template>
          </div>
        </div><!-- end Categories drop down -->
      </div><!-- end navbar start -->

      <div class="navbar-end"> 
        <template v-if="$auth.loggedIn !== true">
          <nuxt-link :to="{name: 'login', path: '/login'}" class="navbar-item">
            Sign in
          </nuxt-link>
        </template><!-- end sign in link -->

        <template v-else>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> {{ $auth.user.name }} </a>
  
            <div class="navbar-dropdown is-boxed is-right ">
              <a class="navbar-item" href="#">Order History</a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="#">Sign out</a>
            </div>
          </div>


          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-item"><i class="fas fa-shopping-cart tw-text-grey-dark"/></a>
            <div class="navbar-dropdown is-boxed is-right">
              <a class="navbar-item" href="#">Item 1</a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="#">Total: $15.99</a>
            </div>
          </div>
        </template><!-- end logged in menu -->

      </div>

    </div>
  </nav>
</template>

<script>
import {mapGetters} from 'vuex';
import TreeList from './NestedDropdown';
export default {
  components : {
    TreeList
  },
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
