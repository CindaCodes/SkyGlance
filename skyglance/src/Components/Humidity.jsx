import React from "react";
import "../Style/Humidity.css";

export default function Humidity({ humidity }) {
  const getLabel = (value) => {
    if (value < 25) return "Very Dry 🏜️";
    if (value < 50) return "Dry 🌵";
    if (value < 75) return "Comfortable 😊";
    if (value < 80) return "Sticky 😓";
    return "Humid 💦";
  };

  const getAdvice = (humidity) => {
    if (humidity < 30) return "Air is dry — use a humidifier.";
    if (humidity < 60) return "Just right — enjoy the day!";
    if (humidity < 80) return "Slightly humid — stay hydrated.";
    return "Very humid — take it easy and drink water.";
  };

  const percent = Math.min(humidity, 100); 
  const leftPosition = `${percent}%`;

  return (
    <div className="humidity-container">
      <div className="title">Humidity</div>
      <div className="value">{humidity}%</div>
      <div className="label">{getLabel(humidity)}</div>

      <div className="humidity-bar">
        <div className="indicator" style={{ left: leftPosition }}></div>
      </div>
      <div className="advice">{getAdvice(humidity)}</div>
    </div>
  );
}
