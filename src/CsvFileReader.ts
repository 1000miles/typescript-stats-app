import fs from "fs";

export abstract class CsvFileReader<T> {
  // Initiliaze data as two dimensional data of strings
  // Note: We only use 1x brackets as MatchData[] here since Tuple MatchData is already an array
  data: T[] = [];

  constructor(public filename: string) {};

  // Helper
  abstract mapRow(row: string[]): T;

  read(): void {
    //console.log(this.data);
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8'
      })
      .split('\n') // Split the string after new line
      // Map through row of strings and return an array of strings
      .map(
        (row: string): string[] => {
          return row.split(','); /* Split each row at ',' and return*/
        }
      )
      // Map through row of strings from football.csv
      // Return an array with Date, string, number or enum MatchResult
      // !FIXME: TypeError: undefined is not a function
      .map(this.mapRow) // Just passing function name, no function invokation
  }
}
