const Router = require('koa-router');
const paths = require('../config/paths');
const { resolve } = require('path');
const fs = require('fs');

const router = new Router();

module.exports = () => {
  router.get('/*', async (context, next) => {
    let { url } = context;
    let view = 'index';
    let isPath = true;
    let absolute = {
      path: '/',
      file: 'index.pug'
    };

    if (url !== '/') {
      url = url.slice(1, context.url.length);
      isPath = url.search(/./i) <= 0;
      view = url;
      absolute = {
        path: resolve(paths.views, view),
        file: resolve(paths.views, `${view}.pug`)
      };
    }

    if (isPath &&
      (
        fs.existsSync(absolute.path) ||
        fs.existsSync(absolute.file)
      )
    ) {
      await context.render(view);
    } else {
      await next();
    }
  });

  return router.middleware();
};
