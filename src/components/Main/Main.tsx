import React, { Component } from 'react';
import DataTextReader from '../../utils/DataTextReader';
import { IMainState } from '../../interface/IMainState';

class Main extends Component<{}, IMainState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      fileContent: '',
      errorMessage: '',
      dataText: null,
    };
  }

  // Обработчик выбора файла
  handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Получаем выбранный файл

    if (file && file.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const content = e.target?.result as string;
        new DataTextReader(content).convertString();
        // try {

        // } catch (error) {
        //     this.setState({ fileContent: '', errorMessage: 'Invalid format data' });
        // }
        this.setState({ fileContent: content, errorMessage: '' });
      };
      reader.readAsText(file);
    } else {
      this.setState({ errorMessage: 'Please upload a valid .txt file', fileContent: '' });
    }
  };

  render() {
    const { fileContent, errorMessage } = this.state;

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
            {fileContent && (
              <div className="mt-4">
                <h3>File Content:</h3>
                <pre>{fileContent}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default Main;
