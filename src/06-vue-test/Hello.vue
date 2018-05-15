
<template>
  <div>
    Hello {{ name }} from {{greeter}}!
    <button @click="sayHi">Say Hi</button>
  </div>
</template>

<script>
export default {
  props: ["greeter"],
  data() {
    return { name: "Vue" };
  },
  methods: {
    sayHi() {
      this.$emit("sayHi", "Hi!");
    },
  },
};
</script>
