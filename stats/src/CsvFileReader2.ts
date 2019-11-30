import fs from 'fs';

// Implementation 2 using abstract class and generics
export abstract class CsvFileReader<T> {
  data: T[] = [];
  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string): any => {
        return row.split(',');
      })
      .map(this.mapRow);
  }

  abstract mapRow(row: string[]): T;
}
