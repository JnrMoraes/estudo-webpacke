const path = require('path');
const babliliPlugin = require('babel-minify-webpack-plugin');

let plugins = [];

if (process.env.NODE_ENV == 'production') {

  plugins.push(new babliliPlugin());
}

module.exports = {
  entry: './app-src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test:/\.css$/,
        loader:'style-loader!css-loader'
      }
    ]
  },
  plugins
}