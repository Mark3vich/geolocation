import { makeAutoObservable, observable, action } from "mobx";
import { IDataNMEA_Coordinates } from "../interface/IDataNMEA_Coordinates";
import { IDataNMEA_GPGGA } from "../interface/IDataNMEA_GPGGA";
import { IDataSGK_T } from "../interface/IDataSGK_T";
import { IVectorPNS } from "../interface/IVectorPNS";

class DataStoresVectorPNS {
    @observable dataText: IDataNMEA_Coordinates<IDataNMEA_GPGGA | IDataSGK_T>[] = [];
    
    constructor() {
        makeAutoObservable(this);
    }

    @action setDataText(dataText: IDataNMEA_Coordinates<IDataNMEA_GPGGA | IDataSGK_T>[]): void {
        this.dataText = dataText;
    }

    @action getDataText(): IDataNMEA_Coordinates<IDataNMEA_GPGGA | IDataSGK_T>[] {
        return this.dataText;
    }

    @action getVectorPNS(): IVectorPNS[] {
        return this.dataText.map(item => ({
            latitude: Number(item.latitude),
            longitude: Number(item.longitude),
            height: Number(item.altitude)
        }));
    }
}

export default new DataStoresVectorPNS();