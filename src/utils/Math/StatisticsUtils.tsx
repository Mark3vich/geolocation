class StatisticsUtils {
    public static calculateStandardDeviation(data: number[]): number {
        const mean = data.reduce((a, b) => a + b, 0) / data.length;
        const variance = data.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / data.length;
        return Math.sqrt(variance);
    }

    public static calculateCorrelationMatrix(latitudes: number[], longitudes: number[], heights: number[]): number[][] {
        const mean = (arr: number[]) => arr.reduce((a, b) => a + b, 0) / arr.length;

        const covariance = (arr1: number[], arr2: number[]) => {
            const mean1 = mean(arr1);
            const mean2 = mean(arr2);
            return arr1
                .map((val, idx) => (val - mean1) * (arr2[idx] - mean2))
                .reduce((a, b) => a + b, 0) / (arr1.length - 1);
        };

        const stdDev = (arr: number[]) => Math.sqrt(covariance(arr, arr));

        const correlation = (arr1: number[], arr2: number[]) =>
            covariance(arr1, arr2) / (stdDev(arr1) * stdDev(arr2));

        return [
            [1, correlation(latitudes, longitudes), correlation(latitudes, heights)],
            [correlation(longitudes, latitudes), 1, correlation(longitudes, heights)],
            [correlation(heights, latitudes), correlation(heights, longitudes), 1],
        ];
    }
}

export default StatisticsUtils;