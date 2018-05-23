#! /usr/bin/env node
const nodemon = require('nodemon');
const nodemonConfig = require('../nodemon.config');
const path = require('path');
const fs = require('fs');
const options = { env: 'development' };

process.on('SIGINT', process.exit);

nodemonConfig.env = {
  'NODE_ENV': 'development'
};

nodemon(nodemonConfig).on('quit', process.exit);
