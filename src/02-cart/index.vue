<template>
	<div id="app">
		<cart :cart="cart" @remove="removeCartItem"/>
		<articles :articles="articles" @add="addToCart"/>
	</div>
</template>

<script>
import Cart from "./Cart";
import Articles from "./Articles";

export default {
  data: () => ({
    cart: [],
    articles: [
      { id: 2, name: "Shoes", price: 23.4 },
      { id: 4, name: "Sun Glasses", price: 15.99 },
      { id: 9, name: "Umbrella", price: 19.79 },
    ],
  }),
  methods: {
    removeCartItem(cartItem) {
      this.cart = this.cart.filter(art => art.id === cartItem.id);
    },
    addToCart(cartItem) {
      const index = this.cart.findIndex(item => item.id === cartItem.id);
      if (index === -1) {
        this.cart.push({ ...cartItem, quantity: 1 });
      } else {
        this.cart[index].quantity++;
      }
    },
  },
  components: {
    Cart,
    Articles,
  },
};
</script>
