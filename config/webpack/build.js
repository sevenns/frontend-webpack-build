const paths = require('../paths');
const base = require('./base');
const webpack = require('webpack');
const merge = require('webpack-merge');
const FriendlyErrors = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(base, {
  mode: 'production',
  entry: {
    app: [`${paths.root}/index.js`]
  },
  output: {
    path: `${paths.app}`,
    filename: 'scripts/[name].js',
    publicPath: paths.static
  },
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
    new webpack.DefinePlugin({
      NODE_ENV: 'production',
      __DEV__: 'production'
    }),
    new FriendlyErrors({
      clearConsole: false,
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/app.css'
    })
  ]
});
