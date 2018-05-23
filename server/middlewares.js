const webpack = require('webpack');
const webpackMiddlewares = require('koa-webpack');
const webpackConfig = require('../config/webpack/dev');
const serve = require('koa-static');
const views = require('koa-views');
const router = require('./router');
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
  app.use(views(paths.views, {
    extension: 'pug',
    options: {
      basedir: paths.client
    }
  }));
  app.use(router());
  app.use(serve(paths.static));
  app.use(serve(paths.app));
};
