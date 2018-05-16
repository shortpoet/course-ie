import Vue from "vue";
import VueSocketIO from "vue-socket.io";

import App from "./App.vue";
import store from "./store";

Vue.use(VueSocketIO, "http://localhost:4001", store);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
