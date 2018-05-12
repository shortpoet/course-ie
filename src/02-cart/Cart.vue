<template>
  <div>
    <h2>Cart</h2>
    <table>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Total</th>
        <th></th>
      </tr>
      <tr v-for="article in cart" :key="article.id">
        <td>{{article.id}}</td>
        <td>{{article.name}}</td>
        <td>{{article.quantity}}</td>
        <td>{{article.price}}</td>
        <td>{{article.price * article.quantity}}</td>
        <td><button @click="remove(article)">Remove</button></td>
      </tr>
    </table>
    <h3>Total: {{total}}</h3>
  </div>
</template>

<script>
export default {
  props: ["cart"],
  computed: {
    total() {
      return this.cart.reduce(
        (acum, item) => acum + item.price * item.quantity,
        0,
      );
    },
  },
  methods: {
    remove(article) {
      this.$emit("remove", article);
    },
  },
};
</script>
