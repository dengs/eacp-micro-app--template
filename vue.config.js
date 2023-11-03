const { defineConfig } = require("@vue/cli-service");
const { name } = require("./package.json");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.VUE_APP_CTX_PATH,
  devServer: {
    host: process.env.VUE_APP_APP_HOST,
    port: process.env.VUE_APP_APP_PORT,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    proxy: {
      [process.env.VUE_APP_API_BASE_URL]: {
        target: process.env.VUE_APP_API_PROXY_TARGET,
        ws: false,
        changeOrigin: true,
        pathRewrite: JSON.parse(process.env.VUE_APP_API_PROXY_PATH_REWRITE || "{}")
      }
    }
  },

  configureWebpack: {
    resolve: { fallback: { fs: false } },
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      // webpack 5中已将 output.jsonpFunction 更名为 output.chunkLoadingGlobal
      // jsonpFunction: `webpackJsonp_${name}`,
      chunkLoadingGlobal: `webpackJsonp_${name}`
    }
  }
});
