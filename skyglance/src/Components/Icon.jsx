import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import PropTypes from "prop-types"; 

function getWeatherIcon(code) {
  const iconMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-day": "CLOUDY",
    "scattered-clouds-night": "CLOUDY",
    "broken-clouds-day": "CLOUDY",
    "broken-clouds-night": "CLOUDY",
    "shower-rain-day": "RAIN",
    "shower-rain-night": "RAIN",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "thunderstorm-day": "Rain",
    "thunderstorm-night": "Rain",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": "FOG",
    "mist-night": "FOG",
  };

  return iconMapping[code] || "CLOUDY";
}

export default function WeatherIcon(props) {
  return (
    <ReactAnimatedWeather
      icon={getWeatherIcon(props.code)}
      color="#2f3e4d"
      size={props.size}
      animate={true}
    />
  );
}


WeatherIcon.propTypes = {
  code: PropTypes.string.isRequired, 
  size: PropTypes.number.isRequired, 
};
