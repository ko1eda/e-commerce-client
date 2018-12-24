export const state = () => ({
  categories: [],
  gridSize : 3
});

/**
 * Getters
 * 
 */
export const getters = {
  categories: (state) => state.categories,
  gridSize: (state) => state.gridSize
};

/**
 * Mutations
 * 
 * SET_CATEGORIES : update categories in store
 */
export const mutations = {
  SET_CATEGORIES (state, categories) {
    state.categories = categories;
  },

  SET_GRID_SIZE (state, size) {
    state.gridSize = size;
  }
};

/**
 * Actions
 * 
 * nuxtServerInit: loads data into your application straight from the server without hitting the client
 *  We use async await to wait for axios to fetch the categories from the server, it returns the response data which we then destructure.
 *  Then we call our mutation with those categories we pulled.
 *  $axios represents the axios nuxt plugin object we installed see https://axios.nuxtjs.org/usage
 *  It is destructred from the context object passed into the nuxtServerInit function see https://nuxtjs.org/guide/vuex-store#the-nuxtserverinit-action
 * 
 */
export const actions = {
  async nuxtServerInit({ commit }, { $axios }) {
    let {data} = await $axios.$get('categories');
    
    commit('SET_CATEGORIES', data);
  },

  setGridSize({commit}, size) {

    commit('SET_GRID_SIZE', size);
  }
};
