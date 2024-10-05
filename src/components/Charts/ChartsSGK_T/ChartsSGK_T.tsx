import { Component } from "react";
import { Line } from "react-chartjs-2";
import ConvertDataSGKT from "../../../utils/Reader/SGK_T/ConvertDataSGKT";
import DataStoresSGK_T from "../../../stores/DataStoresSGKT";

class ChartsSGK_T extends Component {
    private speedTime = {
        labels: DataStoresSGK_T.getTimeDataText(),
        datasets: [
            {
                label: 'Speed/Time',
                backgroundColor: 'rgba(75, 192, 192, 1)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: DataStoresSGK_T.getSpeedDataText(),
                tension: 0.3,
                cubicInterpolationMode: 'monotone' as const
            },
        ],
    };
    private coordinates = {
        labels: ConvertDataSGKT.convertToCoordinatesString(DataStoresSGK_T.getLatitudeDataText()),
        datasets: [
            {
                label: 'Latitude/Longitude',
                backgroundColor: 'rgba(255, 165, 0, 1)',
                borderColor: 'rgba(255, 165, 0, 1)',
                borderWidth: 1,
                data: ConvertDataSGKT.convertToCoordinatesString(DataStoresSGK_T.getLongitudeDataText()),
                pointBackgroundColor: 'orange',
                pointBorderColor: 'orange',
                tension: 0.3,
                cubicInterpolationMode: 'monotone' as const
            },
        ],
    }
    render() {
        return (
            <div className="container">
                <Line data={this.speedTime} />
                <Line data={this.coordinates} />
            </div>
        );
    }
}

export default ChartsSGK_T;