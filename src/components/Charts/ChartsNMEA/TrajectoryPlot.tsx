import React, { Component } from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, PointElement, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import DataStoresNMEA_GPGGA from '../../../stores/DataStoresNMEA_GPGGA';
import { IDataNMEA_GPGGA } from '../../../interface/IDataNMEA_GPGGA';
import ConvertDataNMEA from '../../../utils/Reader/NMEA/ConvertDataNMEA';
import { IPoint } from '../../../interface/IPoint';
import { TrajectoryState } from '../../../interface/ITrajectoryState';

ChartJS.register(PointElement, LinearScale, Title, Tooltip, Legend);

class TrajectoryPlot extends Component<{}, TrajectoryState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        const dataText = DataStoresNMEA_GPGGA.getDataText() as IDataNMEA_GPGGA[];

        if (dataText && dataText.length > 0) {
            const points: IPoint[] = dataText.map(item => ({
                x: ConvertDataNMEA.convertToCoordinateString(item.longitude),
                y: ConvertDataNMEA.convertToCoordinateString(item.latitude),
                hdop: item.hdop,
            }));

            this.setState({
                data: points,
            });
        }
    }

    render() {
        const { data } = this.state;

        const chartData = {
            datasets: [
                {
                    label: 'Траектория движения',
                    data: data.map((point) => ({
                        x: point.x,
                        y: point.y,
                    })),
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    pointRadius: data.map((point) => point.hdop * 5), // Размер точки в зависимости от HDOP
                    pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                    pointBorderColor: 'rgba(0, 0, 0, 0.1)',
                    pointBorderWidth: 1,
                },
            ],
        };

        const options = {
            scales: {
                x: {
                    type: 'linear' as const, // Явно указываем тип 'linear'
                    position: 'bottom' as const, // Явно указываем позицию оси
                    title: {
                        display: true,
                        text: 'Долгота',
                    },
                },
                y: {
                    type: 'linear' as const, // Явно указываем тип 'linear'
                    title: {
                        display: true,
                        text: 'Широта',
                    },
                },
            },
            plugins: {
                legend: {
                    display: true,
                },
                tooltip: {
                    callbacks: {
                        label: (context: any) => {
                            const point = data[context.dataIndex];
                            return `Широта: ${point.y}, Долгота: ${point.x}, HDOP: ${point.hdop}`;
                        },
                    },
                },
            },
        };

        return (
            <div className="container">
                <h2>График траектории с учетом HDOP</h2>
                <Scatter data={chartData} options={options} />
            </div>
        );
    }
}

export default TrajectoryPlot;
