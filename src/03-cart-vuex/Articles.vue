<template>
  <div>
    <h2>Articles</h2>
    <ul>
      <li v-for="article in articles" :key="article.id">
        {{article.name}}, {{article.price}}$
        <button @click="addToCart(article)">Add to Cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState("articles", ["articles"]),
  },
  methods: {
    ...mapMutations("cart", ["addToCart"]),
  },
};
</script>
