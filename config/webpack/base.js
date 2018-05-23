const paths = require('../paths');

module.exports = {
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
  }
};
