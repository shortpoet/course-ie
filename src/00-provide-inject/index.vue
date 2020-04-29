<template>
  <Parent/>
</template>

<script>
import Parent from "./Parent";

export default {
  provide: {
    name: "Carlos"
  },
  components: {
    Parent
  }
};
</script>
