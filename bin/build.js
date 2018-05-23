#! /usr/bin/env node
const paths = require('../config/paths');
const rmrf = require('rimraf');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const options = { env: 'production' }

process.on('SIGINT', process.exit);

const compiler = webpack(webpackConfig(options));

rmrf(paths.build, error => {
  if (error) {
    process.exitCode = 1;
  }

  compiler.run((error, stats) => {
    if (error || stats.hasErrors()) {
      process.exitCode = 1;
    }
  });
});
