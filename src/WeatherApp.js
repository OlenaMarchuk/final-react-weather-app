import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import "./WeatherApp.css";
export default function WeatherApp(props) {
  const [city, setCity] = useState(props.city);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const apiKey = `932dccfce347762cffb3c2a4870d3177`;
  function getWeatherData(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      name: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }
  function makeApiCall() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeatherData);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleCity(event) {
    event.preventDefault();
    makeApiCall();
  }
  function findCurrentLocation(position) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeatherData);
  }
  function getLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(findCurrentLocation);
  }
  if (weatherData.ready) {
    return (
      <div className="WeatherApp">
        <form className="Form input-group" onSubmit={handleCity}>
          <input
            type="text"
            className="form-control city-search"
            autoComplete="off"
            placeholder="Enter a city"
            onChange={updateCity}
          />
          <button
            className="btn btn-outline-secondary search-button"
            type="submit"
          >
            SEARCH
          </button>
          <button
            className="btn btn-outline-secondary current-button"
            type="button"
            onClick={getLocation}
          >
            CURRENT
          </button>
        </form>
        <CurrentWeather weatherData={weatherData} />
      </div>
    );
  } else {
    makeApiCall();
    return "Loading...";
  }
}
