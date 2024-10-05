import { IStatisticalCharacteristics } from "../../interfaces/IStatisticalCharacteristics";
import { IVectorPNS } from "../../interfaces/IVectorPNS";
import { dataObjectEvaluateStatisticalLocations } from "../../object/DataObjectEvaluateStatisticalLocations";

class EvaluateStatisticalLocations {
    public static calculateStatisticalCharacteristics(coordinatesList: IVectorPNS[]): IStatisticalCharacteristics {
        let statisticsData: IStatisticalCharacteristics = { ...dataObjectEvaluateStatisticalLocations }
        const N: number = coordinatesList.length;
        if (N === 0) {
            throw new Error('Массив координат пуст');
        }

        // Вычисляем средние значения
        const averageLatitude = coordinatesList.reduce((sum, coord) => sum + Number(coord.latitude), 0) / N;
        const averageLongitude = coordinatesList.reduce((sum, coord) => sum + Number(coord.longitude), 0) / N;
        const averageAltitude = coordinatesList.reduce((sum, coord) => sum + Number(coord.height), 0) / N;

        // Вычисляем среднеквадратичные отклонения
        const latitudeSD = Math.sqrt(coordinatesList.reduce((sum, coord) => sum + Math.pow(Number(coord.latitude) - averageLatitude, 2), 0) / N);
        const longitudeSD = Math.sqrt(coordinatesList.reduce((sum, coord) => sum + Math.pow(Number(coord.longitude) - averageLongitude, 2), 0) / N);
        const altitudeSD = Math.sqrt(coordinatesList.reduce((sum, coord) => sum + Math.pow(Number(coord.height) - averageAltitude, 2), 0) / N);

        // Оценка максимальных и минимальных отклонений
        const maxLatitudeDeviation = Math.max(...coordinatesList.map(coord => Number(coord.latitude))) - averageLatitude;
        const minLatitudeDeviation = Math.min(...coordinatesList.map(coord => Number(coord.latitude))) - averageLatitude;
        const maxLongitudeDeviation = Math.max(...coordinatesList.map(coord => Number(coord.longitude))) - averageLongitude;
        const minLongitudeDeviation = Math.min(...coordinatesList.map(coord => Number(coord.longitude))) - averageLongitude;
        const maxAltitudeDeviation = Math.max(...coordinatesList.map(coord => Number(coord.height))) - averageAltitude;
        const minAltitudeDeviation = Math.min(...coordinatesList.map(coord => Number(coord.height))) - averageAltitude;

        statisticsData.averageLatitude = averageLatitude;
        statisticsData.averageLongitude = averageLongitude;
        statisticsData.averageAltitude = averageAltitude;
        statisticsData.latitudeSD = latitudeSD;
        statisticsData.longitudeSD = longitudeSD;
        statisticsData.altitudeSD = altitudeSD;
        statisticsData.maxLatitudeDeviation = maxLatitudeDeviation;
        statisticsData.minLatitudeDeviation = minLatitudeDeviation;
        statisticsData.maxLongitudeDeviation = maxLongitudeDeviation;
        statisticsData.minLongitudeDeviation = minLongitudeDeviation;
        statisticsData.maxAltitudeDeviation = maxAltitudeDeviation;
        statisticsData.minAltitudeDeviation = minAltitudeDeviation;

        return statisticsData;
    }
}

export default EvaluateStatisticalLocations;