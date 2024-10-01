export interface IDataNMEA_GPRMC {
    message_id: string;
    utc_time: string;
    status: string;
    latitude: string;
    n_s_indicator: string;
    longitude: string;
    e_w_indicator: string;
    speed_over_group: number;
    data: string;
    magnetic_variation: string;
    checksum: string;
};