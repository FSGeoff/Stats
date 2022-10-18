import {MatchReader} from "./MatchReader";
import {CsvFileReader} from "./CsvFileReader";
import {ConsoleReport} from "./reportTargets/ConsoleReport";
import {WinsAnalysis} from "./analyzers/WinsAnalysis";
import {Summary} from "./Summary";
import {HtmlReport} from "./reportTargets/HtmlReport";
import {match} from "assert";

//Create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader('football.csv');

//Create an instance of MatchReader and pass in something
//satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary1 = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
const summary2 = new Summary(new WinsAnalysis('Man United'), new HtmlReport());

summary1.buildAndPrintReport(matchReader.matches);
summary2.buildAndPrintReport(matchReader.matches);

