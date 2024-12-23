import { Component } from "react";
import DataStoresNMEAFormatGPGGA from "../../../stores/DataStoresNMEAFormatGPGGA";
import { Line } from "react-chartjs-2";
import ConvertDataNMEA from "../../../utils/Reader/NMEA/ConvertDataNMEA";
import TrajectoryPlot from "./TrajectoryPlot";
import ScatterPlotRelativeToAverage from "./ScatterPlotRelativeToAverage";
import ThemeStores from "../../../stores/ThemeStores";
import { observer } from "mobx-react";

@observer
class ChartsNMEA extends Component {
    private hdopTime = {
        labels: DataStoresNMEAFormatGPGGA.getTimeDataText(),

        datasets: [
            {
                label: "Hdop/Time",
                data: DataStoresNMEAFormatGPGGA.getHdopDataText(),
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
        labels: DataStoresNMEAFormatGPGGA.getTimeDataText(),
    
        datasets: [
            {
                label: "Altitude/Time",
                data: DataStoresNMEAFormatGPGGA.getAtlitudeDataText(),
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
        labels: ConvertDataNMEA.convertToCoordinatesString(DataStoresNMEAFormatGPGGA.getLatitudeDataText()),
        datasets: [
            {
                label: 'Latitude/Longitude',
                backgroundColor: 'rgba(255, 165, 0, 1)',
                borderColor: 'rgba(255, 165, 0, 1)',
                borderWidth: 1,
                data: ConvertDataNMEA.convertToCoordinatesString(DataStoresNMEAFormatGPGGA.getLongitudeDataText()),
                pointBackgroundColor: 'orange',
                pointBorderColor: 'orange',
                tension: 0.3,
                cubicInterpolationMode: 'monotone' as const
            },
        ],
    }

    private chartOptions = {
        scales: {
            x: {
                ticks: {
                    color: ThemeStores.getTheme() ? "black" : "white", // Dynamically set X-axis label color
                }
            },
            y: {
                ticks: {
                    color: ThemeStores.getTheme() ? "black" : "white", // Dynamically set X-axis label color
                },
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: ThemeStores.getTheme() ? "black" : "white" // Set legend text to white
                }
            }
        }
    }

    render() {
        return (
            <div className="container">
                <Line data={this.hdopTime} options={this.chartOptions}/>
                <Line data={this.atlitudeTime} options={this.chartOptions}/>
                <Line data={this.coordinates} options={this.chartOptions}/>
                <TrajectoryPlot />
                <ScatterPlotRelativeToAverage />
            </div>
        );
    }
}

export default ChartsNMEA;