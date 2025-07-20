import React, { useState } from "react";
import axios from "axios";
import './Weather.css';

function Weather() {
  const [city, setCity] = useState(""); // City name
  const [weather, setWeather] = useState({ data: null, loading: false, error: null });
  const [apiKey] = useState("a55fb9452417434bd14dd5e14ef733b7");

  const fetchWeather = async () => {
    if (!city) {
      alert("Please enter the city name");
      return;
    }

    setWeather({ ...weather, loading: true, error: null });

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather({ data: response.data, loading: false, error: null });
    } catch (error) {
      console.error("Failed to fetch weather data:", error);
      setWeather({ ...weather, loading: false, error: "Unable to retrieve weather data. Please try again later." });
    }
  };

  return (
    <div className="weather-container">
      <h2>Weather Search</h2>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Please enter the city name"
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {weather.loading && <p>Loading...</p>}
      {weather.error && <p className="error-message">{weather.error}</p>}

      {weather.data && !weather.loading && !weather.error && (
        <div className="weather-info">
          <h3>{weather.data.name}</h3>
          <p>Temperature: {weather.data.main.temp}°C</p>
          <p>Description: {weather.data.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
