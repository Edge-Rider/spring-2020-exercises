import React from "react";
import ReactDOM from "react-dom";
import DayForecast from "./DayForecast/index.jsx";
import { forecast } from "./forecast.js";
import "./index.html";
import "./style.css";

class WeeklyForecast extends React.Component {
  state = {
    days: [],
  };

  componentDidMount() {
    fetch("http://bootcamp.podlomar.org/api/weather")
      .then((resp) => resp.json())
      .then((json) => this.setState({ days: json }));
  }

  render() {
    if (this.state.days.length === 0) {
      return <h1>Loading...</h1>;
    }

    return (
      <>
        <h1>Weekly Weather Forecast</h1>
        <div className="week-forecast">
          {this.state.days.map((day) => (
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
