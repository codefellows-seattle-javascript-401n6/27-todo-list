'use strict';
const HtmlPlugin = require('html-webpack-plugin');

const config = {
  entry:'./src/app.js',
  mode:'development',
  plugins: [new HtmlPlugin()],
  module:{
    rules:[
      {test: /\.jsx?$/, loader: ['babel-loader'], exclude:/node_modules/},
      {test: /\.s?css$/, loader: [
        'style-loader',
        'css-loader',
        'sass-loader'
      
      ]},
    ]
  }
};

module.exports = config;