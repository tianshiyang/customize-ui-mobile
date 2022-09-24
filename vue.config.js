const path = require("path")

module.exports = {
  // 修改pages入口
  pages: {
    index: {
      entry: "examples/main.ts",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  outputDir: "lib",
  // 扩展 webpack配置
  chainWebpack: (config) => {
    config.resolve.alias
      .set("~", path.resolve("packages"))
      .set("@", path.resolve("examples"))
  }
}
