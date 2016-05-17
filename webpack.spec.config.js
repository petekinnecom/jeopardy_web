var path = require("path")
var webpackConf = require("./webpack/config")

module.exports = {
  context: path.join(__dirname, "spec"),
  entry: {
    javascript: "./spec.js",
    html: "./index.html"
  },
  module: {
    loaders: [
      webpackConf.loaders.jsx,
      webpackConf.loaders.html
    ],
  },
  externals: webpackConf.specExternals,
  output: {
    filename: "spec.js",
    path: path.join(__dirname, "/specBuild"),
  },
}
