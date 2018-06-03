const { resolve } = require('path')

module.exports = {
  root: resolve(__dirname, '..'),
  client: resolve(__dirname, '../client'),
  server: resolve(__dirname, '../server'),
  app: resolve(__dirname, '../app'),
  static: resolve(__dirname, '../static'),
  images: resolve(__dirname, '../static/images'),
  views: resolve(__dirname, '../client/views')
}
