const paths = require('../paths')

module.exports = {
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '~': paths.root,
      '~client': paths.client,
      '~server': paths.server,
      '~app': paths.app,
      '~views': paths.views
    }
  },
  node: {
    __filename: true,
    __dirname: true
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: [/node_modules/, paths.app],
        use: ['babel-loader']
      },

      {
        test: /\.js$/,
        exclude: [/node_modules/, paths.app, paths.static],
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  }
}
