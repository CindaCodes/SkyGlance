import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Style/WeeklyForecast.css";
import ForecastDay from "./ForecastDay";

export default function WeeklyForecast({ city, unit }) {
  const [forecast, setForecast] = useState(null);
  const [daysToShow, setDaysToShow] = useState(5);

  // Responsive layout: set number of days to show based on screen width
  useEffect(() => {
    const updateDaysToShow = () => {
      const width = window.innerWidth;
      if (width >= 770) {
        setDaysToShow(6);
      } else if (width >= 600) {
        setDaysToShow(5);
      } else {
        setDaysToShow(4);
      }
    };

    updateDaysToShow();
    window.addEventListener("resize", updateDaysToShow);
    return () => window.removeEventListener("resize", updateDaysToShow);
  }, []);

  // Fetch forecast data
  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then((response) => {
      setForecast(response.data.daily);
    });
  }, [city]);

  if (!forecast) {
    return null;
  }

  return (
    <div className="WeeklyForecast">
      <h6 className="title">Forecast</h6>
      <div className="row justify-content-between">
        {forecast.slice(0, daysToShow).map((dailyForecast, index) => (
          <div className="col" key={index}>
            <ForecastDay forecast={dailyForecast} unit={unit} />
          </div>
        ))}
      </div>
    </div>
  );
}
