import { ICoordinatesNMEA } from "./ICoordinatesNMEA";

export interface IDataNMEA_Coordinates<T extends ICoordinatesNMEA> 
       extends Pick<T, 'latitude' | 'longitude' | 'altitude'> {}