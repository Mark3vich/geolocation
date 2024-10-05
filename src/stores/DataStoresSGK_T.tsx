import { makeAutoObservable, observable, action } from "mobx";
import { IDataSGKT } from "../interfaces/Datas/IDataSGKT";

class DataStoresSGK_T {
    @observable dataText: IDataSGKT[] | null = [];
    constructor() {
        makeAutoObservable(this);
    }

    @action setDataText(dataText: IDataSGKT[] | null): void {
        this.dataText = dataText;
    }

    @action getDataText(): IDataSGKT[] | null {
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