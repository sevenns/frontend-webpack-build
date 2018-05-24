const paths = require('../paths');
const base = require('./base');
const webpack = require('webpack');
const merge = require('webpack-merge');
const FriendlyErrors = require('friendly-errors-webpack-plugin');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client?noInfo=true&reload=true',
      `${paths.root}/index.js`
    ]
  },
  output: {
    path: paths.static,
    filename: 'scripts/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: 'development',
      __DEV__: 'development'
    }),
    new FriendlyErrors({
      clearConsole: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
});
