import React from "react";
import ReactDOM from "react-dom";
import DayForecast from "./DayForecast/index.jsx";
import { forecast } from "./forecast.js";
import "./index.html";
import "./style.css";

class WeeklyForecast extends React.Component {
  render() {
    return (
      <>
        <h1>Weekly Weather Forecast</h1>
        <div className="week-forecast">
          {forecast.map((day) => (
            <DayForecast
              weekday={day.weekday}
              weather={day.weather}
              tempDay={day.tempDay}
              tempNight={day.tempNight}
            />
          ))}
        </div>
      </>
    );
  }
}

ReactDOM.render(<WeeklyForecast />, document.getElementById("app"));
