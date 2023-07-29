import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    console.log(response);
    setWeather({
      date: "12:",
      time: 15,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c119ffef35b7245a5e03b6e5724ae961&units=metric`;
    axios.get(url).then(showWeather);
  }

  let form = (
    <form id="search-form" onSubmit={handleSubmit}>
      <div className="search-form container-fluid">
        <div className="row">
          <div className="col-sm-8">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control search-input"
              autoComplete="off"
              onChange={updateCity}
            />
          </div>
          <div className="col-sm-4">
            <input
              type="submit"
              className="btn btn-primary w-100 btn-search"
              value="Search"
            />
          </div>
        </div>
      </div>
    </form>
  );

  return (
    <div className="container">
      <div className="weather">
        <img
          src="https://lucky-florentine-be2abb.netlify.app/images/logo.jpg"
          alt="logo"
          className="logo img-fluid"
        />
        {form}
        <div className="weatherInfo mt-3 container-fluid">
          <div className="row">
            <div className="col-sm-7">
              <h1>{city}</h1>
              <ul>
                <li>
                  <span>{weather.date}</span>
                  <span>{weather.time}</span>
                  <br />
                </li>
                <li>
                  <span>{weather.description}</span>
                </li>
                <li>
                  Humidity:
                  <strong>{Math.round(weather.humidity)}</strong>
                  <span className="unitHumidity"> %</span>
                </li>
                <li>
                  Wind: <strong>{Math.round(weather.wind)}</strong>
                  <span className="unitWind"> km/h</span>
                </li>
              </ul>
            </div>
            <div className="col-sm-5">
              <div className="temperature-container d-flex">
                <img
                  src={weather.icon}
                  className="weather-img-head"
                  alt="current-weather-icon"
                ></img>
                <span className="temperature mt-3">
                  {Math.round(weather.temperature)}
                </span>
                <span className="unit mt-3">°C</span>
              </div>
            </div>
          </div>
        </div>
        <div className="weatherForecast container-fluid"></div>
      </div>
    </div>
  );
}
