import React from "react";
import PropTypes from "prop-types";
import "../Style/Units.css";

export default function UnitButton({ unit, onUnitChange }) {
  const toggleUnit = () => {
    onUnitChange(unit === "metric" ? "imperial" : "metric");
  };

  return (
    <div>
      <sup className="unit">
        <button onClick={toggleUnit} className="unit-toggle-button">
          {unit === "metric" ? "Switch to Imperial" : "Switch to Metric"}
        </button>
      </sup>
    </div>
  );
}

UnitButton.propTypes = {
  unit: PropTypes.oneOf(["metric", "imperial"]).isRequired,
  onUnitChange: PropTypes.func.isRequired,
};
