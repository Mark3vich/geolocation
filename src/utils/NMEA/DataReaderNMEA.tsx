import { EAST, NORTH, SOUTH, WEST } from "../../consts/ConstsApp";
import { IDataTextNMEA } from "../../interface/IDataTextNMEA";
import { dataTextObjectNMEA } from "../../object/DataTextObjectNMEA";
import ConvertDataNMEA from "./ConvertDataNMEA";

class DataReaderNMEA {
    public static convertString(dataTextArrayNMEA: IDataTextNMEA[], words: string[]): void  {
        dataTextObjectNMEA.message_id = words[0];
        let dataText: IDataTextNMEA = {...dataTextObjectNMEA};
        
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
            dataText.units = words[10];
        } else if (words[11].length === 0) {
            dataText.age_of_diff_corr = null;
        } else if (words[12].length > 0) {
            dataText.diff_ref_station_id = words[12];
        } else if (words[13].length > 0) {
            dataText.checksum = Number(words[13]);
        } else if (words[14].length > 0) {
            dataText.cr_cfg = Number(words[14]);
        }

        dataTextArrayNMEA.push(dataText);
    }
}

export default DataReaderNMEA;