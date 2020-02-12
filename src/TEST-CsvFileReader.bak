import fs from "fs";
import { dateStringToDate } from './utils';
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

export class CsvFileReader {
  // Initiliaze data as two dimensional data of strings
  // Note: We only use 1x brackets as MatchData[] here since Tuple MatchData is already an array
  data: MatchData[] = [];

  constructor(public filename: string) {};

  read(): void {
    console.log(this.data);
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8'
      })
      .split('\n') // Split the string after new line
      // Map through row of strings and return an array of strings
      .map((row: string): string[] => {
        // Split each row at ',' and return
        return row.split(',');
      })
      // Map through row of strings from football.csv
      // Return an array with Date, string, number or enum MatchResult
      .map((row: string[]): MatchData => {
        return [
          // Take the first element of each row and return
          dateStringToDate(row[0]), // Example: 2018-08-09T22:00:00.000Z
          row[1], // Example: 'Man United'
          row[2], // Example: 'Leicester'
          parseInt(row[3]), // Example: '2'
          parseInt(row[4]), // Example: '1'
          // Convert string into matchable enum
          // MatchResult => Overwrite with Type Assertion
          row[5] as MatchResult, // 'H', 'A', 'D'
          row[6]
        ]
      })
  }
}
