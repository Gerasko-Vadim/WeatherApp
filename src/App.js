import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Form from "./components/form.js";
import Weather from "./components/weather";
import Text from "./components/text.js";

const App = () => {
  const API_KEY = "07d763ecea573a9ac7585df0c586e84c";
  const units = "metric";
  const [data, setData] = useState({
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    icon: undefined,
    feels_like: undefined,
    speed: undefined,
    humidity: undefined,
  });
  const [btn, setBtn] = useState(false);



  const getWeather = (e) => {
    e.preventDefault();
    if (e.target.elements.city.value === "") {
      alert("Enter the name of the city !! Do not do like this :)");
    } else {
      setBtn(true);
      const city = e.target.elements.city.value;
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
        )
        .then((res) => {
          const weather = res.data;
          console.log(weather);
          setData({
            temp: weather.main.temp,
            city: weather.name,
            country: weather.sys.country,
            sunrise: weather.sys.sunrise,
            sunset: weather.sys.sunset,
            icon: weather.weather[0].icon,
            feels_like: weather.main.feels_like,
            speed: weather.wind.speed,
            humidity: weather.main.humidity,
          });
        })
        .catch((err) => {
          // what now?
          alert("Sorry, there is no such city  " + err);
        });
    }
  };

  return (
    <div className="container">
      <Text />
      <Form gettingWeather={getWeather} />
      <Weather data={data} btn={btn} />
    </div>
  );
};
export default App;
