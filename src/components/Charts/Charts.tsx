import { Component } from "react";
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import DataTextStoresSGK_T from "../../stores/DataTextStoresSGK_T";
import { observer } from 'mobx-react';
import ConvertDataSGK_T from "../../utils/SGK_T/ConvertDataSGK_T";

Chart.register(...registerables);

@observer
class Charts extends Component {
    private data = {
        labels: DataTextStoresSGK_T.getTimeDataText(),
        datasets: [
            {
                label: 'Speed/Time',
                backgroundColor: 'rgba(75, 192, 192, 1)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: DataTextStoresSGK_T.getSpeedDataText(),
                tension: 0.3,
                cubicInterpolationMode: 'monotone' as const
            },
        ],
    };
    private coordinates = {
        labels: ConvertDataSGK_T.convertToCoordinatesString(DataTextStoresSGK_T.getLatitudeDataText()),
        datasets: [
            {
                label: 'Latitude/Longitude',
                backgroundColor: 'rgba(255, 165, 0, 1)',
                borderColor: 'rgba(255, 165, 0, 1)',
                borderWidth: 1,
                data: ConvertDataSGK_T.convertToCoordinatesString(DataTextStoresSGK_T.getLongitudeDataText()),
                pointBackgroundColor: 'orange',
                pointBorderColor: 'orange',
                tension: 0.3,
                cubicInterpolationMode: 'monotone' as const
            },
        ],
    }

    render() {
        console.log(DataTextStoresSGK_T.getTimeDataText());
        return (
            <div className="container">
                <Line data={this.data} />
                <Line data={this.coordinates} />
            </div>
        );
    }
}

export default Charts;