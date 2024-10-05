import React, { Component } from 'react';

import { observer } from 'mobx-react';

import TableSGKT from '../Tables/TableSGKT';
import { IDataAll } from '../../interfaces/Datas/IDataAll';
import TableNMEAFormatGPGGA from '../Tables/TableNMEAFormatGPGGA';
import TableNMEAFormatGPRMC from '../Tables/TableNMEAFormatGPRMC';
import { IMainState } from '../../interfaces/Components/IMainState';
import DataStoresSGK_T from '../../stores/DataStoresSGK_T';
import DataStoresNMEA_GPGGA from '../../stores/DataStoresNMEA_GPGGA';
import DataStoresNMEA_GPRMC from '../../stores/DataStoresNMEA_GPRMC';
import DataStoresNMEA_GPGSV from '../../stores/DataStoresNMEA_GPGSV';
import UniversalGeometryReaderData from '../../utils/Reader/UniversalGeometryReaderData';
import DataStoresVectorPNS from '../../stores/DataStoresVectorPNS';
import TableNMEAFormatGPGSV from '../Tables/TableNMEAFormatGPGSV';

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

        // Установка состояний для таблиц
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

        // Установка состояний для математических вычислений
        let dataSGK_T = DataStoresSGK_T.getDataText() ?? [];
        let dataNMEA_GPGGA = DataStoresNMEA_GPGGA.getDataText() ?? [];
        if (dataSGK_T.length > 0) {
          DataStoresVectorPNS.setDataText(dataSGK_T);
        }
        if (dataNMEA_GPGGA.length > 0) {
          DataStoresVectorPNS.setDataText(dataNMEA_GPGGA);
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
                <TableSGKT dataText={DataStoresSGK_T.getDataText() ?? []} />
              </div>
            ) : null}
            {DataStoresNMEA_GPGGA.getDataText()?.length ? (
              <div className="mt-4">
                <h3>File Content NMEA GPGGA:</h3>
                <TableNMEAFormatGPGGA dataText={DataStoresNMEA_GPGGA.getDataText() ?? []} />
              </div>
            ) : null}
            {DataStoresNMEA_GPRMC.getDataText()?.length ? (
              <div className="mt-4">
                <h3>File Content NMEA GPRMC:</h3>
                <TableNMEAFormatGPRMC dataText={DataStoresNMEA_GPRMC.getDataText() ?? []} />
              </div>
            ) : null}
            {DataStoresNMEA_GPGSV.getDataText()?.length ? (
              <div className="mt-4">
                <h3>File Content NMEA GPGSV:</h3>
                <TableNMEAFormatGPGSV dataText={DataStoresNMEA_GPGSV.getDataText() ?? []} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
};

export default Main;
