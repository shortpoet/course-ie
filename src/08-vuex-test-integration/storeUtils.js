import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import { cloneDeep, merge } from "lodash";
import { storeConfig } from "@/store";


export const createStore = (mockOptions = {}) => {
  const storeMock = merge(cloneDeep(storeConfig), mockOptions);
  const store = new Vuex.Store(storeMock);
  const localVue = createLocalVue();
  localVue.use(Vuex);

  return { store, localVue };
};
