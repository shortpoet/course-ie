<template>
  <input v-model="name" @keydown.enter="notify"/>
</template>

<script>
import bus from "./bus";

export default {
  data: () => ({ name: "" }),
  methods: {
    notify() {
      bus.$emit("update-name", this.name);
    }
  }
};
</script>
