const nodemon = require('nodemon');
const nodemonConfig = require('../config/nodemon');

nodemon(nodemonConfig).on('quit', process.exit);
