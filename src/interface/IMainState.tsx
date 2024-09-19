import { IDataText } from "./IDataText";

export interface IMainState {
    fileContent: string;
    errorMessage: string;
    dataText: IDataText[] | null; // Храним распарсенные данные
};