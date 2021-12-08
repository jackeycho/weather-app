import React, { useState } from "react";

import { fetchWeather } from "./api/fetchWeather";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);

      console.log(data);
      setWeather(data);
      setQuery("");
    }
  };

  return (
    <div className="main-container">
      <div className="desc">
        <p className="sup">
          React<br></br> Weather<br></br> Website
        </p>
      </div>
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />

      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {(Math.round(weather.main.temp) * 9) / 5 + 32}
            <sup>&deg;F</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />{" "}
            <br />
            <p>
              {(Math.round(weather.main.temp_max) * 9) / 5 + 32}
              &deg;F/{(Math.round(weather.main.temp_min) * 9) / 5 + 32}
              &deg;F
            </p>
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
