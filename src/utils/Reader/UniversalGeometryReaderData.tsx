import { IDataAll } from "../../interfaces/Datas/IDataAll";
import { IDataSGKT } from "../../interfaces/Datas/IDataSGKT";
import DataReaderSGK_T from "./SGK_T/DataReaderSGK_T";
import { MESSAGE_ID, REPORT } from "../../consts/ConstsApp";
import { IDataNMEAFormatGPGGA } from "../../interfaces/Datas/IDataNMEAFormatGPGGA";
import { IDataNMEAFormatGPGSV } from "../../interfaces/Datas/IDataNMEAFormatGPGSV";
import { IDataNMEAFormatGPRMC } from "../../interfaces/Datas/IDataNMEAFormatGPRMC";
import DataReaderNMEA_GPGGA from "./NMEA/DataReaderNMEA_GPGGA";
import DataReaderNMEA_GPGSV from "./NMEA/DataReaderNMEA_GPGSV";
import DataReaderNMEA_GPRMC from "./NMEA/DataReaderNMEA_GPRMC";

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
                DataReaderSGK_T.convertString(dataTextArraySGK_T, words[i]);
            } else if (words[i][0] === MESSAGE_ID[0]) {
                DataReaderNMEA_GPGGA.convertString(dataTextArrayNMEA_GPGGA, words[i]);
            } else if (words[i][0] === MESSAGE_ID[1]) {
                DataReaderNMEA_GPRMC.convertString(dataTextArrayNMEA_GPRMC, words[i]);
            } else if(words[i][0] === MESSAGE_ID[2]) {
                DataReaderNMEA_GPGSV.convertString(dataTextArrayNMEA_GPGSV, words[i]);
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