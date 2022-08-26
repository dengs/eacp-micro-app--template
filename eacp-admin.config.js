const fs = require("fs");
const { merge } = require("webpack-merge");
const AdminDevServerConfig = require("@hanzhisoft/eacp-admin/config/dev-server.config");

const devEnv = {};
fs.readFileSync(".env.dev", "utf-8")
  .split(/[\s\n]/)
  .filter(item => item && item.includes("=") != -1)
  .forEach(item => (devEnv[item.split("=")[0].substr(item.split("=")[0].includes("VUE_APP_") ? 8 : 0)] = item.split("=")[1]));

console.log("### devEnv:", devEnv);

/**
 * 开发环境：向平台基座注册当前微应用
 */
const microApps = [
  {
    code: devEnv["MICRO_APP_NAME"],
    name: devEnv["MICRO_APP_NAME"],
    url: `http://${devEnv["APP_HOST"]}:${devEnv["APP_PORT"]}${devEnv["CTX_PATH"]}`,
    baseRoute: devEnv["MICRO_APP_BASE_ROUTE"]
  }
];

/**
 * 合并配置 & 导出
 */
module.exports = merge(AdminDevServerConfig, {
  devServer: {
    port: 9527,
    onBeforeSetupMiddleware: ({ app }) => app.get("/api/envMicroApps", (req, res) => res.json({ success: true, data: microApps })),
    proxy: {
      "/api": {
        target: devEnv["API_PROXY_TARGET"],
        ws: false,
        changeOrigin: true,
        pathRewrite: JSON.parse(devEnv["API_PROXY_PATH_REWRITE"])
      }
    }
  }
});
