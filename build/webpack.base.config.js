const path = require('path')
const config = require('../config')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

function assetsPath (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/app.js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsRoot
      : config.dev.assetsRoot
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: resolve('src'),
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/]
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('fonts/[name].[ext]')
        }
      }
    ]
  }
}
