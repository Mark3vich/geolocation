import { IDataNMEAFormatGPGSV } from "../../../interfaces/Datas/IDataNMEAFormatGPGSV";
import { dataObjectNMEAFormatGPGSV } from "../../../objects/DataObjectNMEAFormatGPGSV";


class DataReaderNMEAFormatGPGSV {
    public static convertString(dataTextArrayNMEA: IDataNMEAFormatGPGSV[], words: string[]): void  {
        let dataText: IDataNMEAFormatGPGSV = {...dataObjectNMEAFormatGPGSV};
        dataText.message_id = words[0];
        dataText.number_message = words[1];
        dataText.message_number = words[2];
        dataText.satellites_in_view = words[3];
        dataText.satellite_id = words[4];
        dataText.elevation = words[5];
        dataText.azimuth = words[6];
        dataText.snr = words[7];
        dataText.checksum = words[8];
        dataTextArrayNMEA.push(dataText);
    }
}

export default DataReaderNMEAFormatGPGSV;