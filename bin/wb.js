#!/usr/bin/env node
const path = require('path');
const spawn = require('cross-spawn');
const commands = new Set(['dev', 'build', 'start']);
const args = process.argv;
const cmd = commands.has(args[2]) ? args[2] : 'dev';
const bin = path.resolve(path.join(__dirname, `${cmd}.js`));
const proc = spawn(bin, args, { stdio: 'inherit'});

proc.on('close', (code) => process.exit(code));
proc.on('error', error => {
  console.error(error);
  process.exit(1);
});
