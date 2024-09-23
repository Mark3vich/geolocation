import { makeAutoObservable, observable, action } from "mobx";
import { IDataText } from "../interface/IDataText";
import DataTextReader  from "../utils/DataTextReader";

class DataTextStore {
    @observable dataText: IDataText[] | null = [];
    constructor() {
        makeAutoObservable(this);
    }

    convertToCoordinateString(longitude: string): number {
        // Разбиваем строку на части: градусы, минуты и секунды
        const degreePart = longitude.split("°")[0]; // Градусы
        const minutePart = longitude.split("°")[1].split("'")[0]; // Минуты
        const secondPart = longitude.split("'")[1]; // Секунды в виде строки с запятой
    
        // Преобразуем секунды обратно в десятичный формат
        const secondsDecimal = (parseFloat(secondPart.replace(',', '.')) / 60).toFixed(6).split('.')[1];
    
        // Объединяем градусы, минуты и полученные десятичные секунды
        const coordinates = degreePart.padStart(3, '0') + minutePart.padStart(2, '0') + secondsDecimal;
    
        return Number(coordinates);
    } 

    @action setDataText(dataText: IDataText[] | null): void {
        this.dataText = dataText;
    }

    @action getDataText(): IDataText[] | null {
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

    @action getLongitudeDataText(): number[] | undefined {
        return this.dataText?.map(item => this.convertToCoordinateString(item.longitude));
    }
};

export default new DataTextStore();