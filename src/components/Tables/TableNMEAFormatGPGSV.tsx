import { Component } from "react";
import { IDataNMEAFormatGPGSV } from "../../interfaces/Datas/IDataNMEAFormatGPGSV";
import ThemeStores from "../../stores/ThemeStores";

class TableNMEAFormatGPGSV extends Component<{ dataText: IDataNMEAFormatGPGSV[] }> {
    render() {
        const { dataText } = this.props;
        const theme = ThemeStores.getTheme();
        return (
            <table className={`container table ${theme ? 'table' : 'table-dark'} table-striped table-hover`}>
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
                    {dataText.map((dataText: IDataNMEAFormatGPGSV, index) => (
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