const paths = require('./paths');

module.exports = {
  script: `${paths.server}/index.js`,
  watch: [paths.server],
  ext: 'js,json'
};
