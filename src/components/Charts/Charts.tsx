import { Component } from "react";
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import DataTextStores from "../../stores/DataTextStores";
import { observer } from 'mobx-react';

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
        labels: DataTextStores.getLatitudeDataText(),
        datasets: [
            {
                label: 'Latitude/Longitude',
                backgroundColor: 'rgba(75, 192, 192, 1)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: DataTextStores.getLongitudeDataText(),
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