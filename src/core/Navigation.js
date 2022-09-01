const { app: mainApp } = window.microApp.getData();
const { microAppName } = require("./Context").env;

/**
 * 打开页签
 * 注：isMicroApp = false 时需传入 component
 * @param {*} options
 * @returns
 */
export const openTab = ({ key, title, routePath, bread, appKey = microAppName, component, params, isMicroApp } = {}) =>
  mainApp.openTab({ key, title, routePath, bread, appKey, component, params, isMicroApp });

/**
 * 打开页签—微应用页面
 * @param {*} options
 * @returns
 */
export const openMicroAppTab = ({ key, title, routePath, bread, appKey = microAppName, params } = {}) =>
  mainApp.openMicroAppTab({ key, title, routePath, bread, appKey, params });

export default { openTab, openMicroAppTab };
