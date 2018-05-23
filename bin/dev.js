#! /usr/bin/env node
const nodemon = require('nodemon');
const nodemonConfig = require('../config/nodemon');
const path = require('path');
const fs = require('fs');

process.on('SIGINT', process.exit);

nodemon(nodemonConfig).on('quit', process.exit);
