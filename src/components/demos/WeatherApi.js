import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import moment from "moment";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import "components/styles/blog.css";
import "components/styles/weatherstyles.css";
require("dotenv").config();

const refresh = () => {
  window.location.reload();
};
export const WeatherApi = () => {
  const [lat, setLat] = useState([]);

  const [long, setLong] = useState([]);

  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const weatherFetch = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      // setLat(40.45454);
      // setLong(-105.08668);
      console.log(`lat`, lat);
      console.log(`long`, long);
      try {
        await fetch(
          `${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${long}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`
        )
          .then(function (response) {
            if (!response.ok) {
              throw new Error("status " + response.status);
            }
            return response.json();
          })
          .then(function (result) {
            setWeatherData(result);
            console.log(result);
          });
      } catch (Error) {
        console.log(Error.name + " : " + Error.message);
      }
    };
    weatherFetch();
  }, [lat, long]);

  return (
    <Container
      fluid
      overflow="hidden"
      display="grid"
      justify-content="center"
      justify-items="center"
    >
      <h2 className="top">OpenWeather API</h2>
      <div className="card mb-3" style={{ maxWidth: "100%" }}>
        <div className="row g-0">
          <div className="col-md-4">
            {typeof weatherData.current !== "undefined" ? (
              <>
                <div className="main">
                  <div className="card-body">
                    <div className="top header flex">
                      {weatherData.timezone}
                      <Button
                        className="button header m-0 p-0"
                        onClick={refresh}
                      >
                        <img
                          src="arrow-clockwise.svg"
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
                      <p className="day">
                        Temp: {weatherData.current.temp} &deg;F
                      </p>
                      <p className="temp">
                        Pressure:{" "}
                        {(weatherData.current.pressure * 0.0295301).toFixed(2)}
                        &nbsp;inHg
                      </p>
                      <p className="temp">
                        Humidity: {weatherData.current.humidity}%
                      </p>
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
                        {new Date(
                          weatherData.current.sunrise * 1000
                        ).toLocaleTimeString("en-US")}
                      </p>
                      <p className="sunrise-sunset">
                        Sunset:{" "}
                        {new Date(
                          weatherData.current.sunset * 1000
                        ).toLocaleTimeString("en-US")}
                      </p>
                    </div>
                    <p className="description">
                      Current Conditions:{" "}
                      {weatherData.current.weather[0].description}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div></div>
            )}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text">
                This is a responsive ReactJS app. On devices wider than 768
                pixels a Bootstrap horizontal card component is used to display
                this page. On smaller devices, the page appears in a vertical
                card component.
              </p>
              <p className="card-text">
                Weather information is obtained by querying the OpenWeather API.
                The geolocation used for the query is obtained from your
                browser. You might get surprising results depending on where
                your browser thinks you are! This could happen if location
                services are turned off on the device, or if you are using a
                VPN. A nice addition to this app would be to prompt the user for
                their location, or even allow users to track several locations.
              </p>
              <p className="card-text">
                The heavy lifting happens in a useEffect hook that
                listens for changes to latitude or longitude. When the effect is
                triggered it calls an asynchronous fetch() to the OpenWeather
                API and populates the display with the results. A refresh button
                in the upper-right corner initiates a new fetch() any time.
              </p>
              <p className="card-text">
                I've noticed that the first request to the OpenWeather API
                frequently returns a 400 (bad request) error, so be sure to
                check for a successful network response in your code before you try to populate the
                card component with data. Actually, this is good advice any time
                you are working with an API.
              </p>
              <p></p>
              <Image
                fluid={true}
                rounded={true}
                src="weatheruseeffect.png"
                title="Weather useEffect"
                alt="Weather useEffect code"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
