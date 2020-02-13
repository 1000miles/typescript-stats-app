"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// import { CsvFileReader } from './CsvFileReader';
// import { WinsAnalysis } from './analyzers/WinsAnalysis';
// import { HtmlReport } from './reportTargets/HtmlReport';
// Create an object that satisfies the 'DataReader' interface
//const csvFileReader = new CsvFileReader('football.csv');
// Create an instance of MatchReader add pass in something satifying
// the 'DataReader' interface
//OLD: const matchReader = new MatchReader(csvFileReader);
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
//console.log(matchReader);
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
