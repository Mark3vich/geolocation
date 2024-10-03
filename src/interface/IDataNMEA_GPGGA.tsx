export interface IDataNMEA_GPGGA {
    message_id: string;
    utc_time: string;
    latitude: string;
    n_s_indicator: string;
    longitude: string;
    e_w_indicator: string;
    position_fix_indicator: number;
    satellites_used: number;
    hdop: number;
    altitude: number | null;
    units: string;
    age_of_diff_corr: null;
    diff_ref_station_id: string;
    checksum: string;
    cr_cfg: number;
}