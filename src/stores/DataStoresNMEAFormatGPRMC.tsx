import { makeAutoObservable, observable, action } from "mobx";
import { IDataNMEAFormatGPRMC } from "../interfaces/Datas/IDataNMEAFormatGPRMC";

class DataStoresNMEAFormatGPRMC {
    @observable dataText: IDataNMEAFormatGPRMC[] | null = [];

    constructor() {
        makeAutoObservable(this);
    }

    @action setDataText(dataText: IDataNMEAFormatGPRMC[] | null): void {
        this.dataText = dataText;
    }

    @action getDataText(): IDataNMEAFormatGPRMC[] | null {
        return this.dataText;
    }
}

export default new DataStoresNMEAFormatGPRMC();