const nodemon = require('nodemon');
const nodemonConfig = require('../config/nodemon');
const path = require('path');
const fs = require('fs');

nodemon(nodemonConfig).on('quit', process.exit);
