import { Component } from "react";
import DataStoresVectorPNS from "../../stores/DataStoresVectorPNS";
import AverageCoordinatesOfPNS from "../../utils/Math/AverageCoordinatesOfPNS";

class Statistics extends Component {
    render() {
        return ( 
            <div className="container">
                {DataStoresVectorPNS.getDataText()?.length ? (
                    <div className="mt-4">
                        <h2>Усреднённые координаты ПНС:</h2>
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
            </div>
        );
    }
}

export default Statistics;
