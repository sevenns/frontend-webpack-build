const paths = require('../config/paths');
const rmrf = require('rimraf');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack/build');
const compiler = webpack(webpackConfig);

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
