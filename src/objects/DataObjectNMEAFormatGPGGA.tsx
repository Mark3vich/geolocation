import { IDataNMEAFormatGPGGA } from "../interfaces/Datas/IDataNMEAFormatGPGGA";

export let dataObjectNMEAFormatGPGGA: IDataNMEAFormatGPGGA = {
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

