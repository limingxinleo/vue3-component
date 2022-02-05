module.exports = {
  // 修改 examples 目录 为 examples 目录
  pages: {
    index: {
      // page 的入口
      entry: "examples/main.ts",
      // 模板来源
      template: "examples/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
    },
  },
  // 扩展 webpack 配置
  chainWebpack: (config) => {
    // 没有任何具名导出并直接暴露默认导出
    config.output.libraryExport("default");
  },
};
