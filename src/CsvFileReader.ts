import fs from "fs";

export class CsvFileReader {
  // Initiliaze data as two dimensional data of strings
  data: string[][] = [];

  constructor(public filename: string) {};

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8'
      })
      .split('\n') // Split the string after new line
      // Map through row of strings and return an array of strings
      .map((row: string): string[] => {
        // Split each row at ',' and return
        return row.split(',');
      });
  }
}
