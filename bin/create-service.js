#! /usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');
const chalk = require('chalk');
const lib = require('..');

const consoles = lib.consoles;
const createService = lib.createService;

let serviceName;

program
  .version(pkg.version)
  .arguments('<service-directory>')
  .usage(`${chalk.green('<service-directory>')} [options]`)
  .action(function (name) {
    serviceName = name;
  })
  .allowUnknownOption()
  .on('--help', consoles.help)
  .parse(process.argv);

createService({
  serviceName
});
