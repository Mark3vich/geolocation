import { Component, ReactNode } from "react";
import DataStoresVectorPNS from "../../../stores/DataStoresVectorPNS";
import AverageCoordinatesOfPNS from "../../../utils/Math/AverageCoordinatesOfPNS";

class AverageCoordinatesPropertyOfPNS extends Component {
    render(): ReactNode {
        const dataText = DataStoresVectorPNS.getDataText();
        if (!dataText?.length) return null;

        const { latitude, longitude, height } = AverageCoordinatesOfPNS.calculateAverageCoordinates(dataText);

        return (
            <div className="mt-4">
                <h2>Усреднённые координаты ПНС (Приёмником навигационных сигналов):</h2>
                <div>
                    <p>Широта: <b>{latitude}</b></p>
                    <p>Долгота: <b>{longitude}</b></p>
                    <p>Высота: <b>{height}</b></p>
                </div>
            </div>
        );
    }
}

export default AverageCoordinatesPropertyOfPNS;
