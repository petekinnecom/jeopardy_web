var path = require("path")
var webpackConf = require("./webpack/config")

module.exports = {
  context: path.join(__dirname, "app"),
  entry: {
    javascript: "./application.jsx",
    html: "./index.html",
    html: "./fixtures/board.json.html"
  },
  module: {
    loaders: [
      webpackConf.loaders.jsx,
      webpackConf.loaders.html
    ],
  },
  output: {
    filename: "application.js",
    path: path.join(__dirname, "/build"),
  }
}
