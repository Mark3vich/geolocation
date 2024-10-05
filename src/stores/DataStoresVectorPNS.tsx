import { makeAutoObservable, observable, action } from "mobx";
import { IDataNMEAFormatCoordinates } from "../interfaces/IDataNMEAFormatCoordinates";
import { IDataNMEAFormatGPGGA } from "../interfaces/IDataNMEAFormatGPGGA";
import { IDataSGKT } from "../interfaces/IDataSGKT";
import { IVectorPNS } from "../interfaces/IVectorPNS";

class DataStoresVectorPNS {
    @observable dataText: IDataNMEAFormatCoordinates<IDataNMEAFormatGPGGA | IDataSGKT>[] = [];
    
    constructor() {
        makeAutoObservable(this);
    }

    @action setDataText(dataText: IDataNMEAFormatCoordinates<IDataNMEAFormatGPGGA | IDataSGKT>[]): void {
        this.dataText = dataText;
    }

    @action getDataText(): IDataNMEAFormatCoordinates<IDataNMEAFormatGPGGA | IDataSGKT>[] {
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