import React, { useState } from "react";
export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheitTemp() {
    return (props.tempCelsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="current-temp">{Math.round(props.tempCelsius)} </span>
        <span className="units">
          ºC |{" "}
          <a href="/" onClick={displayFahrenheit}>
            ºF
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="current-temp">{Math.round(fahrenheitTemp())} </span>
        <span className="units">
          <a href="/" onClick={displayCelsius}>
            ºC{" "}
          </a>
          | ºF
        </span>
      </span>
    );
  }
}
