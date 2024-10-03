import DataStoresVectorPNS from "../../stores/DataStoresVectorPNS";
import StatisticsUtils from "./StatisticsUtils";

class EvaluationResultsSCO {
    public static calculateStatistics() {
        const data = DataStoresVectorPNS.getDataText();

        // Вычисляем СКО по каждому параметру (широта, долгота, высота)
        const latitudes = data.map((coord) => Number(coord.latitude));
        const longitudes = data.map((coord) => Number(coord.longitude));
        const heights = data.map((coord) => Number(coord.altitude));

        const latitudeStdDev = StatisticsUtils.calculateStandardDeviation(latitudes);
        const longitudeStdDev = StatisticsUtils.calculateStandardDeviation(longitudes);
        const heightStdDev = StatisticsUtils.calculateStandardDeviation(heights);

        // Вычисляем корреляционные матрицы для широты, долготы и высоты
        const correlationMatrix = StatisticsUtils.calculateCorrelationMatrix(latitudes, longitudes, heights);

        // Вычисляем количество аномальных отклонений (например, больше чем 3 СКО)
        const anomalyCount = data.filter(
            (coord) =>
                Math.abs(Number(coord.latitude) - latitudes[0]) > 3 * latitudeStdDev ||
                Math.abs(Number(coord.longitude) - longitudes[0]) > 3 * longitudeStdDev ||
                Math.abs(Number(coord.altitude) - heights[0]) > 3 * heightStdDev
        ).length;

        return {
            latitudeStdDev,
            longitudeStdDev,
            heightStdDev,
            correlationMatrix,
            anomalyCount,
        };
    }

}

export default EvaluationResultsSCO;