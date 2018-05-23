const Koa = require('koa');
const middlewares = require('./middlewares');

const app = new Koa();
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || '8080';

middlewares(app);

app.listen(port, host);
