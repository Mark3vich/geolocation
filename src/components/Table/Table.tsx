import React, { Component } from 'react';
import { IDataText } from '../../interface/IDataText';

class Table extends Component<{ dataText: IDataText[] }> {
    constructor(props: { dataText: IDataText[] }) {
        super(props);
    };
    render() {
        const { dataText } = this.props;
        return (
            <table className="container table table-striped">
                <thead>
                    <tr>
                        <th scope="col">REPORT</th>
                        <th scope="col">DEVICE_ID</th>
                        <th scope="col">DATE</th>
                        <th scope="col">TIME</th>
                        <th scope="col">LATITUDE</th>
                        <th scope="col">N/S</th>
                        <th scope="col">LONGITUDE</th>
                        <th scope="col">E/W</th>
                        <th scope="col">SPEED</th>
                        <th scope="col">COURSE</th>
                        <th scope="col">ALTITUDE</th>
                        <th scope="col">ODOMETER</th>
                        <th scope="col">IO_STATUS</th>
                        <th scope="col">EVENT_ID</th>
                        <th scope="col">AIN1</th>
                        <th scope="col">AIN2</th>
                        <th scope="col">FIX_MODE</th>
                        <th scope="col">GLONASS</th>
                        <th scope="col">GPS</th>
                        <th scope="col">HDOP</th>
                    </tr>
                </thead>
                <tbody>
                {dataText.map((item, index) => (
                        <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.device_id !== null ? item.device_id : 'No data available'}</td>
                        <td>{item.date !== null ? item.date : 'No data available'}</td>
                        <td>{item.time !== null ? item.time : 'No data available'}</td>
                        <td>{item.latitude !== null ? item.latitude : 'No data available'}</td>
                        <td>{item.n_s !== null ? item.n_s : 'No data available'}</td>
                        <td>{item.longitude !== null ? item.longitude : 'No data available'}</td>
                        <td>{item.e_w !== null ? item.e_w : 'No data available'}</td>
                        <td>{item.speed !== null ? item.speed : 'No data available'}</td>
                        <td>{item.course !== null ? item.course : 'No data available'}</td>
                        <td>{item.altitude !== null ? item.altitude : 'No data available'}</td>
                        <td>{item.odometer !== null ? item.odometer : 'No data available'}</td>
                        <td>{item.io_status !== null ? item.io_status : 'No data available'}</td>
                        <td>{item.event_id !== null ? item.event_id : 'No data available'}</td>
                        <td>{item.ain1 !== null ? item.ain1 : 'No data available'}</td>
                        <td>{item.ain2 !== null ? item.ain2 : 'No data available'}</td>
                        <td>{item.fix_mode !== null ? item.fix_mode : 'No data available'}</td>
                        <td>{item.glonass_sat_no !== null ? item.glonass_sat_no : 'No data available'}</td>
                        <td>{item.gps_sat_no !== null ? item.gps_sat_no : 'No data available'}</td>
                        <td>{item.hdop !== null ? item.hdop : 'No data available'}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default Table;