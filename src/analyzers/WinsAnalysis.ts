import {Analyzer} from "../Summary";
import {MatchData} from "../MatchData";
import {MatchResult} from "../MatchResult";

export class WinsAnalysis implements Analyzer{
    constructor(public team: string) {};

    run(matches: MatchData []): string {
        let wins = 0;
        let homeWins = 0;
        let awayWins = 0;


        for (let match of matches) {
            if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
                wins++;
                homeWins++;
            } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
                wins++;
                awayWins++;
            }
        }
        return `
        Team ${this.team} won a total of ${wins} games.
        ${this.team} won ${homeWins} at home and ${awayWins} on the road`;
    }
}