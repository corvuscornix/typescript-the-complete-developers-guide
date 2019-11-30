import fs from 'fs';

export interface Reader {
  data: string[][];
  read(): void;
}

// Implementation 1 using composition

export class CsvFileReader implements Reader {
  data: string[][] = [];
  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string): any => {
        return row.split(',');
      });
  }
}
