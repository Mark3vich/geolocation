import { makeAutoObservable, observable, action } from "mobx";
import { IDataText } from "../interface/IDataText";

class DataTextStore {
    @observable dataText: IDataText[] | null = [];
    constructor() {
        makeAutoObservable(this);
    }

    @action setDataText(dataText: IDataText[] | null) {
        this.dataText = dataText;
    }

    @action getDataText() {
        return this.dataText;
    }
};

export default new DataTextStore();