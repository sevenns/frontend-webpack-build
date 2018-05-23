'use strict';

const options = { env: process.env.NODE_ENV };
const webpack = require('webpack');
const webpackMiddlewares = require('koa-webpack');
const webpackConfig = require('../webpack.config')(options);
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const paths = require('../config/paths');

const compiler = webpack(webpackConfig);

module.exports = (app) => {
  app.use(async (context, next) => {
    try {
      await next();

      if (context.status === 404 && context.res.headersSent === false) {
        context.throw(404);
      }
    } catch (error) {
      context.status = error.status || 500;

      context.type = 'json';
      context.body = error.message;

      context.app.emit('error', error, context);
    }
  });

  app.use(webpackMiddlewares({
    compiler,
  
    dev: {
      publicPath: webpackConfig.output.publicPath,
      logLevel: 'silent'
    },
  
    hot: {
      logLevel: 'silent'
    }
  }));

  app.use(bodyParser());
  app.use(serve(paths.static));
}
