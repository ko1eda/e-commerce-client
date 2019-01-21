/**
 * A consistent place to keep a list of all the endpoints used 
 * for routing.
 * https://nuxtjs.org/guide/plugins/#inject-into-context
 */
export default ({ app }, inject) => {
  // Set the function directly on the context.app object
  app.endpoints = {
    categories: 'categories',
    products: 'products',
    cart: 'cart'
  };
};