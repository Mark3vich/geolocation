import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Charts from './components/Charts/Charts';
import Map from './components/Map/Map';

const data = [
  { device_id: 'Device1', latitude: 50.344100, longitude: 36.341844 },
  { device_id: 'Device2', latitude: 51.515, longitude: 36.34 },
  // Добавьте больше данных, если нужно
];

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

