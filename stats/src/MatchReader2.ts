import { CsvFileReader } from './CsvFileReader2';
import { dateStringToDate } from './utils';
import { MatchData } from './MatchData';
import { MatchResult } from './MatchReader1';

export class MatchReader {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[3]),
      row[5] as MatchResult,
      row[6]
    ];
  }
}
