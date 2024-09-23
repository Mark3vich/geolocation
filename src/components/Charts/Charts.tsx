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
                label: 'Speed',
                backgroundColor: 'rgba(75, 192, 192, 1)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: DataTextStores.getSpeedDataText(),
            },
        ],
    };
    render() {
        return (
            <div className="container">
                <Line data={this.data} />
            </div>    
        );
    }
}

export default Charts;