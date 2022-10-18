"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResult_1 = require("../MatchResult");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    ;
    run(matches) {
        let wins = 0;
        let homeWins = 0;
        let awayWins = 0;
        for (let match of matches) {
            if (match[1] === this.team && match[5] === MatchResult_1.MatchResult.HomeWin) {
                wins++;
                homeWins++;
            }
            else if (match[2] === this.team && match[5] === MatchResult_1.MatchResult.AwayWin) {
                wins++;
                awayWins++;
            }
        }
        return `
        Team ${this.team} won a total of ${wins} games.
        ${this.team} won ${homeWins} at home and ${awayWins} on the road`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
