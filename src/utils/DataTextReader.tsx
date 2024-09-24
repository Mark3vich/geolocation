import { IDataText } from "../interface/IDataText";
import ConvertData from "./ConvertData";

class DataTextReader { 
    private fileContent: string;
    private dataTextArray: IDataText[];
    constructor(fileContent: string) {
        this.fileContent = fileContent;
        this.dataTextArray = [];
    };
   
    convertString(): IDataText[] | null { 
        const lines:string[] = this.fileContent.split('\n').map(line => line.trim());
        const words:string[][] = lines.map(line => line.split(',').map(word => word.trim()));
        let dataText: IDataText | null = null;

        for(let i = 0; i < words.length; i++) {
            if(words[i][0] === "&REPORT") {
                dataText = {
                    report: words[i][0],
                    device_id: '',
                    date: '',
                    time: '',
                    latitude: '',
                    n_s: '',
                    longitude: '',
                    e_w: '',
                    speed: 0,
                    course: 0,
                    altitude: null,
                    odometer: null,
                    io_status: null,
                    event_id: null,
                    ain1: null,
                    ain2: null,
                    fix_mode: null,
                    glonass_sat_no: null,
                    gps_sat_no: null,
                    hdop: null,
                };
            } else {
                break;
            }
            if (dataText) {
                if (ConvertData.checkingForTheNumberOfDigits(words[i][1], 4)) {
                    dataText.device_id = words[i][1];
                }
                if(ConvertData.checkingForTheNumberOfDigits(words[i][2], 6)) {
                    dataText.date = ConvertData.convertDate(words[i][2]);
                }
                if(ConvertData.checkingForTheNumberOfDigits(words[i][3], 6)) {
                    dataText.time = ConvertData.convertTime(words[i][3]);
                }
                if(ConvertData.checkingSlice(words[i][4], 5, 4)) {
                    dataText.latitude = words[i][4]; // Исправить
                }
                if(words[i][5] === 'N' || words[i][5] === 'S') {
                    dataText.n_s = words[i][5];
                }
                if(ConvertData.checkingSlice(words[i][6], 5, 4)) {
                    dataText.longitude = words[i][6]; // Исправить
                }
                if(words[i][7] === 'E' || words[i][7] === 'W') {
                    dataText.e_w = words[i][7];
                }
                if(ConvertData.isInteger(words[i][8])) {
                    dataText.speed = Number(words[i][8]);
                }
                if(ConvertData.isInteger(words[i][9])) {
                    dataText.course = Number(words[i][9]);
                }
                if(ConvertData.isInteger(words[i][10])) {
                    dataText.altitude = Number(words[i][10]);
                }
                if(ConvertData.isInteger(words[i][11])) {
                    dataText.odometer = Number(words[i][11]);
                }
                if(ConvertData.checkingForTheNumberOfDigits(words[i][12], 3)) {
                    dataText.io_status = Number(words[i][12]);
                }
                if(ConvertData.checkingForTheNumberOfDigits(words[i][13], 2)) {
                    dataText.event_id = Number(words[i][13]);
                }
                if(ConvertData.checkingSlice(words[i][14], 2, 2)) {
                    dataText.ain1 = Number(words[i][14]);
                }
                if(ConvertData.checkingForTheNumberOfDigits(words[i][15], 1)) {
                    dataText.fix_mode = Number(words[i][15]);
                }
                if(ConvertData.checkingForTheNumberOfDigits(words[i][16], 2)) {
                    dataText.glonass_sat_no = Number(words[i][16]);
                }
                if(ConvertData.checkingForTheNumberOfDigits(words[i][17], 2)) {
                    dataText.glonass_sat_no = Number(words[i][17]);
                }
                if(ConvertData.checkingSlice(words[i][18], 1, 1)) {
                    dataText.hdop = Number(words[i][18]);
                }
            }
            this.dataTextArray.push(dataText);
        }
        
        return this.dataTextArray.length > 0 ? this.dataTextArray : null;
    }
}

export default DataTextReader;