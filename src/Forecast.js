import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Forecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  console.log(forecast);
  if (loaded) {
    return (
      <div className=" Forecast container">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if ((index > 0) & (index < 7)) {
              return (
                <div className="col forecast-day-info" key={index}>
                  <WeatherForecastDay forecastData={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
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
