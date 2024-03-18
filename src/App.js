import React, { useState } from "react";
import "./App.css";

const API_KEY = "095b535edd228b71bc1370eb962ff1b6";

export default function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

const fetchWeatherData = async () => {
  try{
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
);
const data = await response.json();
setWeatherData(data);
} catch (error){
console.error("Error fetching weather data:", error);
}
};

const handleChange = (event) => {
  setCity(event.target.value);
};

const handleSubmit = (event) => {
  event.preventDefault();
fetchWeatherData();
};

return (
  <div className="App">
<h1>Weather App</h1>
<form onSubmit={handleSubmit}>
  <input
    type='text'
    placeholder='Enter City'
    value={city}
    onChange={handleChange}
    />
  <button type='submit'>Get Weather</button>
</form>
{weatherData && (
  <div>
    <h2>Weather in {weatherData.name}</h2>
    <p>Temperature: {weatherData.main.temp}°C</p>
    <p>Description: {weatherData.weather[0].description}</p>
  </div>
)}
</div>
);
}