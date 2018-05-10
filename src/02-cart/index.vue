<template>
	<div id="app">
		<cart :cart="cart" @remove="removeArticle"/>
		<articles :articles="articles" @add="addToCart"/>
	</div>
</template>

<script>
import Cart from "./Cart";
import Articles from "./Articles";

export default {
  data: () => ({
    cart: {},
    articles: [
      { id: 2, name: "Shoes", price: 23.4 },
      { id: 4, name: "Sun Glasses", price: 15.99 },
      { id: 9, name: "Umbrella", price: 19.79 },
    ],
  }),
  methods: {
    removeArticle(article) {
      const cart = { ...this.cart };
      delete cart[article.id];
      this.cart = cart;
    },
    addToCart(article) {
      if (!this.cart[article.id]) {
        this.cart = {
          ...this.cart,
          [article.id]: { ...article, quantity: 1 },
        };
      } else {
        this.cart[article.id].quantity++;
      }
    },
  },
  components: {
    Cart,
    Articles,
  },
};
</script>
