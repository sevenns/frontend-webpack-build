const ora = require('ora');
const chalk = require('chalk');
const rmrf = require('rimraf');
const paths = require('../config/paths');

const spinner = ora();

spinner.start(chalk.cyan.bold('Cleaning "app" folder...\n\n'));

rmrf(paths.app, (error) => {
  if (error) {
    spinner.stop();
    process.exitCode = 1;
  }

  spinner.succeed(chalk.green.bold('Cleaned successfully.\n'));
});
