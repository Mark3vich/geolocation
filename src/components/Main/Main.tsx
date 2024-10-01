import React, { Component } from 'react';

import { observer } from 'mobx-react';

import TableSGK_T from '../Table/TableSGK_T';
import { IDataAll } from '../../interface/IDataAll';
import TableNMEA_GPGGA from '../Table/TableNMEA_GPGGA';
import TableNMEA_GPRMC from '../Table/TableNMEA_GPRMC';
import TableNMEA_GPGSV from '../Table/TableNMEA_GPGSV';
import { IMainState } from '../../interface/IMainState';
import DataStoresSGK_T from '../../stores/DataStoresSGK_T';
import DataStoresNMEA_GPGGA from '../../stores/DataStoresNMEA_GPGGA';
import DataStoresNMEA_GPRMC from '../../stores/DataStoresNMEA_GPRMC';
import DataStoresNMEA_GPGSV from '../../stores/DataStoresNMEA_GPGSV';
import UniversalGeometryReaderData from '../../utils/UniversalGeometryReaderData';

@observer
class Main extends Component<{}, IMainState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      errorMessage: '', // Убрать локальное состояние ошибки передать в store
    };
  }

  handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = event.target.files?.[0];

    if (file && file.type === 'text/plain') {
      const reader: FileReader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const content: string = e.target?.result as string;
        const dataAllTypeArray: IDataAll = {} as IDataAll;
        const dataText: IDataAll | null = new UniversalGeometryReaderData(content).universalGeometryReader(dataAllTypeArray);
        if (dataText !== null) {
          if (dataText.dataSGK_T?.length > 0) {
            DataStoresSGK_T.setDataText(dataText.dataSGK_T);
          }
          if (dataText.dataNMEA_GPGGA?.length > 0) {
            DataStoresNMEA_GPGGA.setDataText(dataText.dataNMEA_GPGGA);
          }
          if (dataText.dataNMEA_GPRMC?.length > 0) {
            DataStoresNMEA_GPRMC.setDataText(dataText.dataNMEA_GPRMC);
          }
          if (dataText.dataNMEA_GPGSV?.length > 0) {
            DataStoresNMEA_GPGSV.setDataText(dataText.dataNMEA_GPGSV);
          }
        }
        this.setState({ errorMessage: '' });
      };
      reader.readAsText(file);
    } else {
      this.setState({ errorMessage: 'Please upload a valid .txt file' });
    }
  };

  render() {
    const { errorMessage } = this.state;

    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <h1>Выберите файл с геолокацией автобуса</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <input type="file" accept=".txt" onChange={this.handleFileChange} />
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {DataStoresSGK_T.getDataText()?.length ? (
              <div className="mt-4">
                <h3>File Content SGK_T:</h3>
                <TableSGK_T dataText={DataStoresSGK_T.getDataText() ?? []} />
              </div>
            ) : null}
            {DataStoresNMEA_GPGGA.getDataText()?.length ? (
              <div className="mt-4">
                <h3>File Content NMEA GPGGA:</h3>
                <TableNMEA_GPGGA dataText={DataStoresNMEA_GPGGA.getDataText() ?? []} />
              </div>
            ) : null}
            {DataStoresNMEA_GPRMC.getDataText()?.length ? (
              <div className="mt-4">
                <h3>File Content NMEA GPRMC:</h3>
                <TableNMEA_GPRMC dataText={DataStoresNMEA_GPRMC.getDataText() ?? []} />
              </div>
            ) : null}
            {DataStoresNMEA_GPGSV.getDataText()?.length ? (
              <div className="mt-4">
                <h3>File Content NMEA GPGSV:</h3>
                <TableNMEA_GPGSV dataText={DataStoresNMEA_GPGSV.getDataText() ?? []} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
};

export default Main;
