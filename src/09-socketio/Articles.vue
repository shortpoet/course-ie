<template>
  <div>
    <h2>Articles</h2>
    <ul>
      <li v-for="article in articles" :key="article.id">
        {{article.name}}, {{article.price}}$
        <button @click="handleAddToCart(article)">Add to Cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  sockets: {
    connect() {
      console.log("connected: ", this.$socket.id);
    },
    "cart:addItem"(item) {
      console.log("addItem", item);
      this.addToCart(item);
    }
  },
  computed: {
    ...mapState("articles", ["articles"])
  },
  methods: {
    ...mapMutations("cart", ["addToCart"]),
    handleAddToCart(item) {
      this.$socket.emit("cart:addItem", item);
      this.addToCart(item);
    }
  }
};
</script>
