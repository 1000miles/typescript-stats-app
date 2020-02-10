import{ CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();

console.log(reader.data);

// enum - enumerration
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

// const printMatchResult = (): MatchResult => {
//   if (match[5] === 'H') {
//     return MatchResult.HomeWin;
//   }

//   return MatchResult.AwayWin;
// }

let manUnitedWins = 0;

for (let match of reader.data) {
  // If name is `Man United` and homewin === 'H
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games.`);
