import Vue from "vue";
import Vuex from "vuex";
import { Store } from "@hanzhisoft/eacp-common-core";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  getters: {},
  actions: {},
  modules: { ...Store.modules }
});
