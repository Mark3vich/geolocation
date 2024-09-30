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

    @action getTimeDataText(): string[] | undefined {
        return this.dataText?.map((item) => item.utc_time);
    }

    @action getLatitudeDataText(): string[] | undefined {
        return this.dataText?.map((item) => item.latitude);
    }

    @action getLongitudeDataText(): string[] | undefined {
        return this.dataText?.map((item) => item.longitude);
    }

    @action getHdopDataText(): string[] | undefined {
        return this.dataText?.map((item) => String(item.hdop));
    }

    @action getAtlitudeDataText(): string[] | undefined {
        return this.dataText?.map((item) => String(item.msl_atlitude));
    }
}

export default new DataTextStoresNMEA();