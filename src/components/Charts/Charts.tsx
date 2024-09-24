import { Component } from "react";
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import DataTextStores from "../../stores/DataTextStores";
import { observer } from 'mobx-react';
import ConvertData from "../../utils/ConvertData";

Chart.register(...registerables);

@observer
class Charts extends Component {
    private data = {
        labels: DataTextStores.getTimeDataText(),
        datasets: [
            {
                label: 'Speed/Time',
                backgroundColor: 'rgba(75, 192, 192, 1)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: DataTextStores.getSpeedDataText(),
                tension: 0.3,
                cubicInterpolationMode: 'monotone' as const
            },
        ],
    };
    private coordinates = {
        labels: ConvertData.convertToCoordinatesString(DataTextStores.getLatitudeDataText()),
        datasets: [
            {
                label: 'Latitude/Longitude',
                backgroundColor: 'rgba(255, 165, 0, 1)',
                borderColor: 'rgba(255, 165, 0, 1)',
                borderWidth: 1,
                data: ConvertData.convertToCoordinatesString(DataTextStores.getLongitudeDataText()),
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
                <Line data={this.data} />
                <Line data={this.coordinates} />
            </div>
        );
    }
}

export default Charts;