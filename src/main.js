import "./public-path";
import Vue from "vue";
import router from "./router";
import store from "./store";
import i18n from "./locales";
import api from "./api";
import App from "./App.vue";
import { Context, Components } from "./core";

import HanUI, { mixins } from "@hanzhisoft/han-ui";
import "@hanzhisoft/han-ui/lib/han-ui.css";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.prototype.$ctx = Context;
Vue.prototype.$api = api;
Vue.prototype.loadView = async view => await import(`@/views/${view}`);

const { Utils, Message, MessageBox } = mixins;
Vue.use(HanUI);
Vue.mixin(Utils);
Vue.mixin(Message);
Vue.mixin(MessageBox);

/**
 * 公共组件注册
 */
Object.keys(Components).forEach(key => Vue.component(key, Components[key]));

console.log("@@@ window.__MICRO_APP_BASE_ROUTE__: ", window.__MICRO_APP_BASE_ROUTE__);

const app = new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");

/** 派发数据到主应用  */
window.microApp.dispatch({ $app: app });

// 监听卸载操作
window.addEventListener("unmount", () => {
  // app.$destroy();
  console.log("[micro-app] unmount.");
});
