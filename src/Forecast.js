import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  console.log(forecast);
  if (loaded) {
    return (
      <div className=" Forecast container">
        <div className="row">
          <div className="col-sm-2 forecast-day-info">
            <WeatherForecastDay forecastData={forecast[1]} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `932dccfce347762cffb3c2a4870d3177`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
