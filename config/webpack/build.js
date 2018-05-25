const paths = require('../paths');
const base = require('./base');
const webpack = require('webpack');
const merge = require('webpack-merge');
const FriendlyErrors = require('friendly-errors-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
          'postcss-loader',
          'sass-loader'
        ]
      },

      {
        test: /\.pug$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].html',
              context: paths.views,
              // outputPath: paths.app,
              publicPath: './'
            }
          },
          {
            loader: 'pug-html-loader',
            options: { basedir: paths.client }
          }
        ],
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: { ecma: 5 }
      }),
      new OptimizeCSSAssetsPlugin()
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
    }),
    new CopyWebpackPlugin([
      {
        from: paths.static,
        to: paths.app
      }
    ])
  ]
});
