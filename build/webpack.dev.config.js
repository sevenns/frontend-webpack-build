const path = require('path')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
  entry: {
    app: ['./index.js', './build/dev-client'],

  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        loaders: 'style-loader!css-loader!postcss-loader!sass-loader'
      },
      {
        test: /\.pug$/,
        use: [
          'file-loader?name=[name].html',
          {
            loader: 'pug-html-loader?pretty&exports=false',
            options: {
              basedir: path.resolve(__dirname, '../src/pug')
            }
          }
        ]
      }
    ]
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin()
  ]
})
