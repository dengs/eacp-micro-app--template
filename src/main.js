import "./public-path";
import Vue from "vue";
import router from "./router";
import store from "./store";
import i18n from "./locales";
import App from "./App.vue";

import Based from "@/core/Based";
import { createContext, Theme } from "@hanzhisoft/eacp-common-core";
import "@/permission";
/**  demo API 模块（引入示例，请移除） */
import DemoApi from "@hanzhisoft/eacp-demo-api";

import HanUI, { mixins } from "@hanzhisoft/han-ui";
import "@hanzhisoft/han-ui/lib/han-ui.css";

/**
 * 安装主题
 */
import element from "@hanzhisoft/han-ui-theme-element";
import hzred from "@hanzhisoft/han-ui-theme-hzred";
import mingcyan from "@hanzhisoft/han-ui-theme-mingcyan";
import techblue from "@hanzhisoft/han-ui-theme-techblue";

Theme.addThemes(element, hzred, mingcyan, techblue);

Vue.config.productionTip = false;
Vue.prototype.loadView = view => import(`@/views/${view}`);

const { Utils, Message, MessageBox } = mixins;
Vue.use(HanUI);
Vue.mixin(Utils);
Vue.mixin(Message);
Vue.mixin(MessageBox);

console.log("@@@ window.__MICRO_APP_BASE_ROUTE__: ", window.__MICRO_APP_BASE_ROUTE__);

const app = new Vue({
  router,
  store,
  i18n,
  created() {
    Vue.use(
      createContext({
        app: this,
        mainApp: Based.__MICRO_APP_ENV__ && Based.app,
        __MICRO_APP_ENV__: Based.__MICRO_APP_ENV__,
        api: { demo: DemoApi } /**  demo API 模块（引入示例，请移除） */,
        env: process.env,
        store: this.$store,
        router: this.$router,
        i18n: this.$i18n
      })
    );
  },
  render: h => h(App)
}).$mount("#app");

/** 派发数据到主应用  */
window.microApp?.dispatch({ $app: app });

// 监听卸载操作
window.addEventListener("unmount", () => {
  // app.$destroy();
  console.log("[micro-app] unmount.");
});
