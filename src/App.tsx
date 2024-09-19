import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Table from './components/Table/Table';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Определяем маршруты для страниц */}
          <Route path="/" element={<Main />} />
          <Route path="/table" element={<Table />} />
          {/* Можно добавить больше маршрутов для других страниц */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

