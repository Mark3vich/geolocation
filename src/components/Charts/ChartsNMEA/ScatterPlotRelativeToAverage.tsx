import { Component } from "react";
import DataStoresVectorPNS from "../../../stores/DataStoresVectorPNS";
import AverageCoordinatesOfPNS from "../../../utils/Math/AverageCoordinatesOfPNS";
import { Line, Scatter } from "react-chartjs-2";
import { IDeviation } from "../../../interfaces/Components/IDeviation";

class ScatterPlotRelativeToAverage extends Component {
    private calculateDeviationFromAverage(): IDeviation[] {
        const data = DataStoresVectorPNS.getDataText();
        const average = AverageCoordinatesOfPNS.calculateAverageCoordinates(data);
    
        // Вычисляем отклонения по широте, долготе и высоте
        const deviations: IDeviation[] = data.map((coord, index) => ({
          latitudeDeviation: Number(coord.latitude) - average.latitude,
          longitudeDeviation: Number(coord.longitude) - average.longitude,
          heightDeviation: Number(coord.altitude) - average.height,
          time: index, // Используем индекс как аналог времени
        }));
        
        return deviations;
    }

    render() {
        const deviations = this.calculateDeviationFromAverage();
    
        // Данные для графика отклонений по широте относительно долготы
        const scatterData = {
          datasets: [
            {
              label: "Отклонения по широте и долготе",
              data: deviations.map((dev: any) => ({
                x: dev.longitudeDeviation,
                y: dev.latitudeDeviation,
              })),
              backgroundColor: "rgba(75, 192, 192, 0.6)",
              pointRadius: 5,
              pointBackgroundColor: "rgba(75, 192, 192, 1)",
              pointBorderColor: "rgba(0, 0, 0, 0.1)",
              pointBorderWidth: 1,
            },
          ],
        };
    
        // Данные для графика отклонений по высоте относительно времени
        const lineData = {
          labels: deviations.map((dev: any) => dev.time), // Время (номер эпохи)
          datasets: [
            {
              label: "Отклонения по высоте",
              data: deviations.map((dev: any) => dev.heightDeviation),
              borderColor: "rgba(255, 99, 132, 1)",
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              fill: false,
              tension: 0.1,
            },
          ],
        };
    
        const scatterOptions = {
          scales: {
            x: {
              type: "linear" as const,
              title: {
                display: true,
                text: "Отклонение по долготе",
              },
            },
            y: {
              title: {
                display: true,
                text: "Отклонение по широте",
              },
            },
          },
        };
    
        const lineOptions = {
          scales: {
            x: {
              title: {
                display: true,
                text: "Время (номер эпохи)",
              },
            },
            y: {
              title: {
                display: true,
                text: "Отклонение по высоте",
              },
            },
          },
        };
    
        return (
          <div className="container">
            <h2>График разброса по широте и долготе</h2>
            <Scatter data={scatterData} options={scatterOptions} />
    
            <h2>График отклонений по высоте от времени</h2>
            <Line data={lineData} options={lineOptions} />
          </div>
        );
    }
}

export default ScatterPlotRelativeToAverage;