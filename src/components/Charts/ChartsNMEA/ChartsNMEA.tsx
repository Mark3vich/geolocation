import { Component } from "react";
import DataTextStoresNMEA from "../../../stores/DataTextStoresNMEA";
import { Line } from "react-chartjs-2";
import ConvertDataNMEA from "../../../utils/NMEA/ConvertDataNMEA";

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

    private atlitudeTime = {
        labels: DataTextStoresNMEA.getTimeDataText(),
    
        datasets: [
            {
                label: "Altitude/Time",
                data: DataTextStoresNMEA.getAtlitudeDataText(),
                backgroundColor: "rgba(0, 100, 0, 0.2)", 
                borderColor: "rgba(0, 100, 0, 1)", 
                borderWidth: 1,
                pointBackgroundColor: "rgba(0, 100, 0, 1)", 
                pointBorderColor: "rgba(0, 100, 0, 1)", 
                pointHoverBackgroundColor: "rgba(0, 100, 0, 1)", 
                pointHoverBorderColor: "rgba(0, 100, 0, 1)", 
                tension: 0.3,
                cubicInterpolationMode: "monotone" as const
            }
        ]
    }    

    private coordinates = {
        labels: ConvertDataNMEA.convertToCoordinatesString(DataTextStoresNMEA.getLatitudeDataText()),
        datasets: [
            {
                label: 'Latitude/Longitude',
                backgroundColor: 'rgba(255, 165, 0, 1)',
                borderColor: 'rgba(255, 165, 0, 1)',
                borderWidth: 1,
                data: ConvertDataNMEA.convertToCoordinatesString(DataTextStoresNMEA.getLongitudeDataText()),
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
                <Line data={this.hdopTime} />
                <Line data={this.atlitudeTime} />
                <Line data={this.coordinates} />
            </div>
        );
    }
}

export default ChartsNMEA;