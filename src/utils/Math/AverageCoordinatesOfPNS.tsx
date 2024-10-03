import { IDataNMEA_Coordinates } from "../../interface/IDataNMEA_Coordinates";
import { IDataNMEA_GPGGA } from "../../interface/IDataNMEA_GPGGA";
import { IDataSGK_T } from "../../interface/IDataSGK_T";
import { IVectorPNS } from "../../interface/IVectorPNS";
import { dataObjectVectorPNS } from "../../object/DataObjectVectorPNS";


class AverageCoordinatesOfPNS {
    public static calculateAverageCoordinates(data: IDataNMEA_Coordinates<IDataNMEA_GPGGA | IDataSGK_T>[]): IVectorPNS {
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