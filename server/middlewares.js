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
  // console.log(router);

  app.use('/', router);

  // app.use(async (context, next) => {
  //   try {
  //     await next();

  //     if (context.status === 404 && context.res.headersSent === false) {
  //       context.throw(404);
  //     }
  //   } catch (error) {
  //     context.status = error.status || 500;

  //     context.type = 'json';
  //     context.body = error.message;

  //     context.app.emit('error', error, context);
  //   }
  // });

  // app.use(webpackMiddlewares({
  //   compiler,

  //   dev: {
  //     publicPath: webpackConfig.output.publicPath,
  //     logLevel: 'silent'
  //   },

  //   hot: {
  //     logLevel: 'silent'
  //   }
  // }));

  // app.use(bodyParser());
  // app.use(views(paths.views, {
  //   extension: 'pug',
  //   options: {
  //     basedir: paths.client
  //   }
  // }));
  // app.use(router());
  // app.use(serve(paths.static));
  // app.use(serve(paths.app));
};
