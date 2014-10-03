#!/usr/bin/env node
'use strict';


/**
 * Dependencies
 */
var pkg            = require('../package.json');
var semverDate = require('..');
var logSymbols = require('log-symbols');
var argv = process.argv.slice(2);
var input = argv[0];
var options = {};


function help() {
  console.log([
    '',
    '  Usage: <semverDate> [options]',
    '',
    '  ' + pkg.description,
    '',
    '  Options',
    '    -v, --version',
    '    -r, --revision'
  ].join('\n'));
}

if (argv.indexOf('--help') !== -1) {
  help();
  return;
}

if (argv.indexOf('--revision') !== -1){
  options.revision = argv[argv.indexOf('--revision') + 1];
}

if (argv.indexOf('-r') !== -1){
  options.revision = argv[argv.indexOf('-r') + 1];
}

if (argv.indexOf('--version') !== -1) {
  options.version = argv[argv.indexOf('--version') + 1];
}

if (argv.indexOf('-v') !== -1) {
  options.version = argv[argv.indexOf('-v') + 1];
}

console.log(semverDate(options));
