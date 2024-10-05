import { EAST, NORTH, SOUTH, WEST } from "../../../consts/ConstsApp";
import { IDataSGKT } from "../../../interfaces/IDataSGKT";
import { dataObjectSGK_T } from "../../../object/DataObjectSGK_T";
import ConvertDataSGK_T from "./ConvertDataSGK_T";

class DataReaderSGK_T {    
    public static convertString(dataTextArray: IDataSGKT[], words: string[]): void {
        dataObjectSGK_T.report = words[0];
        let dataText: IDataSGKT = { ...dataObjectSGK_T };
        
        if (ConvertDataSGK_T.checkingForTheNumberOfDigits(words[1], 4)) {
            dataText.device_id = words[1];
        }
        if(ConvertDataSGK_T.checkingForTheNumberOfDigits(words[2], 6)) {
            dataText.date = ConvertDataSGK_T.convertDate(words[2]);
        }
        if(ConvertDataSGK_T.checkingForTheNumberOfDigits(words[3], 6)) {
            dataText.time = ConvertDataSGK_T.convertTime(words[3]);
        }
        if(ConvertDataSGK_T.checkingSlice(words[4], 5, 4)) {
            dataText.latitude = words[4]; 
        }
        if(words[5] === NORTH || words[5] === SOUTH) {
            dataText.n_s = words[5];
        }
        if(ConvertDataSGK_T.checkingSlice(words[6], 5, 4)) {
            dataText.longitude = words[6]; 
        }
        if(words[7] === EAST || words[7] === WEST) {
            dataText.e_w = words[7];
        }
        if(ConvertDataSGK_T.isInteger(words[8])) {
            dataText.speed = Number(words[8]);
        }
        if(ConvertDataSGK_T.isInteger(words[9])) {
            dataText.course = Number(words[9]);
        }
        if(ConvertDataSGK_T.isInteger(words[10])) {
            dataText.altitude = Number(words[10]);
        }
        if(ConvertDataSGK_T.isInteger(words[11])) {
            dataText.odometer = Number(words[11]);
        }
        if(ConvertDataSGK_T.checkingForTheNumberOfDigits(words[12], 3)) {
            dataText.io_status = Number(words[12]);
        }
        if(ConvertDataSGK_T.checkingForTheNumberOfDigits(words[13], 2)) {
            dataText.event_id = Number(words[13]);
        }
        if(ConvertDataSGK_T.checkingSlice(words[14], 2, 2)) {
            dataText.ain1 = Number(words[14]);
        }
        if(ConvertDataSGK_T.checkingForTheNumberOfDigits(words[15], 1)) {
            dataText.fix_mode = Number(words[15]);
        }
        if(ConvertDataSGK_T.checkingForTheNumberOfDigits(words[16], 2)) {
            dataText.glonass_sat_no = Number(words[16]);
        }
        if(ConvertDataSGK_T.checkingForTheNumberOfDigits(words[17], 2)) {
            dataText.glonass_sat_no = Number(words[17]);
        }
        if(ConvertDataSGK_T.checkingSlice(words[18], 1, 1)) {
            dataText.hdop = Number(words[18]);
        }
        
        dataTextArray.push(dataText);
    }
}

export default DataReaderSGK_T;