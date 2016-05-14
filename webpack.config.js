var path = require('path')

module.exports = {
  context: path.join(__dirname, "app"),
  entry: "./application.js",
  output: {
    filename: "application.js",
    path: path.join(__dirname, "/build"),
  }
}
