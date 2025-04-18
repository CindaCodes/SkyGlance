import React from "react";
import "../Style/Wind.css";
import ReactAnimatedWeather from "react-animated-weather";
import PropTypes from "prop-types";

export default function WindCompass({ windDeg }) {
  return (
    <div className="dial-container">
      <div className="title">Wind</div>
      <div className="compass-container">
        <div className="compass">
          <div
            className="needle"
            style={{ transform: `rotate(${windDeg}deg)` }}
          ></div>
          <div className="center-dot"></div>
          <div className="icon-center">
            <ReactAnimatedWeather
              icon="WIND"
              color="#2f3e4d"
              size={60}
              animate
            />
          </div>
          <div className="dir n">N</div>
          <div className="dir e">E</div>
          <div className="dir s">S</div>
          <div className="dir w">W</div>
        </div>
      </div>
    </div>
  );
}


WindCompass.propTypes = {
  windDeg: PropTypes.number.isRequired,
};
