import React, { useEffect, useState } from "react";
import WeatherIcon from "./Icon";

export default function ForecastDay({ forecast, unit }) {
  const [iconSize, setIconSize] = useState(45);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIconSize(35);
      } else {
        setIconSize(45);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!forecast || !forecast.condition) {
    return null;
  }

  const date = new Date(forecast.time * 1000);
  const day = date.toLocaleDateString("en-US", { weekday: "short" });

  function convertTemp(tempC) {
    return unit === "imperial"
      ? Math.round((tempC * 9) / 5 + 32)
      : Math.round(tempC);
  }

  return (
    <div className="ForecastDay text-center">
      <h6>{day}</h6>
      <WeatherIcon code={forecast.condition.icon} size={iconSize} />
      <div className="temperature">
        <span className="max">
          {convertTemp(forecast.temperature.maximum)}°
        </span>
        <span className="min" style={{ marginLeft: "10px" }}>
          {convertTemp(forecast.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
