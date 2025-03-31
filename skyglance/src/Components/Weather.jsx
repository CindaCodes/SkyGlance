import React, { useState } from "react";
import "../Style/Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [WeatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
      feelsLike: response.data.temperature.feels_like,
      city: response.data.city,
    });
  }

  if (WeatherData.ready) {
    return (
      <div className="Weather ">
        <form>
          <div className="row">
            <div className="col-12 col-sm-9 mb-2 mb-sm-0">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus
                autoCapitalize="words"
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
        <div className="row align-items-center mt-3 justify-content-center text-center text-md-start">
          <div className="col-4">
            <h1 className="m-0">{WeatherData.city}</h1>
            <ul className="list-unstyled m-0">
              <li>
                <FormattedDate date={WeatherData.date} />
              </li>
              <li className="text-capitalize">{WeatherData.description}</li>
            </ul>
          </div>
          <div className="col-12 col-md-3 d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-end text-center mt-3 mt-md-0 gap-3">
            <img
              src={WeatherData.icon}
              className="weather-icon"
              alt={WeatherData.description}
            />
            <div>
              <span className="display-1 m-0 temperature">
                {Math.round(WeatherData.temperature)}
              </span>
              <sup className="h2 unit">ºC</sup>
            </div>
          </div>

          <div className="col-12 col-md-3 mt-3 mt-md-0">
            <ul className="list-unstyled m-0">
              <li>Feels Like: {WeatherData.feelsLike} ºC</li>
              <li>Humidity: {WeatherData.humidity} %</li>
              <li>Wind: {WeatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = import.meta.env.VITE_SC_API_KEY;
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
