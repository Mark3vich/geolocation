import { IDataNMEAFormatCoordinates } from "../../interfaces/IDataNMEAFormatCoordinates";
import { IDataNMEAFormatGPGGA } from "../../interfaces/IDataNMEAFormatGPGGA";
import { IDataSGKT } from "../../interfaces/IDataSGKT";
import { IVectorPNS } from "../../interfaces/IVectorPNS";
import { dataObjectVectorPNS } from "../../object/DataObjectVectorPNS";


class AverageCoordinatesOfPNS {
    public static calculateAverageCoordinates(data: IDataNMEAFormatCoordinates<IDataNMEAFormatGPGGA | IDataSGKT>[]): IVectorPNS {
        let dataPNS: IVectorPNS = {...dataObjectVectorPNS};
        if (data.length === 0) {
            return dataPNS;
        }
        const N = data.length; // Количество эпох
        let sumLat: number = 0; // Сумма широт
        let sumLon: number = 0; // Сумма долгот
        let sumHeight: number = 0; // Сумма высот

        data.forEach(epoch => {
            sumLat += Number(epoch.latitude);
            sumLon += Number(epoch.longitude);
            sumHeight += Number(epoch.altitude);
        });

        // Вычисляем средние значения
        const avgLat: number = sumLat / N;
        const avgLon: number = sumLon / N;
        const avgHeight: number = sumHeight / N;

        // Возвращаем средние значения
        dataPNS.latitude = avgLat;
        dataPNS.longitude = avgLon;
        dataPNS.height = avgHeight;
        
        return dataPNS;
    }
}

export default AverageCoordinatesOfPNS;