import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Charts from './components/Charts/Charts';
import Map from './components/Map/Map';
import SkyPlot from './components/Charts/SkyPlot/SkyPlot';
import Statistics from './components/Statistics/Statistics';
import ThemeStores from './stores/ThemeStores';
import { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class App extends Component {
  render() {
    const theme = ThemeStores.getTheme();
    return (
      <Router>
        <div className={`App ${theme ? "theme_light" : "theme_dark"}`}>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/map" element={<Map />} />
            <Route path="/skyplot" element={<SkyPlot />} />
            <Route path="/statistics" element={<Statistics />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;

