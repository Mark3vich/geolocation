import { EAST, NORTH, SOUTH, WEST } from "../../consts/constsApp";
import { IDataTextNMEA } from "../../interface/IDataTextNMEA";
import ConvertDataNMEA from "./ConvertDataNMEA";


class DataReaderNMEA {
    public static convertString(dataTextArrayNMEA: IDataTextNMEA[], words: string[]): void  {
        let dataText = {
            utc_time: '',
            latitude: '',
            n_s_indicator: '',
            longitude: '',
            e_w_indicator: '',
            position_fix_indicator: 0,
            satellites_used: 0,
            hdop: 0,
            msl_atlitude: 0,
            units: 0,
            age_of_diff_corr: null,
            diff_ref_station_id: 0,
            checksum: 0,
            cr_cfg: 0,
        };

        if (ConvertDataNMEA.chackingTimeUTC(words[1])) {
            dataText.utc_time = words[1];
        } else if (ConvertDataNMEA.checkingSlice(words[2], 4, 5)) {
            dataText.latitude = words[2];
        } else if(words[3] === NORTH || words[3] === SOUTH) {
            dataText.n_s_indicator = words[3];
        } else if (ConvertDataNMEA.checkingSlice(words[4], 4, 5)) {
            dataText.longitude = words[4];
        } else if(words[5] === EAST || words[5] === WEST) {
            dataText.e_w_indicator = words[5];
        } else if (ConvertDataNMEA.checkingPositionFixIndicator(words[6], 0, 3)) {
            dataText.position_fix_indicator = Number(words[6]);
        } else if (ConvertDataNMEA.checkingPositionFixIndicator(words[7], 0, 12)) {
            dataText.satellites_used = Number(words[7]);
        } else if (ConvertDataNMEA.isInteger(words[8])) {
            dataText.hdop = Number(words[8]);
        } else if (ConvertDataNMEA.isInteger(words[9])) {
            dataText.msl_atlitude = Number(words[9]);
        } else if (words[10].length > 0) {
            dataText.units = Number(words[10]);
        } else if (words[11].length === 0) {
            dataText.age_of_diff_corr = null;
        } else if (words[12].length > 0) {
            dataText.diff_ref_station_id = Number(words[12]);
        } else if (words[13].length > 0) {
            dataText.checksum = Number(words[13]);
        } else if (words[14].length > 0) {
            dataText.cr_cfg = Number(words[14]);
        }
    }
}

export default DataReaderNMEA;