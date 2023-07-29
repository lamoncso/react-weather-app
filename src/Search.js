import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    setLoaded(true);

    setWeather({
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
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div className="Search">
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)} °C</li>
          <li>{weather.description}</li>
          <li>Humidity: {Math.round(weather.humidity)} %</li>
          <li>Wind: {Math.round(weather.wind)} km/h</li>
          <li>
            <img
              src={weather.icon}
              width="50px"
              height="50px"
              alt={weather.description}
            />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
