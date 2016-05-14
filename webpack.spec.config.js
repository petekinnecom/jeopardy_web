var path = require("path")

module.exports = {
  context: path.join(__dirname, "spec"),
  entry: "./spec.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["es2015", "react"]
        }
      },
    ],
  },
  output: {
    filename: "spec.js",
    path: path.join(__dirname, "/specBuild"),
  }
}
