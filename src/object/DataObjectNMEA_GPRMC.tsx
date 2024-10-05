import { IDataNMEAFormatGPRMC } from "../interfaces/IDataNMEAFormatGPRMC";

export let dataObjectNMEA_GPRMC: IDataNMEAFormatGPRMC = {
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