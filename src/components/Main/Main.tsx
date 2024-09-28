import React, { Component } from 'react';
import { IMainState } from '../../interface/IMainState';
import Table from '../Table/Table';
import DataTextStoresSGK_T from '../../stores/DataTextStoresSGK_T';
import { observer } from 'mobx-react';
import { IDataTextSGK_T } from '../../interface/IDataTextSGK_T';
import UniversalGeometryReaderData from '../../utils/UniversalGeometryReaderData';
import { IDataTextNMEA } from '../../interface/IDataTextNMEA';
import ConvertDataSGK_T from '../../utils/SGK_T/ConvertDataSGK_T';
import ConvertDataNMEA from '../../utils/NMEA/ConvertDataNMEA';
import DataTextStoresNMEA from '../../stores/DataTextStoresNMEA';

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
        const dataText: IDataTextSGK_T[] | IDataTextNMEA[] | null = new UniversalGeometryReaderData(content).universalGeometryReader();
        
        if(dataText !== null) {
          if (ConvertDataSGK_T.isSGKFormat(dataText)) {
            const typedDataText: IDataTextSGK_T[] = dataText as IDataTextSGK_T[];
            DataTextStoresSGK_T.setDataText(typedDataText);
          } else if(ConvertDataNMEA.isNMEAFormat(dataText)) {
            const typedDataText: IDataTextNMEA[] = dataText as IDataTextNMEA[];
            DataTextStoresNMEA.setDataText(typedDataText);
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
            {DataTextStoresSGK_T.getDataText()?.length ? (
              <div className="mt-4">
                <h3>File Content:</h3>
                <Table dataText={DataTextStoresSGK_T.getDataText() ?? []} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
};

export default Main;
