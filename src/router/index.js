import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import { Router as CommonRouter } from "@hanzhisoft/eacp-common-core";

const { routes: extraRoutes = [] } = require("@/core/Based");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: HomeView
  },
  {
    path: "/home",
    name: "home",
    component: HomeView
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/AboutView.vue")
  }
];

/**
 * 动态生成路由：由主应用传递的路数据（菜单配置）
 */
(extraRoutes || []).forEach(route =>
  routes.push({ ...route, component: typeof route.component == "string" ? () => import(`@/views/${route.component}`) : route.component })
);

const router = new VueRouter({
  mode: "history",
  // 👇 __MICRO_APP_BASE_ROUTE__ 为micro-app传入的基础路由
  base: window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL,
  routes: [...routes, ...CommonRouter.routes]
});

export default router;
