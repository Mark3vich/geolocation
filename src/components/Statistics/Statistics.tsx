import { Component } from "react";
import AverageCoordinatesPropertyOfPNS from "./Statistics_Components/AverageCoordinatesPropertyOfPNS";
import DecisionDeviationsProperty from "./Statistics_Components/DecisionDeviationsProperty";
import AverageSquareDeviationsProperty from "./Statistics_Components/AverageSquareDeviationsProperty";
import ResultsEvaluationSCOProperty from "./Statistics_Components/ResultsEvaluationSCOProperty";

class Statistics extends Component {
    render() {
        return (
            <div className="container">
                <AverageCoordinatesPropertyOfPNS />
                <DecisionDeviationsProperty />
                <AverageSquareDeviationsProperty />
                <ResultsEvaluationSCOProperty />
            </div>
        );
    }
}

export default Statistics;
