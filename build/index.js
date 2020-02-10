"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var matches = fs_1.default
    .readFileSync('football.csv', {
    encoding: 'utf-8'
})
    .split('\n') // Split the string after new line
    // Map through row of strings and return an array of strings
    .map(function (row) {
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
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
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
var manUnitedWins = 0;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    // If name is `Man United` and homewin === 'H
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games.");
