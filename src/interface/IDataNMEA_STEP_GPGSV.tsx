import { IDataNMEA_GPGSV } from "./IDataNMEA_GPGSV";

export interface IDataNMEA_STEP_GPGSV extends Pick<IDataNMEA_GPGSV, 'satellite_id' | 'elevation' | 'azimuth'> {}