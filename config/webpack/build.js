const base = require('./base');
const webpack = require('webpack');
const merge = require('webpack-merge');
const FriendlyErrors = require('friendly-errors-webpack-plugin');

module.exports = merge(base, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'production',
      __DEV__: 'production'
    }),
    new FriendlyErrors({
      clearConsole: false,
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ]
});
