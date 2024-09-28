import { makeAutoObservable, observable, action } from "mobx";
import { IDataTextNMEA } from "../interface/IDataTextNMEA";


class DataTextStoresNMEA {
    @observable dataText: IDataTextNMEA[] | null = [];

    constructor() {
        makeAutoObservable(this);
    }

    @action setDataText(dataText: IDataTextNMEA[] | null): void {
        this.dataText = dataText;
    }

    @action getDataText(): IDataTextNMEA[] | null {
        return this.dataText;
    }
}

export default new DataTextStoresNMEA();