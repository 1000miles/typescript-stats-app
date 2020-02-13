import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  // run() required by interface Analyzer
  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      // If name is `Man United` and homewin === 'H
      if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        wins++;
      }
    }

    console.log(`Team ${this.team} won ${wins} games!`)

    return `Team ${this.team} won ${wins} games!!!`
  }
}
