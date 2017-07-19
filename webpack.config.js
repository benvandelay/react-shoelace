const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin("base.css");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.template.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  context: path.resolve('src'),
  entry: './index.js',
  output: {
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      },
      {
        test: /\.jsx$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          fallback: 'style-loader',
          use: [{
            loader: "css-loader",
            options: {
                sourceMap: true
            }
          }, {
            loader: "sass-loader",
            options: {
                sourceMap: true,
            }
          }, {
            loader: "postcss-loader",
            options: {
              plugins: function () {
                  return [autoprefixer]
              }
            }
          }]
        })
      },
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    extractSass
  ]
}
