import { IDataNMEA_Coordinates } from "../../interface/IDataNMEA_Coordinates";
import { IDataNMEA_GPGGA } from "../../interface/IDataNMEA_GPGGA";
import { IDataSGK_T } from "../../interface/IDataSGK_T";


class AverageCoordinatesOfPNS {
    constructor(data: IDataNMEA_Coordinates<IDataNMEA_GPGGA | IDataSGK_T>[]) {
        
    }
}

export default AverageCoordinatesOfPNS;