import { IDataNMEA_GPGSV } from "../../../interface/IDataNMEA_GPGSV";
import { dataObjectNMEA_GPGSV } from "../../../object/DataObjectNMEA_GPGSV";


class DataReaderNMEA_GPGSV {
    public static convertString(dataTextArrayNMEA: IDataNMEA_GPGSV[], words: string[]): void  {
        let dataText: IDataNMEA_GPGSV = {...dataObjectNMEA_GPGSV};
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

export default DataReaderNMEA_GPGSV;