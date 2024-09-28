import { IDataTextNMEA } from "../../interface/IDataTextNMEA";
import AbstractConvertAll from "../AbstractConvertAll";

class ConvertDataNMEA extends AbstractConvertAll {
    public static chackingTimeUTC(time: string): boolean {
        return time.length === 9 && time[6] === '.';
    }

    public static checkingPositionFixIndicator(positionFixIndicator: string, from: number, to: number): boolean {
        let positionFixIndicatorNumber = Number(positionFixIndicator);
        return positionFixIndicatorNumber >= from && positionFixIndicatorNumber <= to;
    }

    public static isNMEAFormat(data: any): data is IDataTextNMEA[] {
        return Array.isArray(data) && data.length > 0 && 'message_id' in data[0]; 
    }
}

export default ConvertDataNMEA;