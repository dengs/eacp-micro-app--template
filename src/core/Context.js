/**
 * 从主应用获取公共资源作为上下文
 */
const { app: mainApp, Modules } = require("./Based");
const { $store: store, $i18n: i18n, $ctx: mainAppCtx = {} } = mainApp;

const env = {
  microAppName: process.env.VUE_APP_MICRO_APP_NAME
};

/**
 * 获取App全局数据
 * @param {*} app
 * @returns
 */
const getAppGlobalData = app => mainAppCtx.getAppGlobalData(app || env.microAppName);

/**
 * 设置App全局数据
 * @param {*} app
 * @param {*} data
 */
const setAppGlobalData = function (app, data) {
  if (arguments.length < 2) {
    data = app;
    app = env.microAppName;
  }
  mainAppCtx.setAppGlobalData(app || env.microAppName, data);
};

export { env, mainApp, store, i18n, Modules, getAppGlobalData, setAppGlobalData };

export default { ...mainAppCtx, env, mainApp, store, i18n, Modules, getAppGlobalData, setAppGlobalData };
