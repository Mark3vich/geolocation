import { IDataTextNMEA } from "../interface/IDataTextNMEA";

export let dataTextObjectNMEA: IDataTextNMEA = {
    message_id: '',
    utc_time: '',
    latitude: '',
    n_s_indicator: '',
    longitude: '',
    e_w_indicator: '',
    position_fix_indicator: 0,
    satellites_used: 0,
    hdop: 0,
    msl_atlitude: 0,
    units: '',
    age_of_diff_corr: null,
    diff_ref_station_id: '',
    checksum: 0,
    cr_cfg: 0,
};
