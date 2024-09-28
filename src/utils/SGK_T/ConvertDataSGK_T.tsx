import { IDataTextSGK_T } from "../../interface/IDataTextSGK_T";
import AbstractConvertAll from "../AbstractConvertAll";

class ConvertDataSGK_T extends AbstractConvertAll {
    public static convertDate(date: string): string {
        return date[0] + date[1] + "." + date[2] + date[3] + ".20" + date[4] + date[5];
    }

    public static convertTime(time: string): string {
        return time[0] + time[1] + ":" + time[2] + time[3] + ":" + time[4] + time[5];
    }

    public static isSGKFormat(data: any): data is IDataTextSGK_T[] {
        return Array.isArray(data) && data.length > 0 && 'report' in data[0]; 
    }

    public static convertCoordinates(coordinates: string): string {
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

    public static convertToCoordinatesString(coordinates: string[] | undefined): number[] | undefined {     
        return coordinates?.map(coordinate => {
            let strCoordinates: string;
            if(coordinates[0] !== "0") {
                strCoordinates = coordinate[0] + coordinate[1] + coordinate[2] + "." + coordinate[3] + coordinate[4] + coordinate[6] + coordinate[7] + coordinate[8] + coordinate[9];
            } else {
                strCoordinates = coordinate[1] + coordinate[2] + "." + coordinate[3] + coordinate[4] + coordinate[6] + coordinate[7] + coordinate[8] + coordinate[9];
            }
            return parseFloat(strCoordinates);
        });
    }

    public static convertToCoordinateString(coordinate: string): number {
        let strCoordinates: string;
        if(coordinate[0] !== "0") {
            strCoordinates = coordinate[0] + coordinate[1] + coordinate[2] + "." + coordinate[3] + coordinate[4] + coordinate[6] + coordinate[7] + coordinate[8] + coordinate[9];
        } else {
            strCoordinates = coordinate[1] + coordinate[2] + "." + coordinate[3] + coordinate[4] + coordinate[6] + coordinate[7] + coordinate[8] + coordinate[9];
        }
        return parseFloat(strCoordinates);
    }
}

export default ConvertDataSGK_T;