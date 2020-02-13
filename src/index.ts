import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader add pass in something satifying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

//console.log(matchReader);

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new HtmlReport()
);

summary.buildAndPrintReport(matchReader.matches);
