import { IDataNMEA_GPRMC } from "../interface/IDataNMEA_GPRMC";

export let dataObjectNMEA_GPRMC: IDataNMEA_GPRMC = {
    message_id: '',
    utc_time: '',
    status: '',
    latitude: '',
    n_s_indicator: '',
    longitude: '',
    e_w_indicator: '',
    speed_over_group: 0,
    data: '',
    magnetic_variation: '',
    checksum: '',
};