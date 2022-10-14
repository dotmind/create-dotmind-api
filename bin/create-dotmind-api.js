#! /usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');
const chalk = require('chalk');
const lib = require('..');

const consoles = lib.consoles;
const createDotmindApi = lib.createDotmindApi;

let projectName;

program
  .version(pkg.version)
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')} [options]`)
  .action(function (name) {
    projectName = name
  })
  .requiredOption('-e, --example <example-name>', consoles.example())
  .on('--help', consoles.help)
  .parse(process.argv);

const example = program.opts().example;

createDotmindApi({
  projectName,
  example
});
