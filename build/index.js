"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
let manUnitedWins = 0;
let manHomeWins = 0;
let manAwayWins = 0;
var MatchResults;
(function (MatchResults) {
    MatchResults["HomeWin"] = "H";
    MatchResults["AwayWin"] = "A";
    MatchResults["Draw"] = "D";
})(MatchResults || (MatchResults = {}));
;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin) {
        manUnitedWins++;
        manHomeWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResults.AwayWin) {
        manUnitedWins++;
        manAwayWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
console.log(`They won ${manHomeWins} at home`);
console.log(`They won ${manAwayWins} away`);
