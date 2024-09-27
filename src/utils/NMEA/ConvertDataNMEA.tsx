import AbstractConvertAll from "../AbstractConvertAll";

class ConvertDataNMEA extends AbstractConvertAll {
    public static chackingTimeUTC(time: string): boolean {
        return time.length === 10 && time[7] === '.';
    }

    public static checkingPositionFixIndicator(positionFixIndicator: string, from: number, to: number): boolean {
        let positionFixIndicatorNumber = Number(positionFixIndicator);
        return positionFixIndicatorNumber >= from && positionFixIndicatorNumber <= to;
    }
}

export default ConvertDataNMEA;