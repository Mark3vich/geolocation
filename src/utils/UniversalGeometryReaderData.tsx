import { MESSAGE_ID, REPORT } from "../consts/ConstsApp";
import { IDataNMEA_GPGGA } from "../interface/IDataNMEA_GPGGA";
import { IDataNMEA_GPRMC } from "../interface/IDataNMEA_GPRMC";
import { IDataSGK_T } from "../interface/IDataSGK_T";
import DataReaderNMEA_GPGGA from "./NMEA/DataReaderNMEA_GPGGA";
import DataReaderNMEA_GPRMC from "./NMEA/DataReaderNMEA_GPRMC";
import DataReaderSGK_T from "./SGK_T/DataReaderSGK_T";

class UniversalGeometryReaderData {
    private fileContent: string;
    constructor(fileContent: string) {
        this.fileContent = fileContent;
    }

    public universalGeometryReader(): null | IDataSGK_T[] | IDataNMEA_GPGGA[] | IDataNMEA_GPRMC[] {
        const lines:string[] = this.fileContent.split('\n').map(line => line.trim());
        const words:string[][] = lines.map(line => line.split(',').map(word => word.trim()));

        let dataTextArraySGK_T:      IDataSGK_T[] = [];
        let dataTextArrayNMEA_GPGGA: IDataNMEA_GPGGA[] = [];
        let dataTextArrayNMEA_GPRMC: IDataNMEA_GPRMC[] = [];

        for(let i = 0; i < words.length; i++) {
            if(words[i][0] === REPORT) {
                DataReaderSGK_T.convertString(dataTextArraySGK_T, words[i]); 
                // words[i][0] === MESSAGE_ID[2]
            } else if(words[i][0] === MESSAGE_ID[0]) {
                DataReaderNMEA_GPGGA.convertString(dataTextArrayNMEA_GPGGA, words[i]);
            }  else if(words[i][0] === MESSAGE_ID[1]) {
                DataReaderNMEA_GPRMC.convertString(dataTextArrayNMEA_GPRMC, words[i]);
            }
        }

        if(dataTextArraySGK_T.length > 0) {
            return dataTextArraySGK_T;
        } else if(dataTextArrayNMEA_GPGGA.length > 0) {
            return dataTextArrayNMEA_GPGGA;
        } else if(dataTextArrayNMEA_GPRMC.length > 0) {
            return dataTextArrayNMEA_GPRMC;
        }
        return null;
    }
}

export default UniversalGeometryReaderData;