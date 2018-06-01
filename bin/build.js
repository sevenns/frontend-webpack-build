const ora = require('ora');
const chalk = require('chalk');
const paths = require('../config/paths');
const rmrf = require('rimraf');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack/build');

const compiler = webpack(webpackConfig);
const spinner = ora();

spinner.start(chalk.cyan.bold('Building...\n\n'));

rmrf(paths.app, (rmrfError) => {
  if (rmrfError) {
    process.exitCode = 1;
  }

  compiler.run((compilerError, stats) => {
    if (compilerError || stats.hasErrors()) {
      process.exitCode = 1;
    }

    spinner.stop();

    console.log(stats.toString({ // eslint-disable-line
      builtAt: false,
      entrypoints: false,
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
      hash: false,
      version: false,
      timings: false,
      warnings: false
    }) + '\n\n');

    spinner.succeed(chalk.green.bold('Builded successfully.\n'));
  });
});
