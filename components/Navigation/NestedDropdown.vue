<template>
  <div>
    <nuxt-link 
      :to="{name: routeName, params: {slug: slug}}" 
      tag="a" 
      class="navbar-item">
      <span :class="'tw-ml-' + depth" v-text="name"/>
    </nuxt-link>
    
    <TreeList v-for="item in items" :key="item.slug" :items="item.children" :depth="depth + offset" :name="item.name" :slug="item.slug" :offset="2"/>                 
  </div>
</template>

<script>
/**
 * Recursive dropdown item that can be used in a navbar
 * 
 * offset is set to 0 on the initial call, this is so that the first item will not
 * start at a different depth than other root items. all subsequent calls will start with depth = depth + offset=2
 */
export default {
 /* eslint-disable */
  props : ['items', 'depth', 'name', 'slug', 'offset', 'routeName'],
  name: 'TreeList',
};
</script>

<style>

</style>
