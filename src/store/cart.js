export default {
  state: () => ({
    cart: [],
  }),
  mutations: {
    removeCartItem(state, cartItem) {
      state.cart = state.cart.filter(art => art.id !== cartItem.id);
    },
    addToCart(state, cartItem) {
      const index = state.cart.findIndex(item => item.id === cartItem.id);
      if (index === -1) {
        state.cart.push({ ...cartItem, quantity: 1 });
      } else {
        state.cart[index].quantity++;
      }
    },
  },
  getters: {
    total: state =>
      state.cart.reduce((acum, item) => acum + item.price * item.quantity, 0),
  },
  namespaced: true,
};
