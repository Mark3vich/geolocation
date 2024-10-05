import { Component } from "react";
import EvaluationResultsSCO from "../../../utils/Math/EvaluationResultsSCO";

class ResultsEvaluationSCOProperty extends Component {
    render() {
        const stats = EvaluationResultsSCO.calculateStatistics();
        if (stats.anomalyCount === 0) {
            return null;
        }
        return (
            <div className="mt-4">
                <h2>Результаты оценивания СКО:</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Параметр</th>
                            <th scope="col">СКО</th>
                            <th scope="col">Корреляция</th>
                            <th scope="col">Аномалии</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Широта</td>
                            <td>{stats.latitudeStdDev.toFixed(4)}</td>
                            <td>{stats.correlationMatrix[0][0].toFixed(4)}</td>
                            <td>{stats.anomalyCount}</td>
                        </tr>
                        <tr>
                            <td>Долгота</td>
                            <td>{stats.longitudeStdDev.toFixed(4)}</td>
                            <td>{stats.correlationMatrix[0][1].toFixed(4)}</td>
                            <td>{stats.anomalyCount}</td>
                        </tr>
                        <tr>
                            <td>Высота</td>
                            <td>{stats.heightStdDev.toFixed(4)}</td>
                            <td>{stats.correlationMatrix[1][2].toFixed(4)}</td>
                            <td>{stats.anomalyCount}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ResultsEvaluationSCOProperty