import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    // map() creates a new array and therefore needs to be assigned to a variable
    this.matches = this.reader.data.map((row: string[]): MatchData => {
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
