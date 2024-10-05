import { Component } from "react";
import { IDataNMEA_GPGSV } from "../../interface/IDataNMEA_GPGSV";

class TableNMEAFormatGPGSV extends Component<{ dataText: IDataNMEA_GPGSV[] }> {
    render() {
        const { dataText } = this.props;
        return (
            <table className="container table table-striped">
                <thead>
                    <tr>
                        <th scope="col">№</th>
                        <th scope="col">MESSAGE_ID</th>
                        <th scope="col">NUMBER_OF_MESSAGE</th>
                        <th scope="col">MESSAGE_NUMBER</th>
                        <th scope="col">SATELLITES_IN_VIEW</th>
                        <th scope="col">SATELLITE_ID</th>
                        <th scope="col">ELEVATION</th>
                        <th scope="col">AZIMUTH</th>
                        <th scope="col">SNR</th>
                        <th scope="col">CHECKSUM</th>
                    </tr>
                </thead>
                <tbody>
                    {dataText.map((dataText: IDataNMEA_GPGSV, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{dataText.message_id}</td>
                            <td>{dataText.number_message}</td>
                            <td>{dataText.message_number}</td>
                            <td>{dataText.satellites_in_view}</td>
                            <td>{dataText.satellite_id}</td>
                            <td>{dataText.elevation}</td>
                            <td>{dataText.azimuth}</td>
                            <td>{dataText.snr}</td>
                            <td>{dataText.checksum}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default TableNMEAFormatGPGSV;