<template>
  <div>
    <nuxt-link 
      :to="{name: 'categories-slug', params: {slug: slug}}" 
      tag="a" 
      class="navbar-item">
      <span :class="'tw-ml-' + depth" v-text="name"/>
    </nuxt-link> <!-- end child categories -->
    <TreeList v-for="item in items" :key="item.slug" :items="item.children" :depth="depth + offset" :name="item.name" :slug="item.slug" :offset="2"/>                 
  </div>
</template>
<script>
export default {
 /* eslint-disable */
  props : ['items', 'depth', 'name', 'slug', 'offset'],
  name: 'TreeList',

};
</script>

<style>

</style>
