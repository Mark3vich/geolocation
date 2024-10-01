import { EAST, NORTH, SOUTH, WEST } from "../../consts/ConstsApp";
import { IDataNMEA_GPRMC } from "../../interface/IDataNMEA_GPRMC";
import { dataObjectNMEA_GPRMC } from "../../object/DataObjectNMEA_GPRMC";
import ConvertDataNMEA from "./ConvertDataNMEA";

class DataReaderNMEA_GPRMC {
    public static convertString(dataTextArray: IDataNMEA_GPRMC[], words: string[]): void {
        let dataText: IDataNMEA_GPRMC = { ...dataObjectNMEA_GPRMC };
        dataText.message_id = words[0];
        if (ConvertDataNMEA.chackingTimeUTC(words[1])) {
            dataText.utc_time = ConvertDataNMEA.convertTime(words[1]);
        }
        if (words[2].length > 0) {
            dataText.status = words[2];
        }
        if (words[3].length > 0) {
            dataText.latitude = words[3];
        }
        if (words[4] === NORTH || words[4] === SOUTH) {
            dataText.n_s_indicator = words[4];
        }
        if (words[5].length > 0) {
            dataText.longitude = words[5];
        }
        if (words[6] === EAST || words[6] === WEST) {
            dataText.e_w_indicator = words[6];
        }
        dataText.speed_over_group = Number(words[7]);
        if (words[8].length > 0) {
            dataText.data = words[8];
        }
        if (words[9].length > 0) {
            dataText.magnetic_variation = words[9];
        }
        if (words[12].length > 0) {
            dataText.checksum = words[12];
        }
        dataTextArray.push(dataText);
    }
}

export default DataReaderNMEA_GPRMC;