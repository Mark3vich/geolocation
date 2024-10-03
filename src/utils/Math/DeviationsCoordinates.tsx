import { ICoordinatesNMEA } from "../../interface/ICoordinatesNMEA";
import { IVectorPNS } from "../../interface/IVectorPNS";
import { dataObjectVectorPNS } from "../../object/DataObjectVectorPNS";

class DeviationsCoordinates {
    public static calculateDeviations(receiver1: ICoordinatesNMEA, receiver2: ICoordinatesNMEA): IVectorPNS {
        let dataPNS: IVectorPNS = {...dataObjectVectorPNS};
        const latitudeDeviation = Number(receiver1.latitude) - Number(receiver2.latitude);
        const longitudeDeviation = Number(receiver1.longitude) - Number(receiver2.longitude);
        const altitudeDeviation = Number(receiver1.altitude) - Number(receiver2.altitude);
        
        dataPNS.latitude = latitudeDeviation;
        dataPNS.longitude = longitudeDeviation;
        dataPNS.height = altitudeDeviation;
        
        return dataPNS;
    }
}

export default DeviationsCoordinates;