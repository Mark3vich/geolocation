interface ICoordinates {
    latitude: string;
    longitude: string;
    altitude: number | null;
} 
export interface IDataNMEA_Coordinates<T extends ICoordinates> 
       extends Pick<T, 'latitude' | 'longitude' | 'altitude'> {}