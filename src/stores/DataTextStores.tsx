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

    @action getDataText(): IDataText[] | null {
        return this.dataText;
    }
};

export default new DataTextStore();