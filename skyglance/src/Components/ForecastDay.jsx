import React, { useEffect, useState } from "react";
import WeatherIcon from "./Icon";

export default function ForecastDay(props) {
  const forecast = props.forecast;
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

  return (
    <div className="ForecastDay text-center">
      <h6>{day}</h6>
      <WeatherIcon code={forecast.condition.icon} size={iconSize} />
      <div className="temperature">
        <span className="max">{Math.round(forecast.temperature.maximum)}°</span>
        <span className="min" style={{ marginLeft: "10px" }}>
          {Math.round(forecast.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
