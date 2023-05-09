import { Command } from "commander";

const program = new Command();

const fs = require('fs');

program
  .version('1.0.0')
  .description('CLI for file content manipulation')
  .arguments('<inputFile>')
  .action((inputFile) => {
    process.stdout.write(inputFile);
  });

program.parse(process.argv);