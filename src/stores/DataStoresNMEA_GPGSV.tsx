import { makeAutoObservable, observable, action } from "mobx";
import { IDataNMEAFormatGPGSV } from "../interfaces/IDataNMEAFormatGPGSV";

class DataStoresNMEA_GPGSV {
    @observable dataText: IDataNMEAFormatGPGSV[] | null = [];

    constructor() {
        makeAutoObservable(this);
    }

    @action setDataText(dataText: IDataNMEAFormatGPGSV[] | null): void {
        this.dataText = dataText;
    }

    @action getDataText(): IDataNMEAFormatGPGSV[] | null {
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