#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();

program
  .name('gendiff')
  .version('1.0.0');

program.parse();
