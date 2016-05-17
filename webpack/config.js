var loaders = {
  jsx: {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: "babel",
    query: {
      presets: ["es2015", "react", "stage-2"]
    }
  },
  html: {
    test: /\.html$/,
    loader: "file?name=[name].[ext]",
  }
}

var specExternals = {
  'react/addons': true,
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true,
  'cheerio': 'window',
}

module.exports = {
  loaders: loaders,
  specExternals: specExternals
}
