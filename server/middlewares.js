const express = require('express');
const router = require('./router');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack/dev');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const paths = require('../config/paths');

const compiler = webpack(webpackConfig);

module.exports = (app) => {
  app.use(devMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    logLevel: 'silent'
  }));

  app.use(hotMiddleware(compiler, {
    log: false,
    heartbeat: 2000
  }));

  app.use(express.static(paths.static));
  app.use('/', router);
};
