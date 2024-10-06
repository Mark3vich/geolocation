import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link
import { AiFillSun } from "react-icons/ai";
import ThemeStores from '../../stores/ThemeStores';
import { HeaderState } from '../../interfaces/Components/IHeaderState';

class Header extends Component<{}, HeaderState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isDarkTheme: ThemeStores.getTheme() // Инициализируем локальное состояние текущей темой
    };
  }

  // Функция для переключения темы
  toggleTheme = () => {
    const newTheme = !this.state.isDarkTheme;
    ThemeStores.setTheme(newTheme); // Устанавливаем новое значение темы в хранилище
    this.setState({ isDarkTheme: newTheme }); // Обновляем локальное состояние для перерисовки компонента
  }

  render() {
    return (
      <nav className={`navbar navbar-expand-lg ${ThemeStores.getTheme() ? "navbar-dark bg-primary" : "navbar-dark bg-dark"}`}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            Geolocation
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/charts">
                  Charts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/map">
                  Map
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/skyplot">
                  SkyPlot
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/statistics">
                  Statistics
                </Link>
              </li>
            </ul>
            <AiFillSun style={{marginLeft: "10px"}} color={ThemeStores.getTheme() ? "yellow" : "white"} size={30} cursor={"pointer"} onClick={this.toggleTheme} />
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
