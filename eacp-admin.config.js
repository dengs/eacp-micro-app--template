const EacpAdminDevServerConfig = require("@hanzhisoft/eacp-admin/config/dev-server.config");
const path = require("path");
const { merge } = require("webpack-merge");

/**
 * eacp-admin 模块路径
 */
const EACP_ADMIN_MODULE_PATH = path.join(__dirname, "./node_modules/@hanzhisoft/eacp-admin");

/**
 * 合并配置 & 导出
 */
module.exports = merge(EacpAdminDevServerConfig, {
  entry: path.join(EACP_ADMIN_MODULE_PATH, `/config/dev-app.js`),
  devServer: {
    port: 9527,
    static: {
      directory: path.join(EACP_ADMIN_MODULE_PATH, `/dist`)
    },
    proxy: {
      "/api": {
        target: "http://192.168.70.216:10006",
        ws: false,
        changeOrigin: true,
        pathRewrite: { "^/api": "api" }
      }
    }
  }
});
