export interface IStatisticalCharacteristics {
    averageLatitude: number;
    averageLongitude: number;
    averageAltitude: number;
    latitudeSD: number;  // Среднеквадратичное отклонение по широте
    longitudeSD: number; // Среднеквадратичное отклонение по долготе
    altitudeSD: number;  // Среднеквадратичное отклонение по высоте
    maxLatitudeDeviation: number;
    minLatitudeDeviation: number;
    maxLongitudeDeviation: number;
    minLongitudeDeviation: number;
    maxAltitudeDeviation: number;
    minAltitudeDeviation: number;
}