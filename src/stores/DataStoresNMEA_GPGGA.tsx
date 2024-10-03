import { makeAutoObservable, observable, action } from "mobx";
import { IDataNMEA_GPGGA } from "../interface/IDataNMEA_GPGGA";


class DataStoresNMEA_GPGGA {
    @observable dataText: IDataNMEA_GPGGA[] | null = [];

    constructor() {
        makeAutoObservable(this);
    }

    @action setDataText(dataText: IDataNMEA_GPGGA[] | null): void {
        this.dataText = dataText;
    }

    @action getDataText(): IDataNMEA_GPGGA[] | null {
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
        return this.dataText?.map((item) => String(item.altitude));
    }
}

export default new DataStoresNMEA_GPGGA();