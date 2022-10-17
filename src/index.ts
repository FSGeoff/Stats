import {CsvFileReader} from "./CsvFileReader";

const reader = new CsvFileReader('football.csv');
reader.read();

let manUnitedWins = 0;
let manHomeWins = 0;
let manAwayWins = 0;

enum MatchResults {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
};

for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin) {
        manUnitedWins++;
        manHomeWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResults.AwayWin) {
        manUnitedWins++;
        manAwayWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games`);
console.log(`They won ${manHomeWins} at home`)
console.log(`They won ${manAwayWins} away`)