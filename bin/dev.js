const chalk = require('chalk');
const paths = require('../config/paths');
const rmrf = require('rimraf');
const nodemon = require('nodemon');
const nodemonConfig = require('../config/nodemon');

rmrf(paths.app, (rmrfError) => {
  if (rmrfError) {
    process.exitCode = 1;
  }

  nodemon(nodemonConfig)
    .on('quit', process.exit)
    .on('restart', () => {
      console.log(chalk.cyan.bold('Compiling...'));
    });
});
