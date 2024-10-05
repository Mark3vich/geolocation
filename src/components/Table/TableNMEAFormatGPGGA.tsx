import { Component } from "react";
import { IDataNMEAFormatGPGGA } from "../../interfaces/IDataNMEAFormatGPGGA";
import ConvertDataNMEA from "../../utils/Reader/NMEA/ConvertDataNMEA";


class TableNMEAFormatGPGGA extends Component<{ dataText: IDataNMEAFormatGPGGA[] }> {
    render() {
        const { dataText } = this.props;
        return (
            <table className="container table table-striped">
                <thead>
                    <tr>
                        <th scope="col">№</th>
                        <th scope="col">MESSAGE_ID</th>
                        <th scope="col">UTC_TIME</th>
                        <th scope="col">LATITUDE</th>
                        <th scope="col">N/S</th>
                        <th scope="col">LONGITUDE</th>
                        <th scope="col">E/W</th>
                        <th scope="col">USED</th>
                        <th scope="col">HDOP</th>
                        <th scope="col">ATLITUDE</th>
                        <th scope="col">UNITS</th>
                        <th scope="col">CHECKSUM</th>
                    </tr>
                </thead>
                <tbody>
                    {dataText.map((dataText: IDataNMEAFormatGPGGA, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{dataText.message_id}</td>
                            <td>{dataText.utc_time}</td>
                            <td>{ConvertDataNMEA.convertCoordinate(dataText.latitude)}</td>
                            <td>{dataText.n_s_indicator}</td>
                            <td>{ConvertDataNMEA.convertCoordinate(dataText.longitude)}</td>
                            <td>{dataText.e_w_indicator}</td>
                            <td>{dataText.satellites_used}</td>
                            <td>{dataText.hdop}</td>
                            <td>{dataText.altitude}</td>
                            <td>{dataText.units}</td>
                            <td>{dataText.checksum}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default TableNMEAFormatGPGGA;