import { EAST, NORTH, REPORT, SOUTH, WEST } from "../consts/constsApp";
import { IDataText } from "../interface/IDataText";
import ConvertData from "./ConvertData";

class DataTextReader {    
    public static convertString(dataTextArray: IDataText[], words: string[]): void {
        let dataText = {
            report: words[0],
            device_id: '',
            date: '',
            time: '',
            latitude: '',
            n_s: '',
            longitude: '',
            e_w: '',
            speed: 0,
            course: 0,
            altitude: 0,
            odometer: 0,
            io_status: 0,
            event_id: 0,
            ain1: 0,
            ain2: 0,
            fix_mode: 0,
            glonass_sat_no: 0,
            gps_sat_no: 0,
            hdop: 0,
        }; 
        
        if (ConvertData.checkingForTheNumberOfDigits(words[1], 4)) {
            dataText.device_id = words[1];
        }
        if(ConvertData.checkingForTheNumberOfDigits(words[2], 6)) {
            dataText.date = ConvertData.convertDate(words[2]);
        }
        if(ConvertData.checkingForTheNumberOfDigits(words[3], 6)) {
            dataText.time = ConvertData.convertTime(words[3]);
        }
        if(ConvertData.checkingSlice(words[4], 5, 4)) {
            dataText.latitude = words[4]; 
        }
        if(words[5] === NORTH || words[5] === SOUTH) {
            dataText.n_s = words[5];
        }
        if(ConvertData.checkingSlice(words[6], 5, 4)) {
            dataText.longitude = words[6]; 
        }
        if(words[7] === EAST || words[7] === WEST) {
            dataText.e_w = words[7];
        }
        if(ConvertData.isInteger(words[8])) {
            dataText.speed = Number(words[8]);
        }
        if(ConvertData.isInteger(words[9])) {
            dataText.course = Number(words[9]);
        }
        if(ConvertData.isInteger(words[10])) {
            dataText.altitude = Number(words[10]);
        }
        if(ConvertData.isInteger(words[11])) {
            dataText.odometer = Number(words[11]);
        }
        if(ConvertData.checkingForTheNumberOfDigits(words[12], 3)) {
            dataText.io_status = Number(words[12]);
        }
        if(ConvertData.checkingForTheNumberOfDigits(words[13], 2)) {
            dataText.event_id = Number(words[13]);
        }
        if(ConvertData.checkingSlice(words[14], 2, 2)) {
            dataText.ain1 = Number(words[14]);
        }
        if(ConvertData.checkingForTheNumberOfDigits(words[15], 1)) {
            dataText.fix_mode = Number(words[15]);
        }
        if(ConvertData.checkingForTheNumberOfDigits(words[16], 2)) {
            dataText.glonass_sat_no = Number(words[16]);
        }
        if(ConvertData.checkingForTheNumberOfDigits(words[17], 2)) {
            dataText.glonass_sat_no = Number(words[17]);
        }
        if(ConvertData.checkingSlice(words[18], 1, 1)) {
            dataText.hdop = Number(words[18]);
        }
        
        dataTextArray.push(dataText);
    }
}

export default DataTextReader;