import { IDataText } from "../interface/IDataText";

class DataTextReader { 
    private fileContent: string;
    private dataTextArray: IDataText[];
    constructor(fileContent: string) {
        this.fileContent = fileContent;
        this.dataTextArray = [];
    };

    isInteger(value: string): boolean {
        return /^\d+$/.test(value);
    }

    checkingForTheNumberOfDigits(dataString: string, numberOfDigits: number): boolean {
        return this.isInteger(dataString) && dataString.length === numberOfDigits;
    }

    checkingSlice(latitudes: string, start: number, end: number): boolean {
        const coordinates = latitudes.split('.').map(latitude => latitude.trim())
        return this.checkingForTheNumberOfDigits(coordinates[0], start) && 
               this.checkingForTheNumberOfDigits(coordinates[1], end);
    }

    convertDate(date: string): string {
        return date[0] + date[1] + "." + date[2] + date[3] + ".20" + date[4] + date[5];
    }

    convertTime(time: string): string {
        return time[0] + time[1] + ":" + time[2] + time[3] + ":" + time[4] + time[5];
    }

    convertLatitude(coordinates: string): string {
        let seconds: string = String(parseFloat("0." + coordinates[6] + coordinates[7] + coordinates[8] + coordinates[9]) * 60);
        seconds = parseFloat(seconds).toFixed(3).replace('.', ',');
        let strCoordinates: string;
        if (coordinates[0] !== "0") {
            strCoordinates = coordinates[0] + coordinates[1] + "°" + coordinates[3] + coordinates[4] + "'" + seconds;
        } else {
            strCoordinates = coordinates[1] + "°" + coordinates[3] + coordinates[4] + "'" + seconds;
        }
        return strCoordinates;
    }

    convertLongitude(coordinates: string): string {
        let seconds: string = String(parseFloat("0." + coordinates[6] + coordinates[7] + coordinates[8] + coordinates[9]) * 60);
        seconds = parseFloat(seconds).toFixed(3).replace('.', ',');
        let strCoordinates: string;
        if (coordinates[0] !== "0") {
            strCoordinates = coordinates[0] + coordinates[1] + coordinates[2] + "°" + coordinates[3] + coordinates[4] + "'" + seconds;
        } else {
            strCoordinates = coordinates[1] + coordinates[2] + "°" + coordinates[3] + coordinates[4] + "'" + seconds;
        }
        return strCoordinates;
    }

    convertString(): IDataText[] | null { 
        const lines:string[] = this.fileContent.split('\n').map(line => line.trim());
        const words:string[][] = lines.map(line => line.split(',').map(word => word.trim()));
        let dataText: IDataText | null = null;

        for(let i = 0; i < words.length; i++) {
            if(words[i][0] === "&REPORT") {
                dataText = {
                    report: words[i][0],
                    device_id: 0,
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
                if (this.checkingForTheNumberOfDigits(words[i][1], 4)) {
                    dataText.device_id = Number(words[i][1]);
                }
                if(this.checkingForTheNumberOfDigits(words[i][2], 6)) {
                    dataText.date = this.convertDate(words[i][2]);
                }
                if(this.checkingForTheNumberOfDigits(words[i][3], 6)) {
                    dataText.time = this.convertTime(words[i][3]);
                }
                if(this.checkingSlice(words[i][4], 5, 4)) {
                    dataText.latitude = this.convertLatitude(words[i][4]);
                }
                if(words[i][5] === 'N' || words[i][5] === 'S') {
                    dataText.n_s = words[i][5];
                }
                if(this.checkingSlice(words[i][6], 5, 4)) {
                    dataText.longitude = this.convertLongitude(words[i][6]);
                }
                if(words[i][7] === 'E' || words[i][7] === 'W') {
                    dataText.e_w = words[i][7];
                }
                if(this.isInteger(words[i][8])) {
                    dataText.speed = Number(words[i][8]);
                }
                if(this.isInteger(words[i][9])) {
                    dataText.course = Number(words[i][9]);
                }
                if(this.isInteger(words[i][10])) {
                    dataText.altitude = Number(words[i][10]);
                }
                if(this.isInteger(words[i][11])) {
                    dataText.odometer = Number(words[i][11]);
                }
                if(this.checkingForTheNumberOfDigits(words[i][12], 3)) {
                    dataText.io_status = Number(words[i][12]);
                }
                if(this.checkingForTheNumberOfDigits(words[i][13], 2)) {
                    dataText.event_id = Number(words[i][13]);
                }
                if(this.checkingSlice(words[i][14], 2, 2)) {
                    dataText.ain1 = Number(words[i][14]);
                }
                if(this.checkingForTheNumberOfDigits(words[i][15], 1)) {
                    dataText.fix_mode = Number(words[i][15]);
                }
                if(this.checkingForTheNumberOfDigits(words[i][16], 2)) {
                    dataText.glonass_sat_no = Number(words[i][16]);
                }
                if(this.checkingForTheNumberOfDigits(words[i][17], 2)) {
                    dataText.glonass_sat_no = Number(words[i][17]);
                }
                if(this.checkingSlice(words[i][18], 1, 1)) {
                    dataText.hdop = Number(words[i][18]);
                }
            }
            this.dataTextArray.push(dataText);
        }
        
        return this.dataTextArray.length > 0 ? this.dataTextArray : null;
    }
}

export default DataTextReader;