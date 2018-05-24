const express = require('express');
const middlewares = require('./middlewares');
const paths = require('../config/paths');

const app = express();
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || '8080';

middlewares(app);

app.locals.basedir = paths.client;
app.set('views', paths.views);
app.set('view engine', 'pug');

app.listen(port, host);
