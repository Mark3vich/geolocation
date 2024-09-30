import { Component } from "react";
import { PolarArea } from 'react-chartjs-2';
import { Chart, RadialLinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import ConvertDataNMEA from "../../../utils/NMEA/ConvertDataNMEA";

class SkyPlot extends Component {
    // private data = {
    //     labels: satelliteIds, // Имена спутников (подписи)
    //     datasets: [
    //       {
    //         label: 'Спутники',
    //         data: ConvertDataNMEA.convertZenithAngles(), // Зенитные углы (радиусы)
    //         backgroundColor: 'rgba(75, 192, 192, 0.2)',
    //         borderColor: 'rgba(75, 192, 192, 1)',
    //         borderWidth: 1,
    //         pointBackgroundColor: 'rgba(255, 99, 132, 1)',
    //         pointRadius: 5,
    //         hoverBackgroundColor: 'rgba(255, 159, 64, 1)'
    //       },
    //     ],
    // };

    // private options = {
    //     scales: {
    //       r: {
    //         angleLines: {
    //           display: true
    //         },
    //         suggestedMin: 0,
    //         suggestedMax: 90,
    //         ticks: {
    //           reverse: true,
    //           stepSize: 10,
    //         },
    //         title: {
    //           display: true,
    //           text: 'Зенитные углы'
    //         }
    //       },
    //       theta: {
    //         beginAtZero: true,
    //         ticks: {
    //           display: true
    //         },
    //         gridLines: {
    //           display: true
    //         }
    //       }
    //     },
    //     plugins: {
    //       legend: {
    //         display: false,
    //       },
    //       tooltip: {
    //         callbacks: {
    //           label: (tooltipItem) => {
    //             const satellite = satelliteIds[tooltipItem.dataIndex];
    //             return `${satellite}: Azimuth = ${azimuths[tooltipItem.dataIndex]}°, Elevation = ${elevations[tooltipItem.dataIndex]}°`;
    //           }
    //         }
    //       }
    //     }
    //   };

    // render() {
    //     return (
    //         <div className="container">
    //             <h2>SkyPlot спутников</h2>
    //             <PolarArea data={this.data} options={this.options} />
    //         </div>
    //     );
    // }
}

export default SkyPlot;