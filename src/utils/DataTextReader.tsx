import { IDataText } from "../interface/IDataText";

class DataTextReader { 
    private fileContent: string;
    private dataTextArray: IDataText[];
    constructor(fileContent: string) {
        this.fileContent = fileContent;
        this.dataTextArray = [];
    };

    convertString(): IDataText[] | null { 
        const lines = this.fileContent.split('\n').map(line => line.trim());
          
        console.log(lines);
        // for(let i: number = 0; i < fileContent.; i++) {

        // }
        return null;
    }
}

export default DataTextReader;