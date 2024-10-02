import { makeAutoObservable, observable, action } from "mobx";
import { IDataNMEA_GPGSV } from "../interface/IDataNMEA_GPGSV";

class DataStoresNMEA_GPGSV {
    @observable dataText: IDataNMEA_GPGSV[] | null = [];

    constructor() {
        makeAutoObservable(this);
    }

    @action setDataText(dataText: IDataNMEA_GPGSV[] | null): void {
        this.dataText = dataText;
    }

    @action getDataText(): IDataNMEA_GPGSV[] | null {
        return this.dataText;
    }

    @action getAzimuth(): number[] | undefined {
        return this.dataText?.map((item) => Number(item.azimuth));
    }

    @action getMessageId(): string[] | undefined {
        return this.dataText?.map((item) => item.message_id);
    }
}

export default new DataStoresNMEA_GPGSV();