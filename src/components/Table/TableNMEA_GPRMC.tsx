import { Component } from "react";
import ConvertDataNMEA from "../../utils/Reader/NMEA/ConvertDataNMEA";
import { IDataNMEA_GPRMC } from "../../interface/IDataNMEA_GPRMC";


class TableNMEA_GPRMC extends Component<{ dataText: IDataNMEA_GPRMC[] }> {
    constructor(props: { dataText: IDataNMEA_GPRMC[] }) {
        super(props);
    };

    render() {
        const { dataText } = this.props;
        ConvertDataNMEA.convertCoordinate(dataText[0].latitude);
        return (
            <table className="container table table-striped">
                <thead>
                    <tr>
                        <th scope="col">№</th>
                        <th scope="col">MESSAGE_ID</th>
                        <th scope="col">UTC_TIME</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">LATITUDE</th>
                        <th scope="col">N/S</th>
                        <th scope="col">LONGITUDE</th>
                        <th scope="col">E/W</th>
                        <th scope="col">SPEED</th>
                        <th scope="col">DATA</th>
                        <th scope="col">MAGNETIC</th>
                        <th scope="col">CHECKSUM</th>
                    </tr>
                </thead>
                <tbody>
                    {dataText.map((dataText: IDataNMEA_GPRMC, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{dataText.message_id}</td>
                            <td>{dataText.utc_time}</td>
                            <td>{dataText.status}</td>
                            <td>{ConvertDataNMEA.convertCoordinate(dataText.latitude)}</td>
                            <td>{dataText.n_s_indicator}</td>
                            <td>{ConvertDataNMEA.convertCoordinate(dataText.longitude)}</td>
                            <td>{dataText.e_w_indicator}</td>
                            <td>{dataText.speed_over_group}</td>
                            <td>{dataText.data}</td>
                            <td>{dataText.magnetic_variation}</td>
                            <td>{dataText.checksum}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default TableNMEA_GPRMC;