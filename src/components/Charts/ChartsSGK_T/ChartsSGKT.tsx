import { Component } from "react";
import { Line } from "react-chartjs-2";
import ConvertDataSGKT from "../../../utils/Reader/SGK_T/ConvertDataSGKT";
import DataStoresSGK_T from "../../../stores/DataStoresSGKT";
import ThemeStores from "../../../stores/ThemeStores";
import { observer } from "mobx-react";

@observer
class ChartsSGKT extends Component {
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
                <h2>График скорости и времени</h2>
                <Line data={this.speedTime} options={this.chartOptions}/>

                <h2>График координат</h2>
                <Line data={this.coordinates} options={this.chartOptions}/>
            </div>
        );
    }
}

export default ChartsSGKT;