class AbstractConvertAll {
    public static convertZenithAngles(data: number[] | undefined): number[] | undefined { 
        return data?.map(elevation => 90 - Number(elevation));
    } 

    public static isInteger(value: string): boolean {
        return /^\d+$/.test(value);
    }

    public static checkingForTheNumberOfDigits(dataString: string, numberOfDigits: number): boolean {
        return this.isInteger(dataString) && dataString.length === numberOfDigits;
    }

    public static checkingSlice(latitudes: string, start: number, end: number): boolean {
        const coordinates = latitudes.split('.').map(latitude => latitude.trim());
        return this.checkingForTheNumberOfDigits(coordinates[0], start) && 
               this.checkingForTheNumberOfDigits(coordinates[1], end);
    }

    public static convertTime(time: string): string {
        return time[0] + time[1] + ":" + time[2] + time[3] + ":" + time[4] + time[5];
    }

    private static removeZeroFromTheLeft(str: string): string {
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== "0") {
                return str.slice(i);
            }
        }
        return str;
    }

    public static convertCoordinate(coordinates: string): string {
        // Split the coordinates into the main (degrees) and secondary (minutes) parts
        let mainAndSecondaryPart: string[] = coordinates.split('.');
        let mainPart: string = this.removeZeroFromTheLeft(mainAndSecondaryPart[0]);
        let secondaryPart = mainAndSecondaryPart[1];
        
        // Ensure the main part is exactly 2 digits (50)
        if (mainPart.length >= 2) {
            mainPart = mainPart.slice(0, 2); // Take the first two digits (50)
        } else {
            // If it's less than 2 digits, pad it with leading zeros
            mainPart = "00".slice(0, 2 - mainPart.length) + mainPart;
        }
    
        // Ensure secondary part starts from the correct place
        secondaryPart = mainAndSecondaryPart[0].slice(2) + secondaryPart;
    
        // Remove leading zeros from the secondary part
        let secondaryPartNoZero = this.removeZeroFromTheLeft(secondaryPart);
        
        // Convert the remaining part to seconds
        let seconds: string = String(parseFloat("0." + secondaryPartNoZero) * 60);
        
        // Format the seconds to 3 decimal places, replace the dot with a comma
        seconds = parseFloat(seconds).toFixed(3).replace('.', ',');
    
        // Return formatted coordinate
        return mainPart + "°" + seconds + "'";
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

export default AbstractConvertAll;