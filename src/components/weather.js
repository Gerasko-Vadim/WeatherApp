import React, { useState, useEffect } from "react";
import "./weather.css";
import sun from "../img/icons8-sun-96.png";
import obl from "../img/icons8-облака-96.png";
import chast_obl from "../img/icons8-частичная-облачность-96.png";
import lightning from "../img/icons8-молния-из-облаков-96.png";
import snow from "../img/icons8-небольшой-снег-96.png";
import rain from "../img/icons8-сильный-дождь-96.png";
import kapli from "../img/drops.png";
import termo from "../img/thermometer.png";
import win from "../img/wind.png";

const Weather = (props) => {
  const [weather, setWeather] = useState(sun);
  console.log(props);
  // Аналогично componentDidMount и componentDidUpdate:
  let classNames = props.btn ? "visability" : "vasabilyty-none";
  useEffect(() => {
    switch (props.data.icon) {
      case "Clear":
        setWeather(sun);
        break;
      case "Rain":
        setWeather(rain);
        break;

      case "Clouds":
        setWeather(obl);
        break;

      case "Snow":
        setWeather(snow);
        break;

      case "Mist":
        setWeather(chast_obl);
        break;

      case "Thunderstorm":
        setWeather(lightning);
        break;

      case "Dust":
        setWeather(chast_obl);
        break;
      default:
        setWeather(sun);
        break;
    }
  }, [weather]);

  function dateBuilder(d) {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    // let year = d.getFullYear();

    return `${day} ${date} ${month},`;
    // ${year}
  }
  let now = new Date();
  const time = `${now
    .getHours()
    .toString()
    .padStart(2, "0")} : ${now
    .getMinutes()
    .toString()
    .padStart(2, "0")} (Local)`;
  const temp = props.data.temp;
  const temp1 = String(temp).slice(0, 2);
  const feels = props.data.feels_like;
  const feels1 = String(feels).slice(0, 2);

  return (
    <div className={"content " + classNames}>
      <div className="city">
        <span className="city1">{props.data.city}</span>
        <div className="time">
          <span>{dateBuilder(now)}</span>
          <span>{time}</span>
        </div>
      </div>
      <hr />
      <div className="temp">
        <img alt="" src={weather} />
        <span className="temp1">{temp1} &#8451;</span>
      </div>
      <hr />
      <div className="text">
        <span>Feels like</span>
        <span>Winds</span>
        <span>Humidity</span>
      </div>
      <div className="data">
        <div className="grad">
          <img alt="" className="img" src={termo} />
          <span>{feels1} &#8451;</span>
        </div>
        <div className="winds">
          <img alt="" className="img" src={win} />
          <span>{props.data.speed} m/s</span>
        </div>
        <div className="humidety">
          <img alt="" className="img" src={kapli} />
          <span>{props.data.humidity} %</span>
        </div>
      </div>
      <hr />
      <div className="suntime">
        <div className="block-sun">
          <span>Sunrise</span>
          <span>
            {new Date(props.data.sunrise * 1000).toLocaleTimeString("ru-Ru")}
          </span>
        </div>
        <div className="block-sun">
          <span>Sunset</span>
          <span>
            {new Date(props.data.sunset * 1000).toLocaleTimeString("ru-Ru")}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Weather;
