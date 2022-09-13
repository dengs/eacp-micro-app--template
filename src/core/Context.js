/**
 * 从主应用获取公共资源作为上下文
 */
const { app: mainApp, Modules } = require("./Based");
const { $store: store, $i18n: i18n } = mainApp;

const env = {
  microAppName: process.env.VUE_APP_MICRO_APP_NAME
};

/**
 * 获取全局数据
 * @param {*} appName
 * @returns
 */
const getGlobalData = appName => (appName ? window.microApp.getGlobalData()[appName] : window.microApp.getGlobalData());

/**
 * 设置全局数据
 * @param {*} { app, data }
 */
const setGlobalData = ({ app, data = {} }) => {
  window.microApp.setGlobalData({ app: app === undefined ? env.microAppName : app, data });
};

export { env, mainApp, store, i18n, getGlobalData, setGlobalData };

export default { env, mainApp, store, i18n, Modules, getGlobalData, setGlobalData };
