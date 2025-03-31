import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
      <div className="row align-items-center mt-3 justify-content-center text-center text-md-start">
        <div className="col-4">
          <h1 className="m-0">{props.data.city}</h1>
          <ul className="list-unstyled m-0">
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
        <div className="col-12 col-md-3 d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-end text-center mt-3 mt-md-0 gap-3">
          <img
            src={props.data.icon}
            className="weather-icon"
            alt={props.data.description}
          />
          <div>
            <span className="display-1 m-0 temperature">
              {Math.round(props.data.temperature)}
            </span>
            <sup className="h2 unit">ºC</sup>
          </div>
        </div>

        <div className="col-12 col-md-3 mt-3 mt-md-0">
          <ul className="list-unstyled m-0">
            <li>Feels Like: {props.data.feelsLike} ºC</li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    );
}