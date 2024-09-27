import { IDataTextNMEA } from "../../interface/IDataTextNMEA";
import ConvertData from "../SGK_T/ConvertDataSGK_T";

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

        if (ConvertData.checkingSlice(words[1], 2, 4)) {
        }
    }
}

export default DataReaderNMEA;