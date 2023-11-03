/**
 * 基座应用数据
 * __MICRO_APP_ENV__：是否微应用环境（基于基座运行）
 */
const basedData = Object.assign(window.microApp?.getData() || {}, { __MICRO_APP_ENV__: window.__MICRO_APP_ENVIRONMENT__ });

module.exports = basedData;
