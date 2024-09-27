import { makeAutoObservable, observable, action } from "mobx";
import { IDataTextSGK_T } from "../interface/IDataTextSGK_T";

class DataTextStore {
    @observable dataText: IDataTextSGK_T[] | null = [];
    constructor() {
        makeAutoObservable(this);
    }

    @action setDataText(dataText: IDataTextSGK_T[] | null): void {
        this.dataText = dataText;
    }

    @action getDataText(): IDataTextSGK_T[] | null {
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

export default new DataTextStore();