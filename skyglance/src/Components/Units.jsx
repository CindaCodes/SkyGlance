import React from "react";

export default function WeatherTemperature({ metric, unit, onUnitChange }) {
  function toImperial(event) {
    event.preventDefault();
    onUnitChange("imperial");
  }

  function toMetric(event) {
    event.preventDefault();
    onUnitChange("metric");
  }

  const fahrenheit = Math.round((metric * 9) / 5 + 32);

  if (unit === "metric") {
    return (
      <div>
        <span className="display-1 m-0 temperature">{Math.round(metric)}</span>
        <sup className="unit">
          ºC |{" "}
          <a href="/" onClick={toImperial}>
            ºF
          </a>
        </sup>
      </div>
    );
  } else {
    return (
      <div>
        <span className="display-1 m-0 temperature">{fahrenheit}</span>
        <sup className="unit">
          <a href="/" onClick={toMetric}>
            ºC
          </a>{" "}
          | ºF
        </sup>
      </div>
    );
  }
}
