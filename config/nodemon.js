const paths = require('./paths');

module.exports = {
  script: `${paths.server}/index.js`,
  watch: [paths.server],
  // ignore: [paths.app]
};
