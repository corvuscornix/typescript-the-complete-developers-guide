import { MatchReader } from './MatchReader1';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches);
