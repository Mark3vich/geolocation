import { makeAutoObservable, observable, action } from "mobx";
import { IDataNMEAFormatGPGGA } from "../interfaces/Datas/IDataNMEAFormatGPGGA";


class DataStoresNMEAFormatGPGGA {
    @observable dataText: IDataNMEAFormatGPGGA[] | null = [];

    constructor() {
        makeAutoObservable(this);
    }

    @action setDataText(dataText: IDataNMEAFormatGPGGA[] | null): void {
        this.dataText = dataText;
    }

    @action getDataText(): IDataNMEAFormatGPGGA[] | null {
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

export default new DataStoresNMEAFormatGPGGA();