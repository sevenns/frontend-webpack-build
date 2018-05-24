const paths = require('./paths');

module.exports = {
  script: `${paths.server}/index.js`,
  watch: [paths.server, paths.views],
  ext: 'js,json,pug'
  // ignore: [paths.app]
};
