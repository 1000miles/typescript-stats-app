import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8'
  })
  .split('\n') // Split the string after new line
  // Map through row of strings and return an array of strings
  .map((row: string): string[] => {
    // Split each row at ',' and return
    return row.split(',');
  })
console.log(matches);
