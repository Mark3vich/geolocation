import React, { Component } from 'react';
import { IDataTextSGK_T } from '../../interface/IDataTextSGK_T';
import ConvertDataSGK_T from '../../utils/SGK_T/ConvertDataSGK_T';

class Table extends Component<{ dataText: IDataTextSGK_T[] }> {
    constructor(props: { dataText: IDataTextSGK_T[] }) {
        super(props);
    };
    render() {
        const { dataText } = this.props;
        console.log(dataText);
        return (
            <table className="container table table-striped">
                <thead>
                    <tr>
                        <th scope="col">№</th>
                        <th scope="col">DEVICE_ID</th>
                        <th scope="col">DATE</th>
                        <th scope="col">TIME</th>
                        <th scope="col">LATITUDE</th>
                        <th scope="col">N/S</th>
                        <th scope="col">LONGITUDE</th>
                        <th scope="col">E/W</th>
                        <th scope="col">SPEED</th>
                        <th scope="col">COURSE</th>
                        {/* <th scope="col">ALTITUDE</th>
                        <th scope="col">COUNTER</th>
                        <th scope="col">IO_STATUS</th>
                        <th scope="col">EVENT_ID</th>
                        <th scope="col">AIN1</th>
                        <th scope="col">AIN2</th>
                        <th scope="col">FIX_MODE</th>
                        <th scope="col">GLONASS</th>
                        <th scope="col">GPS</th>
                        <th scope="col">HDOP</th> */}
                    </tr>
                </thead>
                <tbody>
                {dataText.map((item, index) => (
                        <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.device_id !== null ? item.device_id : 'N/d'}</td>
                        <td>{item.date !== null ? item.date : 'N/d'}</td>
                        <td>{item.time !== null ? item.time : 'N/d'}</td>
                        <td>{item.latitude !== null ? ConvertDataSGK_T.convertCoordinates(String(item.latitude)) : 'N/d'}</td>
                        <td>{item.n_s !== null ? item.n_s : 'N/d'}</td>
                        <td>{item.longitude !== null ? ConvertDataSGK_T.convertCoordinates(String(item.longitude)) : 'N/d'}</td>
                        <td>{item.e_w !== null ? item.e_w : 'N/d'}</td>
                        <td>{item.speed !== null ? item.speed : 'N/d'}</td>
                        <td>{item.course !== null ? item.course : 'N/d'}</td>
                        {/* <td>{item.altitude !== null ? item.altitude : 'N/d'}</td>
                        <td>{item.odometer !== null ? item.odometer : 'N/d'}</td>
                        <td>{item.io_status !== null ? item.io_status : 'N/d'}</td>
                        <td>{item.event_id !== null ? item.event_id : 'N/d'}</td>
                        <td>{item.ain1 !== null ? item.ain1 : 'N/d'}</td>
                        <td>{item.ain2 !== null ? item.ain2 : 'N/d'}</td>
                        <td>{item.fix_mode !== null ? item.fix_mode : 'N/d'}</td>
                        <td>{item.glonass_sat_no !== null ? item.glonass_sat_no : 'N/d'}</td>
                        <td>{item.gps_sat_no !== null ? item.gps_sat_no : 'N/d'}</td>
                        <td>{item.hdop !== null ? item.hdop : 'N/d'}</td> */}
                    </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default Table;