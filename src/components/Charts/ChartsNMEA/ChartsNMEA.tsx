import { Component } from "react";
import DataStoresNMEA from "../../../stores/DataStoresNMEA_GPGGA";
import { Line } from "react-chartjs-2";
import ConvertDataNMEA from "../../../utils/NMEA/ConvertDataNMEA";

class ChartsNMEA extends Component {
    private hdopTime = {
        labels: DataStoresNMEA.getTimeDataText(),

        datasets: [
            {
                label: "Hdop/Time",
                data: DataStoresNMEA.getHdopDataText(),
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
        labels: DataStoresNMEA.getTimeDataText(),
    
        datasets: [
            {
                label: "Altitude/Time",
                data: DataStoresNMEA.getAtlitudeDataText(),
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
        labels: ConvertDataNMEA.convertToCoordinatesString(DataStoresNMEA.getLatitudeDataText()),
        datasets: [
            {
                label: 'Latitude/Longitude',
                backgroundColor: 'rgba(255, 165, 0, 1)',
                borderColor: 'rgba(255, 165, 0, 1)',
                borderWidth: 1,
                data: ConvertDataNMEA.convertToCoordinatesString(DataStoresNMEA.getLongitudeDataText()),
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