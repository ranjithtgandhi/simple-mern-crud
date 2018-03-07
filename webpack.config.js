var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'app');
const nodeModules = /node_modules/;

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'dist/bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.(jsx)?/,
        include : APP_DIR,
        loader : 'babel-loader',
        exclude:nodeModules
      },
      { test: /\.(jpg|png|svg)$/, loader: 'url-loader?limit=100000&name=images/[name].[ext]' },
      { test: /\.(woff|woff2|eot|ttf)$/, loader: 'url-loader?limit=100000&name=fonts/[name].[ext]' },
      //{ test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/, loader: 'file-loader?limit=100000' },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?name=css/[name].[ext]']
      }
    ]
  }
};

module.exports = config;