import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForecastDay(props) {
  let date = new Date(props.forecastData.dt * 1000);
  function formatedDay() {
    let day = date.toLocaleString("eng", {
      weekday: "long",
    });

    return day;
  }
  function formatedMonth() {
    let formatedMonth = date.toLocaleString("eng", {
      month: "long",
    });
    return formatedMonth;
  }
  function formatedDate() {
    let formatedDate = date.getDate();
    return formatedDate;
  }
  return (
    <div className="WeatherForecastDay">
      <div className="forecast-day ">{formatedDay()}</div>
      <div className="forecast-date mb-2">
        {formatedMonth()}, {formatedDate()}
      </div>
      <div>
        <WeatherIcon icon={props.forecastData.weather[0].icon} size={45} />
      </div>
      <div>
        <span className="forecast-day-temp">
          {Math.round(props.forecastData.temp.max)}º
        </span>{" "}
        <span className="forecast-night-temp">
          {Math.round(props.forecastData.temp.min)}º
        </span>
      </div>
    </div>
  );
}