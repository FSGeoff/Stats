import {MatchReader} from "./MatchReader";
import {ConsoleReport} from "./reportTargets/ConsoleReport";
import {Summary} from "./Summary";
import {WinsAnalysis} from "./analyzers/WinsAnalysis";

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summary1 = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
const summary2 = Summary.winsAnalysisWithHtmlReport('Liverpool');

summary1.buildAndPrintReport(matchReader.matches);
summary2.buildAndPrintReport(matchReader.matches);

