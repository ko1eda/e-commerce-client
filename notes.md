## Setting environment on windows with node
+ How environment works with webpacks define plugin https://stackoverflow.com/questions/38183285/environment-variable-with-webpack-on-dev-and-production
+ https://stackoverflow.com/questions/9249830/how-can-i-set-node-env-production-on-windows

### Async info
+ https://nuxtjs.org/guide/async-data
+ https://nuxtjs.org/guide/vuex-store#the-nuxtserverinit-action
+ https://axios.nuxtjs.org/usage

### NuxtServerInit doesn't work in SPA mode
+ https://github.com/nuxt/nuxt.js/issues/240 
+ Difference between client and server side rendering


### Recursive componets with vue (TreeList was adopted from this)
+ https://vuejsdevelopers.com/2017/10/23/vue-js-tree-menu-recursive-components/
+ Recursive scoped slots https://forum.vuejs.org/t/recursive-scoped-slots/8220

### Building the grid slider component
+ https://alligator.io/vuejs/component-lifecycle/
+ https://stackoverflow.com/questions/48381670/vuejs-transform-rotate-style-inline
+ https://stackoverflow.com/questions/40408096/whats-the-correct-way-to-pass-props-as-initial-data-in-vue-js-2

### Building the control bar
+ https://forum.vuejs.org/t/rerendering-component-on-route-param-change-recalling-created-hooks/9536
+ Remember not to update a property inside a function while using that function to render some data 
+ as this will continue to update the data, which will then re-render recalling your function, which will re-update the data.... 
   + https://github.com/vuejs-tips/v-money/issues/53
+ https://router.vuejs.org/guide/essentials/dynamic-matching.html

### Misc.
 + Color palette ideas -> http://paletton.com/#uid=73U260kiEH08cVSdVOZmHzfrtuj
 + Setting up eslint with nuxt 
    + https://medium.com/@doppelmutzi/eslint-prettier-vue-workflow-46a3cf54332f
    + https://nuxtjs.org/guide/development-tools/#eslint-and-prettier
