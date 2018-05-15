import Vue from "vue";
import Vuex from "vuex";

import cart from "./cart";
import articles from "./articles";

Vue.use(Vuex);

export const storeConfig = {
  modules: {
    cart,
    articles
  }
};

export default new Vuex.Store(storeConfig);
