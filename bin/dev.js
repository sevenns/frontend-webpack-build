const chalk = require('chalk')
const nodemon = require('nodemon')
const nodemonConfig = require('../config/nodemon')

nodemon(nodemonConfig)
  .on('quit', process.exit)
  .on('restart', () => {
    console.log(chalk.cyan.bold('Compiling...'))
  })
