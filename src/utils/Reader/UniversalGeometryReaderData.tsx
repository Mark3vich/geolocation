import { IDataAll } from "../../interfaces/Datas/IDataAll";
import { IDataSGKT } from "../../interfaces/Datas/IDataSGKT";
import DataReaderSGKT from "./SGK_T/DataReaderSGKT";
import { MESSAGE_ID, REPORT } from "../../consts/ConstsApp";
import { IDataNMEAFormatGPGGA } from "../../interfaces/Datas/IDataNMEAFormatGPGGA";
import { IDataNMEAFormatGPGSV } from "../../interfaces/Datas/IDataNMEAFormatGPGSV";
import { IDataNMEAFormatGPRMC } from "../../interfaces/Datas/IDataNMEAFormatGPRMC";
import DataReaderNMEAFormatGPGGA from "./NMEA/DataReaderNMEAFormatGPGGA";
import DataReaderNMEAFormatGPGSV from "./NMEA/DataReaderNMEAFormatGPGSV";
import DataReaderNMEAFormatGPRMC from "./NMEA/DataReaderNMEAFormatGPRMC";

class UniversalGeometryReaderData {
    private fileContent: string;
    constructor(fileContent: string) {
        this.fileContent = fileContent;
    }

    public universalGeometryReader(dataAll: IDataAll): null | IDataAll {
        const lines: string[] = this.fileContent.split('\n').map(line => line.trim());
        const words: string[][] = lines.map(line => line.split(',').map(word => word.trim()));

        let dataTextArraySGK_T: IDataSGKT[] = [];
        let dataTextArrayNMEA_GPGGA: IDataNMEAFormatGPGGA[] = [];
        let dataTextArrayNMEA_GPRMC: IDataNMEAFormatGPRMC[] = [];
        let dataTextArrayNMEA_GPGSV: IDataNMEAFormatGPGSV[] = [];

        for (let i = 0; i < words.length; i++) {
            if (words[i][0] === REPORT) {
                DataReaderSGKT.convertString(dataTextArraySGK_T, words[i]);
            } else if (words[i][0] === MESSAGE_ID[0]) {
                DataReaderNMEAFormatGPGGA.convertString(dataTextArrayNMEA_GPGGA, words[i]);
            } else if (words[i][0] === MESSAGE_ID[1]) {
                DataReaderNMEAFormatGPRMC.convertString(dataTextArrayNMEA_GPRMC, words[i]);
            } else if(words[i][0] === MESSAGE_ID[2]) {
                DataReaderNMEAFormatGPGSV.convertString(dataTextArrayNMEA_GPGSV, words[i]);
            }
        }

        if (dataTextArraySGK_T.length > 0) {
            dataAll.dataSGK_T = dataTextArraySGK_T;
        }
        if (dataTextArrayNMEA_GPGGA.length > 0) {
            dataAll.dataNMEA_GPGGA = dataTextArrayNMEA_GPGGA;
        }
        if (dataTextArrayNMEA_GPRMC.length > 0) {
            dataAll.dataNMEA_GPRMC = dataTextArrayNMEA_GPRMC;
        }
        if (dataTextArrayNMEA_GPGSV.length > 0) {
            dataAll.dataNMEA_GPGSV = dataTextArrayNMEA_GPGSV;
        }
        
        if (dataAll.dataSGK_T?.length > 0 || dataAll.dataNMEA_GPGGA?.length > 0 || 
            dataAll.dataNMEA_GPRMC?.length > 0 || dataAll.dataNMEA_GPGSV?.length > 0) {  
            return dataAll;
        }

        return null;
    }
}

export default UniversalGeometryReaderData;