import { MESSAGE_ID, REPORT } from "../consts/constsApp";
import { IDataText } from "../interface/IDataText";
import DataTextReader from "./DataTextReader";

class UniversalGeometryReaderData {
    private fileContent: string;
    constructor(fileContent: string) {
        this.fileContent = fileContent;
    }

    public universalGeometryReader(): null | IDataText[] {
        const lines:string[] = this.fileContent.split('\n').map(line => line.trim());
        const words:string[][] = lines.map(line => line.split(',').map(word => word.trim()));
        let dataTextArray: IDataText[] = [];

        for(let i = 0; i < words.length; i++) {
            if(words[i][0] === REPORT) {
                DataTextReader.convertString(dataTextArray, words[i]); 
            } else if(words[i][0] === MESSAGE_ID) {
                continue;
            }  
        }

        if(dataTextArray.length > 0) {
            return dataTextArray;
        }
        return null;
    }
}

export default UniversalGeometryReaderData;