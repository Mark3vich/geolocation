class ConvertData {
    public static isInteger(value: string): boolean {
        return /^\d+$/.test(value);
    }

    public static checkingForTheNumberOfDigits(dataString: string, numberOfDigits: number): boolean {
        return this.isInteger(dataString) && dataString.length === numberOfDigits;
    }

    public static checkingSlice(latitudes: string, start: number, end: number): boolean {
        const coordinates = latitudes.split('.').map(latitude => latitude.trim())
        return this.checkingForTheNumberOfDigits(coordinates[0], start) && 
               this.checkingForTheNumberOfDigits(coordinates[1], end);
    }


    public static convertDate(date: string): string {
        return date[0] + date[1] + "." + date[2] + date[3] + ".20" + date[4] + date[5];
    }

    public static convertTime(time: string): string {
        return time[0] + time[1] + ":" + time[2] + time[3] + ":" + time[4] + time[5];
    }

    public static convertCoordinates(coordinates: string): string {
        let seconds: string = String(parseFloat("0." + coordinates[6] + coordinates[7] + coordinates[8] + coordinates[9]) * 60);
        seconds = parseFloat(seconds).toFixed(3).replace('.', ',');
        let strCoordinates: string;
        if (coordinates[0] !== "0") {
            strCoordinates = coordinates[0] + coordinates[1] + coordinates[2] + "°" + coordinates[3] + coordinates[4] + "'" + seconds;
        } else {
            strCoordinates = coordinates[1] + coordinates[2] + "°" + coordinates[3] + coordinates[4] + "'" + seconds;
        }
        return strCoordinates;
    }

    public static convertToCoordinatesString(coordinates: string[] | undefined): number[] | undefined {     
        return coordinates?.map(coordinate => {
            let strCoordinates: string;
            if(coordinates[0] !== "0") {
                strCoordinates = coordinate[0] + coordinate[1] + coordinate[2] + "." + coordinate[3] + coordinate[4] + coordinate[6] + coordinate[7] + coordinate[8] + coordinate[9];
            } else {
                strCoordinates = coordinate[1] + coordinate[2] + "." + coordinate[3] + coordinate[4] + coordinate[6] + coordinate[7] + coordinate[8] + coordinate[9];
            }
            return parseFloat(strCoordinates);
        });
    }

    public static convertToCoordinateString(coordinate: string): number {
        let strCoordinates: string;
        if(coordinate[0] !== "0") {
            strCoordinates = coordinate[0] + coordinate[1] + coordinate[2] + "." + coordinate[3] + coordinate[4] + coordinate[6] + coordinate[7] + coordinate[8] + coordinate[9];
        } else {
            strCoordinates = coordinate[1] + coordinate[2] + "." + coordinate[3] + coordinate[4] + coordinate[6] + coordinate[7] + coordinate[8] + coordinate[9];
        }
        return parseFloat(strCoordinates);
    }
}

export default ConvertData;