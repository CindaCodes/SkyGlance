import React from "react";
import "../Style/Wind.css";

export default function WindCompass({ windDeg }) {
  return (
    <div className="dial-container">
      <div className="title">💨 Wind</div>
      <div className="compass-container">
        <div className="compass">
          <div
            className="needle"
            style={{ transform: `rotate(${windDeg}deg)` }}
          ></div>
          <div className="center-dot"></div>
          <div className="dir n">N</div>
          <div className="dir e">E</div>
          <div className="dir s">S</div>
          <div className="dir w">W</div>
        </div>
      </div>
    </div>
  );
}
