const path = require("path")

module.exports = {
  outputDir: "build",
  publicPath: "./",
  devServer: {
    proxy: {
      "^/api": {
        // target: "http://47.107.55.171:9000",
        target: "localhost:9000",
        pathRewrite: {
          "^/api": ""
        },
        changeOrigin: true
      }
    }
  },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: "src/components"
  //     }
  //   }
  // }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     "@": path.resolve(__dirname, "src"),
  //     components: "@/components"
  //   }
  // }
  // 配置方式三
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", path.resolve(__dirname, "src"))
      .set("components", "@/components")
      .set("router", "@/router")
      .set("views", "@/views")
  }
}
