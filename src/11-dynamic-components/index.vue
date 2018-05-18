<template>
    <div>
        <component :is="getComponent" @update="update"/>
        <button @click="next">Next</button>
    </div>
</template>


<script>
export default {
  data: () => ({
    step: 0
  }),
  computed: {
    getComponent() {
      this.step;
      return () => import(`./part${this.step}`);
    }
  },
  methods: {
    next() {
      this.step++;
    },
    update(id, data) {
      console.log(id, data);
    }
  }
};
</script>
