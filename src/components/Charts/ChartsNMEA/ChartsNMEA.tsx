import { Component } from "react";
import DataTextStoresNMEA from "../../../stores/DataTextStoresNMEA";
import { Line } from "react-chartjs-2";

class ChartsNMEA extends Component {
    private hdopTime = {
        labels: DataTextStoresNMEA.getTimeDataText(),

        datasets: [
            {
                label: "Hdop/Time",
                data: DataTextStoresNMEA.getHdopDataText(),
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
                pointBackgroundColor: "rgba(255, 99, 132, 1)",
                pointBorderColor: "rgba(255, 99, 132, 1)",
                pointHoverBackgroundColor: "rgba(255, 99, 132, 1)",
                pointHoverBorderColor: "rgba(255, 99, 132, 1)",
                tension: 0.3,
                cubicInterpolationMode: "monotone" as const
            }
        ]
    }
    render() {
        return (
            <div className="container">
                <Line data={this.hdopTime} />
            </div>
        );
    }
}

export default ChartsNMEA;