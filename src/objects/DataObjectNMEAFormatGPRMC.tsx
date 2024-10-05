import { IDataNMEAFormatGPRMC } from "../interfaces/Datas/IDataNMEAFormatGPRMC";

export let dataObjectNMEAFormatGPRMC: IDataNMEAFormatGPRMC = {
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