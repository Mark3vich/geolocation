import React, { Component } from 'react';
import { IDataSGKT } from '../../interfaces/Datas/IDataSGKT';
import ConvertDataSGKT from '../../utils/Reader/SGK_T/ConvertDataSGKT';
import ThemeStores from '../../stores/ThemeStores';

class TableSGKT extends Component<{ dataText: IDataSGKT[] }> {
    render() {
        const { dataText } = this.props;
        const theme = ThemeStores.getTheme();
        return (
            <table className={`container table ${theme ? 'table' : 'table-dark'} table-striped table-hover`}>
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
                    </tr>
                </thead>
                <tbody>
                {dataText.map((item, index) => (
                        <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.device_id !== null ? item.device_id : 'N/d'}</td>
                        <td>{item.date !== null ? item.date : 'N/d'}</td>
                        <td>{item.time !== null ? item.time : 'N/d'}</td>
                        <td>{item.latitude !== null ? ConvertDataSGKT.convertCoordinate(item.latitude) : 'N/d'}</td>
                        <td>{item.n_s !== null ? item.n_s : 'N/d'}</td>
                        <td>{item.longitude !== null ? ConvertDataSGKT.convertCoordinate(item.longitude) : 'N/d'}</td>
                        <td>{item.e_w !== null ? item.e_w : 'N/d'}</td>
                        <td>{item.speed !== null ? item.speed : 'N/d'}</td>
                        <td>{item.course !== null ? item.course : 'N/d'}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default TableSGKT;