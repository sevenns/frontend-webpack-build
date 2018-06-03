const ora = require('ora')
const chalk = require('chalk')
const rmrf = require('rimraf')
const clear = require('clear')
const paths = require('../config/paths')

const spinner = ora()

clear()

spinner.start(chalk.cyan.bold('Cleaning "app" folder...\n'))

rmrf(paths.app, (error) => {
  if (error) {
    spinner.stop()
    process.exitCode = 1
  }

  spinner.succeed(chalk.green.bold('Cleaning "app" folder complete.\n'))
})
