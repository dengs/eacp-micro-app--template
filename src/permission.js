import Vue from "vue";
import router from "@/router";
import store from "@/store";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const { __MICRO_APP_ENV__ } = require("@/core/Based");

const authorizeWhitelist = ["/unauthorized"];

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (authorizeWhitelist.includes(to.path) || Vue.ls.getAccessToken()) {
    if (!__MICRO_APP_ENV__ && !store.state.appSetting.initRouteStatus) {
      store
        .dispatch("appSetting/generateRoutes")
        .then(data => {
          const routes = data.map(item => {
            return {
              name: item.name,
              path: item.path,
              component: () => (typeof item.component == "string" ? import(`./views/${item.component}.vue`) : item.component),
              meta: item.meta
            };
          });
          router.addRoutes(routes);
          store.dispatch("appSetting/setInitRouteStatus", true);
          next(to);
        })
        .catch(error => {
          // 创建路由数据失败
          console.error(error);
        });
    } else {
      next();
    }
  } else {
    next({ path: "/unauthorized" });
  }
});

router.afterEach((to, from) => {
  NProgress.done();
});
