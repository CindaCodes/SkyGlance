import React, { useState } from "react";
import FormattedDate from "./Date";
import WeatherIcon from "./Icon";
import WeatherTemperature from "./Units";

export default function WeatherInfo(props) {
  const [unit, setUnit] = useState("metric");

  function toggleUnit(newUnit) {
    setUnit(newUnit);
  }

  function convertTemperature(celsius) {
    return unit === "metric"
      ? Math.round(celsius)
      : Math.round((celsius * 9) / 5 + 32);
  }

  function convertWind(kmh) {
    return unit === "metric" ? Math.round(kmh) : Math.round(kmh / 1.609);
  }

  return (
    <div className="row align-items-center mt-3 justify-content-center text-center text-md-start text-nowrap">
      <div className="col-4">
        <h1 className="m-0">{props.data.city}</h1>
        <ul className="list-unstyled m-0">
          <li>
            <FormattedDate
              date={props.data.date}
              alt={props.data.description}
            />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>

      <div className="col-12 col-md-3 d-flex flex-row align-items-center justify-content-center justify-content-md-end text-center mt-3 mt-md-0 gap-3">
        <WeatherIcon code={props.data.icon} />
        <WeatherTemperature
          metric={props.data.temperature}
          unit={unit}
          onUnitChange={toggleUnit}
        />
      </div>

      <div className="col-12 col-md-3 mt-3 mt-md-0">
        <ul className="list-unstyled m-0">
          <li>
            Feels Like: {convertTemperature(props.data.feelsLike)}º
            {unit === "metric" ? "C" : "F"}
          </li>
          <li>Humidity: {props.data.humidity} %</li>
          <li>
            Wind: {convertWind(props.data.wind)}{" "}
            {unit === "metric" ? "km/h" : "mph"}
          </li>
        </ul>
      </div>
    </div>
  );
}
