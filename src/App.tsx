import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Charts from './components/Charts/Charts';
import { Provider } from 'mobx-react';
import DataTextStores from './stores/DataTextStores';

function App() {
  return (
    <Provider DataTextStores={DataTextStores}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/charts" element={<Charts />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

