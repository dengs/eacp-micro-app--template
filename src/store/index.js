import Vue from "vue";
import Vuex from "vuex";
import { Context } from "@/core";
const { store } = Context;

Vue.use(Vuex);
Vue.observable(store);

export default store;
