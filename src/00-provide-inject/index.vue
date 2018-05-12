<template>
  <Parent/>
</template>

<script>
import Parent from "./Parent";

export default {
  provide: {
    name: "Jessie",
  },
  components: {
    Parent,
  },
};
</script>
