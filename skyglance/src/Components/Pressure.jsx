import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "../Style/Pressure.css";

const Pressure = ({ pressure }) => {
  const minPressure = 970;
  const maxPressure = 1040;

  const normalized = Math.min(
    Math.max((pressure - minPressure) / (maxPressure - minPressure), 0),
    1
  );

  const rotation = 150 + normalized * 360;

  const pressureLabels = [970, 980, 990, 1000, 1010, 1020, 1030, 1040];

  let icon = "PARTLY_CLOUDY_DAY";
  if (pressure > 1020) icon = "CLEAR_DAY";
  else if (pressure < 990) icon = "RAIN";

  return (
    <div className="dial-container">
      <div className="title">🕰️ Barometer</div>
      <div className="pressure-gauge-full">
        <div
          className="needle"
          style={{ transform: `rotate(${rotation}deg)` }}
        />

        {pressureLabels.map((value, index) => {
          const angle = 90 + (index / pressureLabels.length) * 360;
          const radius = 60;
          const center = 77;

          const x = center + radius * Math.cos((angle * Math.PI) / 180);
          const y = center + radius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={value}
              className="pressure-label"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {value}
            </div>
          );
        })}

        <div className="center-dot" />
        <div className="pressure-icon-center">
          <ReactAnimatedWeather icon={icon} color="#2f3e4d" size={60} animate />
        </div>
      </div>
    </div>
  );
};

export default Pressure;
