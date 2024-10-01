import React, { Component } from 'react';
import { IMainState } from '../../interface/IMainState';
import TableSGK_T from '../Table/TableSGK_T';
import DataStoresSGK_T from '../../stores/DataStoresSGK_T';
import { observer } from 'mobx-react';
import { IDataSGK_T } from '../../interface/IDataSGK_T';
import UniversalGeometryReaderData from '../../utils/UniversalGeometryReaderData';
import { IDataNMEA_GPGGA } from '../../interface/IDataNMEA_GPGGA';
import ConvertDataSGK_T from '../../utils/SGK_T/ConvertDataSGK_T';
import ConvertDataNMEA from '../../utils/NMEA/ConvertDataNMEA';
import DataStoresNMEA_GPGGA from '../../stores/DataStoresNMEA_GPGGA';
import { IDataNMEA_GPRMC } from '../../interface/IDataNMEA_GPRMC';
import DataStoresNMEA_GPRMC from '../../stores/DataStoresNMEA_GPRMC';
import TableNMEA_GPGGA from '../Table/TableNMEA_GPGGA';

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
        const dataText: IDataSGK_T[] | IDataNMEA_GPGGA[] | IDataNMEA_GPRMC[] | null = new UniversalGeometryReaderData(content).universalGeometryReader();
        if(dataText !== null) {
          if (ConvertDataSGK_T.isSGKFormat(dataText)) {
            const typedDataText: IDataSGK_T[] = dataText as IDataSGK_T[];
            DataStoresSGK_T.setDataText(typedDataText);
          } else if(ConvertDataNMEA.isNMEAFormatGPGGA(dataText)) {
            const typedDataText: IDataNMEA_GPGGA[] = dataText as IDataNMEA_GPGGA[];
            DataStoresNMEA_GPGGA.setDataText(typedDataText);
          } else if(ConvertDataNMEA.isNMEAFormatGPRMC(dataText)) {
            const typedDataText: IDataNMEA_GPRMC[] = dataText as IDataNMEA_GPRMC[];
            DataStoresNMEA_GPRMC.setDataText(typedDataText);
          }
        }
        this.setState({ errorMessage: '' });
      };
      reader.readAsText(file);
    } else {
      this.setState({ errorMessage: 'Please upload a valid .txt file'});
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
                <h3>File Content NMEA:</h3>
                <TableNMEA_GPGGA dataText={DataStoresNMEA_GPGGA.getDataText() ?? []} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
};

export default Main;
