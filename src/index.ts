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


//  console.log(matches);

// const homeWin = 'H';
// const awayWin = 'A';
// const draw = 'D';

// If props of info in an object chances are less that dataset are being removed when unused
// const MatchResult = {
//   HomeWin: 'H',
//   AwayWin: 'A',
//   Draw: 'D'
// }

// enum - enumerration
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

// Way 1:
// MatchResult.AwayWin
// MatchResult.HomeWin
// MatchResult.Draw

// Way 2 to get MatchResult data
// const printMatchResult = (): MatchResult => {
//   if (match[5] === 'H') {
//     return MatchResult.HomeWin;
//   }

//   return MatchResult.AwayWin;
// }

let manUnitedWins = 0;

for (let match of matches) {
  // If name is `Man United` and homewin === 'H
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games.`);
