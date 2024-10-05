import { IDataNMEAFormatGPGGA } from "./IDataNMEAFormatGPGGA";
import { IDataNMEAFormatGPGSV } from "./IDataNMEAFormatGPGSV";
import { IDataNMEAFormatGPRMC } from "./IDataNMEAFormatGPRMC";
import { IDataSGKT } from "./IDataSGKT";

export interface IDataAll {
    dataSGK_T: IDataSGKT[],
    dataNMEA_GPGGA: IDataNMEAFormatGPGGA[],
    dataNMEA_GPRMC: IDataNMEAFormatGPRMC[],
    dataNMEA_GPGSV: IDataNMEAFormatGPGSV[],
}