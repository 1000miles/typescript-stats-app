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
  });

// console.log(matches);

let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games.`);
