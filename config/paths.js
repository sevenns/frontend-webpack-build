const resolve = require('path').resolve;

module.exports = {
  root: resolve(__dirname, '..'),
  app: resolve(__dirname, '../app'),
  server: resolve(__dirname, '../server'),
  build: resolve(__dirname, '../build'),
  static: resolve(__dirname, '../static')
};
