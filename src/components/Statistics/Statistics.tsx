import { Component } from "react";
import DataStoresVectorPNS from "../../stores/DataStoresVectorPNS";
import AverageCoordinatesOfPNS from "../../utils/Math/AverageCoordinatesOfPNS";
import DeviationsCoordinates from "../../utils/Math/DeviationsCoordinates";

class Statistics extends Component {

    render() {
        return ( 
            <div className="container">
                {DataStoresVectorPNS.getDataText()?.length ? (
                    <div className="mt-4">
                        <h2>Усреднённые координаты ПНС(Приёмником навигационных сигналов):</h2>
                        <div>
                            {(() => {
                                const averageCoordinates = AverageCoordinatesOfPNS.calculateAverageCoordinates(DataStoresVectorPNS.getDataText());
                                return (
                                    <div>
                                        <p>Широта: <b>{averageCoordinates.latitude}</b></p>
                                        <p>Долгота: <b>{averageCoordinates.longitude}</b></p>
                                        <p>Высота: <b>{averageCoordinates.height}</b></p>
                                    </div>
                                );
                            })()}
                        </div>
                    </div>
                ) : null}
                {DataStoresVectorPNS.getDataText()?.length ? (
                    <div className="mt-4">
                        <h2>Отклонений решений полученных двумя приёмниками навигационных сигналов:</h2>
                        {(() => {
                            const devation1 = DataStoresVectorPNS.getVectorPNS()[0];
                            const devation2 = DataStoresVectorPNS.getVectorPNS()[1];
                            const devationResult = DeviationsCoordinates.calculateDeviations(devation1, devation2);
                            return (
                                <div>
                                    <p>Разница в широте: <b>{devationResult.latitude}</b></p>
                                    <p>Разница в долготе: <b>{devationResult.longitude}</b></p>
                                    <p>Разница в высоте: <b>{devationResult.height}</b></p>
                                </div>
                            );
                        })()}
                    </div>    
                ): null}
            </div>
        );
    }
}

export default Statistics;
