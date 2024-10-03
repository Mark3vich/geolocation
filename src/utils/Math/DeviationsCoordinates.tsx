import { IVectorPNS } from "../../interface/IVectorPNS";
import { dataObjectVectorPNS } from "../../object/DataObjectVectorPNS";

class DeviationsCoordinates {
    public static calculateDeviations(receiver1: IVectorPNS, receiver2: IVectorPNS): IVectorPNS {
        let dataPNS: IVectorPNS = {...dataObjectVectorPNS};
        const latitudeDeviation = Number(receiver1.latitude) - Number(receiver2.latitude);
        const longitudeDeviation = Number(receiver1.longitude) - Number(receiver2.longitude);
        const altitudeDeviation = Number(receiver1.height) - Number(receiver2.height);
        
        dataPNS.latitude = latitudeDeviation;
        dataPNS.longitude = longitudeDeviation;
        dataPNS.height = altitudeDeviation;

        return dataPNS;
    }
}

export default DeviationsCoordinates;