import { makeAutoObservable, observable, action } from "mobx";
import { IDataSGK_T } from "../interface/IDataSGK_T";

class DataStoresSGK_T {
    @observable dataText: IDataSGK_T[] | null = [];
    constructor() {
        makeAutoObservable(this);
    }

    @action setDataText(dataText: IDataSGK_T[] | null): void {
        this.dataText = dataText;
    }

    @action getDataText(): IDataSGK_T[] | null {
        return this.dataText;
    }

    @action getSpeedDataText(): string[] | undefined {
        return this.dataText?.map(item => String(item.speed));
    }

    @action getTimeDataText(): string[] | undefined {
        return this.dataText?.map(item => item.time);
    }

    @action getLatitudeDataText(): string[] | undefined {
        return this.dataText?.map(item => item.latitude);
    }

    @action getLongitudeDataText(): string[] | undefined {
        return this.dataText?.map(item => item.longitude);
    }
};

export default new DataStoresSGK_T();