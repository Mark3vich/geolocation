import React, { Component } from 'react';
import { IMainState } from '../../interface/IMainState';
import Table from '../Table/Table';
import DataTextStores from '../../stores/DataTextStores';
import { observer } from 'mobx-react';
import { IDataText } from '../../interface/IDataTextSGK_T';
import UniversalGeometryReaderData from '../../utils/UniversalGeometryReaderData';

@observer
class Main extends Component<{}, IMainState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      errorMessage: '',
    };
  }

  handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; 

    if (file && file.type === 'text/plain') {
      const reader: FileReader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const content: string = e.target?.result as string;
        const dataText: IDataText[] | null = new UniversalGeometryReaderData(content).universalGeometryReader();
        
        if(dataText !== null) { 
          DataTextStores.setDataText(dataText);
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
            {DataTextStores.getDataText()?.length ? (
              <div className="mt-4">
                <h3>File Content:</h3>
                <Table dataText={DataTextStores.getDataText() ?? []} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
};

export default Main;
