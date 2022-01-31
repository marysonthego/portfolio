import React from "react";
import Button from "react-bootstrap/Button";
import moment from "moment";
//import "bootstrap5/dist/css/bootstrap.min.css";
import "components/styles/weatherstyles.css";

const refresh = () => {
  window.location.reload();
};
export const WeatherCard = ({ weatherData }) => {
  return (
    <>
      <hr />
      <div className="main">
        <div className="card-body">
          <div className="top header flex">
            {weatherData.timezone}
            <Button className="button header m-0 p-0" onClick={refresh}>
              <img
                src="media/arrow-clockwise.svg"
                alt="Refresh"
                width="32"
                height="32"
              />
            </Button>
          </div>
          <div className="flex">
            <p className="day">
              {moment().format("dddd")}, {moment().format("LL")}
            </p>
          </div>
          <div className="flex">
            <p className="day">Temp: {weatherData.current.temp} &deg;F</p>
            <p className="temp">
              Pressure: {(weatherData.current.pressure * 0.0295301).toFixed(2)}
              &nbsp;inHg
            </p>
            <p className="temp">Humidity: {weatherData.current.humidity}%</p>
          </div>
          <div className="flex">
            <p className="temp">
              Wind: {weatherData.current.wind_speed}&nbsp;mph
            </p>
            <p className="temp">
              Gusts: {weatherData.current.wind_gust}&nbsp;mph
            </p>
          </div>
          <div className="flex">
            <p className="sunrise-sunset">
              Sunrise:{" "}
              {new Date(weatherData.current.sunrise * 1000).toLocaleTimeString(
                "en-US"
              )}
            </p>
            <p className="sunrise-sunset">
              Sunset:{" "}
              {new Date(weatherData.current.sunset * 1000).toLocaleTimeString(
                "en-US"
              )}
            </p>
          </div>
          <p className="description">
            Current Conditions: {weatherData.current.weather[0].description}
          </p>
        </div>
      </div>
    </>
  );
};
