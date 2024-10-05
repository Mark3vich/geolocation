import { Component, ReactNode } from "react";
import DataStoresVectorPNS from "../../../stores/DataStoresVectorPNS";
import DeviationsCoordinates from "../../../utils/Math/DeviationsCoordinates";

class DecisionDeviationsProperty extends Component {
    render(): ReactNode {
        const devation1 = DataStoresVectorPNS.getVectorPNS()[0];
        const devation2 = DataStoresVectorPNS.getVectorPNS()[1];

        if (!devation1 || !devation2) return null;

        const devationResult = DeviationsCoordinates.calculateDeviations(devation1, devation2);
        return (
            <div className="mt-4">
                <h2>Отклонений решений полученных двумя приёмниками навигационных сигналов:</h2>
                <div>
                    <p>Разница в широте: <b>{devationResult.latitude}</b></p>
                    <p>Разница в долготе: <b>{devationResult.longitude}</b></p>
                    <p>Разница в высоте: <b>{devationResult.height}</b></p>
                </div>
            </div>
        )
    }
}

export default DecisionDeviationsProperty