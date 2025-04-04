import React, { useState } from "react";
import FormattedDate from "./Date";
import WeatherIcon from "./Icon";
import WeatherTemperature from "./Units";
import Humidity from "./Humidity";
import WindCompass from "./Wind";
import Pressure from "./Pressure";
import "../Style/Info.css";

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
    <div className="grid-container">
      <div className="box text-center" style={{ gridArea: "box-1" }}>
        <h1 className="m-0">{props.data.city}</h1>
        <FormattedDate date={props.data.date} alt={props.data.description} />
        <WeatherTemperature
          metric={props.data.temperature}
          unit={unit}
          onUnitChange={toggleUnit}
        />
      </div>
      <div
        className="box align-items-center
        justify-content-center  text-center"
        style={{ gridArea: "box-2" }}
      >
        <WeatherIcon code={props.data.icon} size={120} style={{ opacity: 0, pointerEvents: "none" }}/>
        <div className="text-capitalize">{props.data.description}</div>
      </div>

      <div className="box" style={{ gridArea: "box-3" }}>
        <h5 className="text-center mb-2">Weather Details</h5>
        <ul className="list-unstyled m-0 mx-auto">
          <li>
            Feels Like: {convertTemperature(props.data.feelsLike)}º
            {unit === "metric" ? "C" : "F"}
          </li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>
            Wind: {convertWind(props.data.wind)}{" "}
            {unit === "metric" ? "km/h" : "mph"}
          </li>
          <li>Pressure: {props.data.pressure} hPa</li>
        </ul>
      </div>

      <div className="box" style={{ gridArea: "box-4" }}>
        <Pressure pressure={props.data.pressure} />
      </div>
      <div className="box" style={{ gridArea: "box-5" }}>
        <Humidity humidity={props.data.humidity} />
      </div>
      <div className="box" style={{ gridArea: "box-6" }}>
        <WindCompass windDeg={props.data.windDeg} />
      </div>
    </div>
  );
}
