import React, { Component } from "react";
import { PolarArea } from 'react-chartjs-2';
import ConvertDataNMEA from "../../../utils/NMEA/ConvertDataNMEA";
import DataStoresNMEA_GPGSV from "../../../stores/DataStoresNMEA_GPGSV";

interface SkyPlotState {
    satelliteIds: string[] | undefined;
    azimuths: number[] | undefined;
    zenithAngles: number[] | undefined;
}

class SkyPlot extends Component<{}, SkyPlotState> {
    constructor(props: {}) {
        super(props);

        // Инициализация состояния компонента
        this.state = {
            satelliteIds: [],
            azimuths: [],
            zenithAngles: []
        };
    }

    componentDidMount() {
        // Получение данных из источников данных
        const satelliteIds: string[] | undefined = DataStoresNMEA_GPGSV.getMessageId();
        const azimuths: number[] | undefined = DataStoresNMEA_GPGSV.getAzimuth();
        const zenithAngles: number[] | undefined = ConvertDataNMEA.convertZenithAngles(azimuths);

        // Обновляем состояние компонента
        this.setState({
            satelliteIds,
            azimuths,
            zenithAngles
        });
    }

    render() {
        const { satelliteIds, azimuths, zenithAngles } = this.state;

        const data = {
            labels: satelliteIds, // Имена спутников (подписи)
            datasets: [
                {
                    label: 'Спутники',
                    data: zenithAngles, // Зенитные углы (радиусы)
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                    pointRadius: 5,
                    hoverBackgroundColor: 'rgba(255, 159, 64, 1)'
                },
            ],
        };

        const options = {
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        label: (tooltipItem: any) => {
                            const index = tooltipItem.dataIndex;
                            
                            // Проверка, что satelliteIds, azimuths и zenithAngles существуют
                            const satellite = this.state.satelliteIds?.[index] || 'Неизвестный спутник';
                            const azimuth = this.state.azimuths?.[index] || 0;
                            const elevation = this.state.zenithAngles?.[index] || 0; // Если данных нет, используется значение по умолчанию
                
                            return `${satellite}: Азимут = ${azimuth}°, Угол возвышения = ${elevation}°`;
                        }
                    }
                }
            }
        };

        return (
            <div className="container">
                <h2>SkyPlot спутников</h2>
                <PolarArea data={data} options={options} />
            </div>
        );
    }
}

export default SkyPlot;
