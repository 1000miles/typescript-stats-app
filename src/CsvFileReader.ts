import fs from "fs";
import { MatchResult } from './MatchResult';

// Tuple
type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
]

export abstract class CsvFileReader {
  // Initiliaze data as two dimensional data of strings
  // Note: We only use 1x brackets as MatchData[] here since Tuple MatchData is already an array
  data: MatchData[] = [];

  constructor(public filename: string) {};

  // Helper
  abstract mapRow(row: string[]): MatchData;

  read(): void {
    console.log(this.data);
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8'
      })
      .split('\n') // Split the string after new line
      // Map through row of strings and return an array of strings
      .map(
        (row: string): string[] => {
          // Split each row at ',' and return
          return row.split(',');
        }
      )
      // Map through row of strings from football.csv
      // Return an array with Date, string, number or enum MatchResult
      .map(this.mapRow) // Just passing function name, no function invokation
  }
}
