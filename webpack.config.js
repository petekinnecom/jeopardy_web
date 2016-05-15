var path = require("path")

module.exports = {
  context: path.join(__dirname, "app"),
  entry: {
    javascript: "./application.jsx",
    html: "./index.html"
  },
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
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ],
  },
  output: {
    filename: "application.js",
    path: path.join(__dirname, "/build"),
  }
}
