const path = require('path')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const env = config.build.env

var webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: [
      {
        test: /\.sass$/,
        loaders: 'style-loader!css-loader!postcss-loader!sass-loader'
      },
      {
        test: /\.pug$/,
        loaders: ['file-loader?name=[name].html', 'pug-html-loader?pretty&exports=false']
      }
    ]
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: 'scripts/bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new UglifyJSPlugin({
      uglifyOptions: {
        ecma: 6
      },
      sourceMap: true
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: 'css/styles.css'
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/assets/images'),
        to: path.resolve(__dirname, '../dist/assets/images'),
        ignore: ['.*']
      }
    ]),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      pngquant: {
        quality: '10-20'
      }
    })
  ]
})

module.exports = webpackConfig
