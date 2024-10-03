import { Component } from "react";
import DataStoresVectorPNS from "../../stores/DataStoresVectorPNS";
import AverageCoordinatesOfPNS from "../../utils/Math/AverageCoordinatesOfPNS";
import DeviationsCoordinates from "../../utils/Math/DeviationsCoordinates";
import EvaluateStatisticalLocations from "../../utils/Math/EvaluateStatisticalLocations";
import EvaluationResultsSCO from "../../utils/Math/EvaluationResultsSCO";

class Statistics extends Component {

    render() {
        return (
            <div className="container">
                {DataStoresVectorPNS.getDataText()?.length ? (
                    <div className="mt-4">
                        <h2>Усреднённые координаты ПНС(Приёмником навигационных сигналов):</h2>
                        <div>
                            {(() => {
                                const averageCoordinates = AverageCoordinatesOfPNS.calculateAverageCoordinates(DataStoresVectorPNS.getDataText());
                                return (
                                    <div>
                                        <p>Широта: <b>{averageCoordinates.latitude}</b></p>
                                        <p>Долгота: <b>{averageCoordinates.longitude}</b></p>
                                        <p>Высота: <b>{averageCoordinates.height}</b></p>
                                    </div>
                                );
                            })()}
                        </div>
                    </div>
                ) : null}
                {DataStoresVectorPNS.getDataText()?.length ? (
                    <div className="mt-4">
                        <h2>Отклонений решений полученных двумя приёмниками навигационных сигналов:</h2>
                        {(() => {
                            const devation1 = DataStoresVectorPNS.getVectorPNS()[0];
                            const devation2 = DataStoresVectorPNS.getVectorPNS()[1];
                            const devationResult = DeviationsCoordinates.calculateDeviations(devation1, devation2);
                            return (
                                <div>
                                    <p>Разница в широте: <b>{devationResult.latitude}</b></p>
                                    <p>Разница в долготе: <b>{devationResult.longitude}</b></p>
                                    <p>Разница в высоте: <b>{devationResult.height}</b></p>
                                </div>
                            );
                        })()}
                    </div>
                ) : null}
                {DataStoresVectorPNS.getDataText()?.length ? (
                    <div className="mt-4">
                        <h2>Средние квадратические отклонения:</h2>
                        {(() => {
                            const evaluateStatisticalLocations = EvaluateStatisticalLocations.calculateStatisticalCharacteristics(DataStoresVectorPNS.getVectorPNS());
                            return (
                                <div>
                                    <p>Среднее отклонение широты: <b>{evaluateStatisticalLocations.averageLatitude}</b></p>
                                    <p>Среднее отклонение долготы: <b>{evaluateStatisticalLocations.averageLongitude}</b></p>
                                    <p>Среднее отклонение высоты: <b>{evaluateStatisticalLocations.averageAltitude}</b></p>
                                    <p>Среднеквадратичное отклонение широты: <b>{evaluateStatisticalLocations.latitudeSD}</b></p>
                                    <p>Среднеквадратичное отклонение долготы: <b>{evaluateStatisticalLocations.longitudeSD}</b></p>
                                    <p>Среднеквадратичное отклонение высоты: <b>{evaluateStatisticalLocations.altitudeSD}</b></p>
                                    <p>Оценка максимальных отклонений широты: <b>{evaluateStatisticalLocations.maxLatitudeDeviation}</b></p>
                                    <p>Оценка максимальных отклонений долготы: <b>{evaluateStatisticalLocations.maxLongitudeDeviation}</b></p>
                                    <p>Оценка максимальных отклонений высоты: <b>{evaluateStatisticalLocations.maxAltitudeDeviation}</b></p>
                                    <p>Оценка минимальных отклонений широты: <b>{evaluateStatisticalLocations.minLatitudeDeviation}</b></p>
                                    <p>Оценка минимальных отклонений долготы: <b>{evaluateStatisticalLocations.minLongitudeDeviation}</b></p>
                                    <p>Оценка минимальных отклонений высоты: <b>{evaluateStatisticalLocations.minAltitudeDeviation}</b></p>
                                </div>
                            )
                        })()}
                    </div>
                ) : null}
                {DataStoresVectorPNS.getDataText()?.length ? (
                    <div className="mt-4">
                        <h2>Результаты оценивания СКО:</h2>
                        {(() => {
                            const stats = EvaluationResultsSCO.calculateStatistics();
                            return (
                                <div>
                                    <h2>Результаты оценивания</h2>
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
                        })()}
                    </div>
                ) : null}
            </div>
        );
    }
}

export default Statistics;
