const base = require('./base');
const webpack = require('webpack');
const merge = require('webpack-merge');
const FriendlyErrors = require('friendly-errors-webpack-plugin');

module.exports = merge(base, {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'development',
      '__DEV__': 'development'
    }),
    new webpack.BannerPlugin({
      raw: true,
      entryOnly: false,
      banner: `require('source-map-support/register')`
    }),
    new FriendlyErrors({
      clearConsole: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
});
