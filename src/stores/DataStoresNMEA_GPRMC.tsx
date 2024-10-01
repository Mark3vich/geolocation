import { makeAutoObservable, observable, action } from "mobx";
import { IDataNMEA_GPRMC } from "../interface/IDataNMEA_GPRMC";

class DataStoresNMEA_GPRMC {
    @observable dataText: IDataNMEA_GPRMC[] | null = [];

    constructor() {
        makeAutoObservable(this);
    }

    @action setDataText(dataText: IDataNMEA_GPRMC[] | null): void {
        this.dataText = dataText;
    }

    @action getDataText(): IDataNMEA_GPRMC[] | null {
        return this.dataText;
    }
}

export default new DataStoresNMEA_GPRMC();