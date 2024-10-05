import { ICoordinatesNMEA } from "./ICoordinatesNMEA";

export interface IDataNMEAFormatCoordinates<T extends ICoordinatesNMEA> 
       extends Pick<T, 'latitude' | 'longitude' | 'altitude'> {}