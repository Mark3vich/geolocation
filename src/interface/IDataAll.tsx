import { IDataNMEA_GPGGA } from "./IDataNMEA_GPGGA";
import { IDataNMEA_GPRMC } from "./IDataNMEA_GPRMC";
import { IDataSGK_T } from "./IDataSGK_T";

export interface IDataAll {
    dataSGK_T: IDataSGK_T[],
    dataNMEA_GPGGA: IDataNMEA_GPGGA[],
    dataNMEA_GPRMC: IDataNMEA_GPRMC[]
}