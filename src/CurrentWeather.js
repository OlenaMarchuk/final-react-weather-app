import React from "react";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./CurrentWeather.css";
export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <h1 className="city-name">{props.weatherData.name} </h1>
      <div className="date-time container-fluid">
        <div className="row">
          <div className="col-6">
            {props.weatherData.date.toLocaleString("eng", {
              weekday: "long",
            })}
            {", "}
            {props.weatherData.date.toLocaleString("eng", {
              month: "long",
            })}{" "}
            {props.weatherData.date.getDate()}
          </div>
          <div className="col-6">
            <FormattedTime date={props.weatherData.date} />
          </div>
        </div>
      </div>
      <div className="description">{props.weatherData.description} </div>
      <div className="row">
        <div className="col-6 clearfix">
          <span className="icon float-start">
            <WeatherIcon icon={props.weatherData.icon} />
          </span>
          <WeatherTemperature tempCelsius={props.weatherData.temperature} />
        </div>
        <div className="col-6">
          <ul className="additional-info">
            <li>Humidity: {props.weatherData.humidity}%</li>
            <li>Wind: {Math.round(props.weatherData.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
