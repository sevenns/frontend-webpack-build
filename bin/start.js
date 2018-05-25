const fs = require('fs');
const chalk = require('chalk');
const express = require('express');
const paths = require('../config/paths');
const config = require('../config/server');

if (!fs.existsSync(paths.app)) {
  console.log(chalk.cyan.bold('Run "npm run build" before...'));
  process.exit();
}

const app = express();
const host = process.env.HOST || config.host;
const port = process.env.PORT || config.port;

const message = 'The server is launched at:';
const info = `${config.host}:${config.port}`;

app.use(express.static(paths.app));

app.get('/', (req, res) => {
  res.redirect('/html');
});

app.listen(port, host, () => {
  console.log(chalk.green.bold(`${message} ${info}`));
});
