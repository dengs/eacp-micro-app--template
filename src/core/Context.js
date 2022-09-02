/**
 * 从主应用获取公共资源作为上下文
 */
const { app: mainApp } = require("./Based");
const { $store: store, $i18n: i18n } = mainApp;

const env = {
  microAppName: process.env.VUE_APP_MICRO_APP_NAME
};

export { env, mainApp, store, i18n };

export default { env, mainApp, store, i18n };
