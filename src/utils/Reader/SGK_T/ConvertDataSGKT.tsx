import { IDataSGKT } from "../../../interfaces/Datas/IDataSGKT";
import AbstractConvertAll from "../AbstractConvertAll";

class ConvertDataSGKT extends AbstractConvertAll {
    public static convertDate(date: string): string {
        return date[0] + date[1] + "." + date[2] + date[3] + ".20" + date[4] + date[5];
    }

    public static isSGKFormat(data: any): data is IDataSGKT[] {
        return Array.isArray(data) && data.length > 0 && 'report' in data[0]; 
    }

}

export default ConvertDataSGKT;