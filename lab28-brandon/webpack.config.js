'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  entry: './src/main.jsx',
  plugins: [new HtmlWebpackPlugin],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        loader: [
          'style-loader', 'css-loader', 'sass-loader'
        ]}
    ]
  }
};
module.exports = config;