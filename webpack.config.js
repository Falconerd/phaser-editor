const path = require('path');

module.exports = {
  context: path.join(__dirname, "/src"),
  entry: "./main.js",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "bundle.js"
  },
  module: {
    preLoaders: [
        { test: /\.json$/, loader: 'json'},
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
          presets: ['react', 'es2015']
        }
      },
    ]
  }
}
