import { MESSAGE_ID, REPORT } from "../consts/ConstsApp";
import { IDataTextNMEA } from "../interface/IDataTextNMEA";
import { IDataTextSGK_T } from "../interface/IDataTextSGK_T";
import DataReaderNMEA from "./NMEA/DataReaderNMEA";
import DataReaderSGK_T from "./SGK_T/DataReaderSGK_T";

class UniversalGeometryReaderData {
    private fileContent: string;
    constructor(fileContent: string) {
        this.fileContent = fileContent;
    }

    public universalGeometryReader(): null | IDataTextSGK_T[] | IDataTextNMEA[] {
        const lines:string[] = this.fileContent.split('\n').map(line => line.trim());
        const words:string[][] = lines.map(line => line.split(',').map(word => word.trim()));

        let dataTextArraySGK_T: IDataTextSGK_T[] = [];
        let dataTextArrayNMEA:  IDataTextNMEA[] = [];

        for(let i = 0; i < words.length; i++) {
            if(words[i][0] === REPORT) {
                DataReaderSGK_T.convertString(dataTextArraySGK_T, words[i]); 
            } else if(words[i][0] === MESSAGE_ID) {
                DataReaderNMEA.convertString(dataTextArrayNMEA, words[i]);
            }  
        }

        if(dataTextArraySGK_T.length > 0) {
            return dataTextArraySGK_T;
        } else if(dataTextArrayNMEA.length > 0) {
            return dataTextArrayNMEA;
        }
        return null;
    }
}

export default UniversalGeometryReaderData;