import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchReader1';

export class WinsAnalysis implements Analyzer {
	constructor(public team: string) {}

	run(matches: MatchData[]): string {
		let wins = 0;

		for (let match of matches) {
			if (match[1] === 'Man United' && match[5] === MatchResult.Home) {
				wins++;
			} else if (match[2] === 'Man United' && match[5] === MatchResult.Away) {
				wins++;
			}
		}

		return `Team ${this.team} won ${wins} games`;
	}
}
