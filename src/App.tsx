import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Charts from './components/Charts/Charts';
import Map from './components/Map/Map';
import SkyPlot from './components/Charts/SkyPlot/SkyPlot';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/map" element={<Map />} />
          <Route path="/skyplot" element={<SkyPlot />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

