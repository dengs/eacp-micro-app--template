const { defineConfig } = require("@vue/cli-service");
const { name } = require("./package.json");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.VUE_APP_CTX_PATH,
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    port: 9001
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      // webpack 5中已将 output.jsonpFunction 更名为 output.chunkLoadingGlobal
      // jsonpFunction: `webpackJsonp_${name}`,
      chunkLoadingGlobal: `webpackJsonp_${name}`
    }
  }
});
