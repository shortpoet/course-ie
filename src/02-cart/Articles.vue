<template>
  <div>
    <h2>Articles</h2>
    <ul>
      <li v-for="article in articles" :key="article.id">
        {{article.name}}, {{article.price}}$
        <button @click="add(article)">Add to Cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["articles"],
  methods: {
    add(article) {
      this.$emit("add", article);
    }
  }
};
</script>
