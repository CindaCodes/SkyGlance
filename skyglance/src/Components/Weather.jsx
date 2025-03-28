import React from "react";
import "../Style/Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
              autoCapitalize="words"
              autocorrect="off"
              autocomplete="address-level2"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="row align-items-center mt-3">
        <div className="col-2  d-flex justify-content-end">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt=""
          />
        </div>
        <div className="col-3">
          <span className="display-1 m-0 temperature">24 </span>
          <sup className="h2 unit">ºC</sup>
        </div>
        <div className="col-3">
          <ul className="list-unstyled m-0">
            <li>Precipitation: 0%</li>
            <li>Humidity: 14%</li>
            <li>Wind: 10 km/h</li>
          </ul>
        </div>
        <div className="col-4">
          <h1 className="m-0">San Francisco</h1>
          <ul className="list-unstyled m-0">
            <li>Thu Mar 27 1:38PM</li>
            <li>Mostly Cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
