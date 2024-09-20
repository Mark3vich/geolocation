import { Component } from "react";
import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';

Chart.register(...registerables);

class Charts extends Component {
    private data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales',
                backgroundColor: 'rgba(75, 192, 192, 1)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [65, 59, 80, 81, 56, 55, 40],
            },
        ],
    };
    render() {
        return (
            <div className="container">
                <Bar data={this.data} />
            </div>    
        );
    }
}

export default Charts;