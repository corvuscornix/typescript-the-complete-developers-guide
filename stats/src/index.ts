import { CsvFileReader } from './CsvFileReader1';
import { MatchReader, MatchResult } from './MatchReader1';

const csvReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvReader);
matchReader.load();
let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.Home) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.Away) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins}`);
