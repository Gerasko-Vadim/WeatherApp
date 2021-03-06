import React, {useEffect, useState} from "react";
import "./weather.css";

import kapli from "../img/drops.png";
import termo from "../img/thermometer.png";
import win from "../img/wind.png";

const Weather = (props) => {
const [clas,setClas]=useState("vasabilyty-none");
    useEffect(()=>{
        if(props.data.temp=== undefined){
            console.log("Erorr")
            setClas("vasabilyty-none");
        }
        else{
            setClas("vasabilyty");        }
    },[props.data.temp]);
  console.log(props);
  // Аналогично componentDidMount и componentDidUpdate:


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
  const temp1 = Math.floor(temp)
  const feels = props.data.feels_like;
  const feels1 = String(feels).slice(0, 2);

  return (
    <div className={"content " + clas}>
      <div className="city">
        <span className="city1">{props.data.city}</span>
        <div className="time">
          <span>{dateBuilder(now)}</span>
          <span>{time}</span>
        </div>
      </div>
      <hr />
      <div className="temp">
        <img alt="" src={'http://openweathermap.org/img/wn/' + props.data.icon + '@2x.png'} />
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
