import csvParser from "csv-parser";
import fs from "fs";
import {
  readManipulateAndPrepareLine,
} from "./helper";

export const streamFile = (filename: string) => {
  process.stdout.write("id,json,is_valid\n");

  fs.createReadStream(filename)
    .on("error", (error) => {
      console.log("An error occurred.", error);
    })
    .pipe(csvParser())
    .on("data", (row) => {
      const newRow = readManipulateAndPrepareLine(row);
      process.stdout.write(newRow);
    });
};
