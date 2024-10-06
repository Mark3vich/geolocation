import { Component, ReactNode } from "react";
import EvaluateStatisticalLocations from "../../../utils/Math/EvaluateStatisticalLocations";
import DataStoresVectorPNS from "../../../stores/DataStoresVectorPNS";

class AverageSquareDeviationsProperty extends Component {
    render(): ReactNode {
        if (!DataStoresVectorPNS.getVectorPNS()?.length) return null;
        const evaluateStatisticalLocations = EvaluateStatisticalLocations.calculateStatisticalCharacteristics(DataStoresVectorPNS.getVectorPNS());
        if (!evaluateStatisticalLocations) return null;
        return (
            <div className="mt-4">
                <h2>Среднеквадратичные отклонения широты, долготы, высоты:</h2>
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
        );
    }
}

export default AverageSquareDeviationsProperty;