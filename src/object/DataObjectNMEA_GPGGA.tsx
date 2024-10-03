import { IDataNMEA_GPGGA } from "../interface/IDataNMEA_GPGGA";

export let dataObjectNMEA_GPGGA: IDataNMEA_GPGGA = {
    message_id: '',
    utc_time: '',
    latitude: '',
    n_s_indicator: '',
    longitude: '',
    e_w_indicator: '',
    position_fix_indicator: 0,
    satellites_used: 0,
    hdop: 0,
    altitude: 0,
    units: '',
    age_of_diff_corr: null,
    diff_ref_station_id: '',
    checksum: '',
    cr_cfg: 0,
};

