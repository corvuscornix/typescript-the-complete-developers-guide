import { dateStringToDate } from './utils';
import { Reader } from './CsvFileReader1';
import { MatchData } from './MatchData';

export enum MatchResult {
  Home = 'H',
  Away = 'A',
  Draw = 'D'
}

export class MatchReader {
  matches: MatchData[] = [];
  constructor(public reader: Reader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
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
    );
  }
}
