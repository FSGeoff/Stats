"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const ConsoleReport_1 = require("./reportTargets/ConsoleReport");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const Summary_1 = require("./Summary");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
//Create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
//Create an instance of MatchReader and pass in something
//satisfying the 'DataReader' interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summary1 = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
const summary2 = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new HtmlReport_1.HtmlReport());
summary1.buildAndPrintReport(matchReader.matches);
summary2.buildAndPrintReport(matchReader.matches);
