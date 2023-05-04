const fs = require("fs");
const { merge } = require("webpack-merge");
const AdminDevServerConfig = require("@hanzhisoft/eacp-admin/config/dev-server.config");
const extraMicroApp = require("./extra-micro-app");

const devEnv = {};
fs.readFileSync(".env.dev", "utf-8")
  .split(/[\s\n]/)
  .filter(item => item && item.includes("=") != -1)
  .forEach(item => (devEnv[item.split("=")[0].substr(item.split("=")[0].includes("VUE_APP_") ? 8 : 0)] = item.split("=")[1]));

console.log("### devEnv:", devEnv);

/**
 * 开发环境：向平台基座注册当前微应用
 * 注：如需要同时启动多个微应用，则在其中一个微应用中启动 eacp-admin 基座服务即可
 *    基他微应用则在启动基座服务的微应用 extra-micro-app.js 模块中配置即可
 */
const microApps = [
  {
    code: devEnv["MICRO_APP_NAME"],
    name: devEnv["MICRO_APP_NAME"],
    url: `http://${devEnv["APP_HOST"]}:${devEnv["APP_PORT"]}${devEnv["CTX_PATH"]}`,
    baseRoute: devEnv["MICRO_APP_BASE_ROUTE"]
  },
  ...extraMicroApp
];

console.log("### Register micro apps: ", microApps);

/**
 * 合并配置 & 导出
 */
module.exports = merge(AdminDevServerConfig, {
  devServer: {
    port: devEnv["ADMIN_PORT"],
    headers: {
      "X-Custom-aa": "costom option aa" // 只对 response 有效
    },
    onBeforeSetupMiddleware: ({ app }) => app.get("/api/envMicroApps", (req, res) => res.json({ success: true, data: microApps })),
    proxy: {
      "/api": {
        target: devEnv["API_PROXY_TARGET"],
        ws: false,
        headers: {
          "X-Custom-bb": "costom option bb" //  request 有效
        },
        bypass: function (req, res, proxyOptions) {
          req.headers["X-Custom-cc"] = "costom option cc"; //  request 有效
        },
        changeOrigin: true,
        pathRewrite: JSON.parse(devEnv["API_PROXY_PATH_REWRITE"])
      }
    }
  }
});
