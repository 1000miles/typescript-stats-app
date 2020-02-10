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
console.log(matches);

const homeWin = 'H';
const awayWin = 'A';
const draw = 'D';

let manUnitedWins = 0;

for (let match of matches) {
  // If name is `Man United` and homewin === 'H
  if (match[1] === 'Man United' && match[5] === homeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === awayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games.`);
