class AbstractConvertAll {
    public static isInteger(value: string): boolean {
        return /^\d+$/.test(value);
    }

    public static checkingForTheNumberOfDigits(dataString: string, numberOfDigits: number): boolean {
        return this.isInteger(dataString) && dataString.length === numberOfDigits;
    }

    // Перепроверить данную функцию
    public static checkingSlice(latitudes: string, start: number, end: number): boolean {
        const coordinates = latitudes.split('.').map(latitude => latitude.trim());
        return this.checkingForTheNumberOfDigits(coordinates[0], start) && 
               this.checkingForTheNumberOfDigits(coordinates[1], end);
    }
}

export default AbstractConvertAll;