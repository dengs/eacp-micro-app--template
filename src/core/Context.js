/**
 * 从主应用获取公共资源作为上下文
 */
const { app: mainApp, modules } = window.microApp.getData();
const { $store: store, $i18n: i18n } = mainApp;
const { Mixins, Utils } = modules;

const env = {
  microAppName: process.env.VUE_APP_MICRO_APP_NAME
};

export { env, mainApp, store, i18n, modules, Mixins, Utils };

export default { env, mainApp, store, i18n, modules, Mixins, Utils };
