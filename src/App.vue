<template>
  <div id="app">
    <select v-model="selected" @change="updateValue">
      <option
        v-for="option in options" 
        :key="option.value"
        :value="option.value"
        :label="option.value"
      >
        {{ option.name }}
      </option>
    </select>
    <!-- <Example /> -->
    <component :is="selectedComponent" />
  </div>
</template>

<script>
import Example from "./01-event-bus";

export default {
  name: "app",
  components: {
    Example
  },
  data () {
    return {
      selected: '00-provide-inject',
      directories: [
        '00-provide-inject',
        '01-event-bus',
        '02-cart',
        '03-cart-vuex',
        '04-test-intro',
        '05-test-doubles',
        '06-vue-test',
        '07-vuex-test',
        '08-vuex-test-integration',
        '09-socketio',
        '10-socketiovuex',
        '11-dynamic-components',
      ]    
    }
  },
  computed: {
    selectedComponent () {
      console.log(this.selected)
      return () => import(`./${this.selected}`)
    },
    options () {
      return this.directories.map(d => {
        return {
          name: d,
          value: d
        }
      })
    }
  },
  methods: {
    updateValue (e) {
      console.log(e)
      this.selected = e.target.value
    }
  },
  mounted () {
  }
};
</script>
