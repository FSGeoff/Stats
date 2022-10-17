import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
    encoding: 'utf-8'
}).split('\n')
    .map((row: string): string[] => {
        return row.split(',');
    })
let manUnitedWins = 0;
let manHomeWins = 0;
let manAwayWins = 0;

for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === 'H') {
        manUnitedWins++;
        manHomeWins++;
    } else if (match[2] === 'Man United' && match[5] === 'A') {
        manUnitedWins++;
        manAwayWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games`);
console.log(`They won ${manHomeWins} at home`)
console.log(`They won ${manAwayWins} away`)