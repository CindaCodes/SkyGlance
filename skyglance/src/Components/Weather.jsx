import React, { useState } from "react";
import "../Style/Weather.css";
import axios from "axios";
import WeatherInfo from "./Info";
import WeatherIcon from "./Icon";
import Units from "./Units";

export default function Weather(props) {
  const [WeatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      pressure: response.data.temperature.pressure,
      icon: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
      feelsLike: response.data.temperature.feels_like,
      city: response.data.city,
    });
  }

  function search() {
    const apiKey = import.meta.env.VITE_API_KEY;
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (WeatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12 col-sm-9 mb-2 mb-sm-0">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus
                autoCapitalize="words"
                value={city}
                onChange={handleCityChange}
              />
            </div>
            <div className="col-12 col-sm-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={WeatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
