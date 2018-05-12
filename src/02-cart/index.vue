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
    cart: [],
    articles: [
      { id: 2, name: "Shoes", price: 23.4 },
      { id: 4, name: "Sun Glasses", price: 15.99 },
      { id: 9, name: "Umbrella", price: 19.79 },
    ],
  }),
  methods: {
    removeArticle(article) {
      // or this.$delete(this.cart, article.id)
      const { excluded, ...restObj } = obj;
      this.cart = this.cart.filter(art => art.id === article.id);
    },
    addToCart(article) {
      const index = this.cart.findIndex(item => item.id === article.id);
      if (index === -1) {
        this.cart.push({ ...article, quantity: 1 });
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
