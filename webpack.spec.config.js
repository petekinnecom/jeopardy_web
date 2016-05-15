var path = require("path")

module.exports = {
  context: path.join(__dirname, "spec"),
  entry: {
    javascript: "./spec.js",
    html: "./index.html"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["es2015", "react", "stage-2"]
        }
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ],

  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
    'cheerio': 'window',
  },
  output: {
    filename: "spec.js",
    path: path.join(__dirname, "/specBuild"),
  },
}
