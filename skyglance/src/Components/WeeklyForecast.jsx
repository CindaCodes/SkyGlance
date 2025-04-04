import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Style/WeeklyForecast.css";
import ForecastDay from "./ForecastDay";

export default function WeeklyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  const [daysToShow, setDaysToShow] = useState(5);

 useEffect(() => {
   const updateDaysToShow = () => {
     const width = window.innerWidth;

     if (width >= 770) {
       setDaysToShow(6); // Desktop
     } else if (width >= 600) {
       setDaysToShow(5); // Tablet (iPad)
     } else {
       setDaysToShow(4); // Mobile
     }
   };

   updateDaysToShow(); 
   window.addEventListener("resize", updateDaysToShow);

   return () => window.removeEventListener("resize", updateDaysToShow);
 }, []);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeeklyForecast">
        <h6 className="title">Forecast</h6>
        <div className="row justify-content-between">
          {forecast.slice(0, daysToShow).map((dailyForecast, index) => (
            <div className="col" key={index}>
              <ForecastDay forecast={dailyForecast} />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    let apiKey = import.meta.env.VITE_API_KEY;
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
