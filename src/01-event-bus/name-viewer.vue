<template>
  <h2>Hello {{name}}</h2>
</template>

<script>
import bus from "./bus";

export default {
  data: () => ({ name: "" }),
  created() {
    bus.$on("update-name", name => {
      this.name = name;
    });
  },
};
</script>
