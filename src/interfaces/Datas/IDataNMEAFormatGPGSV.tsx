export interface IDataNMEAFormatGPGSV {
    message_id: string;
    number_message: string;
    message_number: string;
    satellites_in_view: string;
    satellite_id: string;
    elevation: string;
    azimuth: string;
    snr: string;
    checksum: string;
}