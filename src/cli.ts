import { Command } from "commander";
import { streamFile } from "./fileStreamer";

const program = new Command();

program
  .version("1.0.0")
  .description("CLI for file content manipulation")
  .arguments("<inputFile>")
  .action((inputFile) => {
    streamFile(inputFile);
  });

program.parse(process.argv);
