import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

// import { CsvFileReader } from './CsvFileReader';
// import { WinsAnalysis } from './analyzers/WinsAnalysis';
// import { HtmlReport } from './reportTargets/HtmlReport';

// Create an object that satisfies the 'DataReader' interface
//const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader add pass in something satifying
// the 'DataReader' interface
//OLD: const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

//console.log(matchReader);
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
