const base = require('./base');
const webpack = require('webpack');
const merge = require('webpack-merge');
const FriendlyErrors = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../styles/app.css'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'development',
      __DEV__: 'development'
    }),
    new FriendlyErrors({
      clearConsole: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
});
