export const state = () => {
  products : [];
  uniqueItems: 0;
};

export const getters = {
  products: (state) => state.products,
  uniqueItems: (state) => state.uniqueItems
};

export const mutations = {
  SET_PRODUCTS (state, products) {
    state.products = products;
  },
  SET_TOTAL_UNIQUE_ITEMS (state, uniqueItems) {
    state.uniqueItems = uniqueItems;
  }
};

// Get the data from the users cart
export const actions = {
  async getCart({ commit }) {
    let response, {data} = await this.$axios.$get('cart');

    commit('SET_PRODUCTS', data.products);
    
    // set the number of items in the cart
    commit('SET_TOTAL_UNIQUE_ITEMS', data.products.length);

    return response;
  }
};