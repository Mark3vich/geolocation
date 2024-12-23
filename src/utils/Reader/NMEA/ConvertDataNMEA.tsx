import { IDataNMEAFormatGPGGA } from "../../../interfaces/Datas/IDataNMEAFormatGPGGA";
import { IDataNMEAFormatGPRMC } from "../../../interfaces/Datas/IDataNMEAFormatGPRMC";
import AbstractConvertAll from "../AbstractConvertAll";

class ConvertDataNMEA extends AbstractConvertAll {
    public static chackingTimeUTC(time: string): boolean {
        return time.length === 9 && time[6] === '.';
    }

    public static checkingPositionFixIndicator(positionFixIndicator: string, from: number, to: number): boolean {
        let positionFixIndicatorNumber = Number(positionFixIndicator);
        return positionFixIndicatorNumber >= from && positionFixIndicatorNumber <= to;
    }

    public static isNMEAFormatGPGGA(data: any): data is IDataNMEAFormatGPGGA[] {
        return Array.isArray(data) && data.length > 0 && 'message_id' in data[0] && 'msl_atlitude' in data[0]; 
    }

    public static isNMEAFormatGPRMC(data: any): data is IDataNMEAFormatGPRMC[] {
        return Array.isArray(data) && data.length > 0 && 'message_id' in data[0] && 'speed_over_group' in data[0]; 
    }
}

export default ConvertDataNMEA;