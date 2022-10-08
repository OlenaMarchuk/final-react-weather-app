import React from "react";

import WeatherApp from "./WeatherApp";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherApp />
        <footer>
          This app is coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/44087-olena-marchuk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Olena Marchuk
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/OlenaMarchuk/final-react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and {""}
          <a
            href="https://cute-salamander-4d461a.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
