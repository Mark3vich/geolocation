import { IDataNMEAFormatGPGGA } from "../Datas/IDataNMEAFormatGPGGA";
import { IDataNMEAFormatGPGSV } from "../Datas/IDataNMEAFormatGPGSV";
import { IDataNMEAFormatGPRMC } from "../Datas/IDataNMEAFormatGPRMC";
import { IDataSGKT } from "../Datas/IDataSGKT";

export interface IDataAll {
    dataSGK_T: IDataSGKT[],
    dataNMEA_GPGGA: IDataNMEAFormatGPGGA[],
    dataNMEA_GPRMC: IDataNMEAFormatGPRMC[],
    dataNMEA_GPGSV: IDataNMEAFormatGPGSV[],
}