import SearchWeather from "./searchWeather";
import { useState } from "react";
import Weather from "./weather";
import "../src/index.css";
import axios from "axios";

const App = () => {
  const apiKey = "";
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  const getData = async (e) => {
    e.preventDefault();
    console.log(city);
    try {
      const weatherData = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&appid=" +
          apiKey +
          "&units=metric"
      );
      setWeather(weatherData.data);
      console.log(weather.name);
      console.log(weather.weather[0].main);
      console.log(weather.main.temp);
    } catch (err) {
      console.log("Error is : ", err);
    }
  };
  return (
    <div>
      {city && weather ? (
        <div>
          <SearchWeather updatecity={setCity} getweather={getData} />
          <Weather weather={weather} city={city} />
        </div>
      ) : (
        <SearchWeather updatecity={setCity} getweather={getData} />
      )}
    </div>
  );
};

export default App;
