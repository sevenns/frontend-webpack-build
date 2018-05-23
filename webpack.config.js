const fs = require('fs');
const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const paths = require('./config/paths');
const path = require('path');

module.exports = (options) => {
  return {
    mode: options.env,
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.json'],
      alias: {
        '~': paths.root,
        '~app': paths.app,
        '~server': paths.server
      }
    },
    node: {
      __filename: true,
      __dirname: true
    },
    entry: {
      app: [`${paths.app}/index.js`]
    },
    output: {
      path: `${paths.build}/scripts`,
      filename: '[name].js',
      sourceMapFilename: '[name].map',
      publicPath: paths.static
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          loader: 'babel-loader',
          exclude: [
            /node_modules/,
            paths.build
          ],
          options: {
            babelrc: true,
            cacheDirectory: true
          }
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(options.env),
        '__DEV__': options.env === 'development'
      }),
      new webpack.BannerPlugin({
        raw: true,
        entryOnly: false,
        banner: `require('source-map-support/register')`
      }),
      new FriendlyErrorsWebpackPlugin({
        clearConsole: options.env === 'development',
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ]
  }
};
