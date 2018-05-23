const { resolve } = require('path');

module.exports = {
  root: resolve(__dirname, '..'),
  client: resolve(__dirname, '../client'),
  server: resolve(__dirname, '../server'),
  app: resolve(__dirname, '../app'),
  static: resolve(__dirname, '../static'),
  views: resolve(__dirname, '../client/views')
};
