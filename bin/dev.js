const chalk = require('chalk');
const paths = require('../config/paths');
const rmrf = require('rimraf');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack/dev');
const nodemon = require('nodemon');
const nodemonConfig = require('../config/nodemon');

const compiler = webpack(webpackConfig);

rmrf(paths.app, (rmrfError) => {
  if (rmrfError) {
    process.exitCode = 1;
  }

  compiler.run((compilerError, stats) => {
    if (compilerError || stats.hasErrors()) {
      process.exitCode = 1;
    }
  });

  nodemon(nodemonConfig)
    .on('quit', process.exit)
    .on('restart', () => {
      console.log(chalk.cyan.bold('Compiling...'));
    });
});
