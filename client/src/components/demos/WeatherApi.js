import React, { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import moment from "moment";
import Image from "react-bootstrap/Image";

const refresh = () => {
  window.location.reload();
};
export const WeatherApi = () => {
  const location = useLocation();

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [show, setShow] = useState(false);
  const toggleModal = () => {
    setShow(!show);
  };
  const handleClose = () => setShow(false);

  useEffect(() => {
    const weatherFetch = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
       setLat(40.45454);
       setLong(-105.08668);
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

  const WeatherModal = (show) => {
    return (
      <Container>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton className="iframe">
            Implementation of the remote OpenWeather API
          </Modal.Header>
          <Row></Row>
          <Modal.Body>
            <Row>
              <Col sm={2}>
                <label>What's This?</label>
              </Col>
              <Col sm={10}>
                <div>
                  <p>
                    A responsive ReactJS app. Weather information is obtained by
                    querying the OpenWeather API. The geolocation for the query
                    is obtained from your browser. You might get surprising
                    results depending on where your browser thinks you are! This
                    could happen if location services are turned off on the
                    device, or if you are using a VPN.
                  </p>
                  <p>
                    A useEffect hook listens for changes to latitude or
                    longitude. When the effect is triggered, it calls an
                    asynchronous fetch() to the OpenWeather API and populates
                    the display with the results. You can use the refresh button
                    in the upper-right corner to initiate a new fetch() request
                    any time you want.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={2}>Uses:</Col>
              <Col sm={10}>
                <ul>
                  <li>React JS</li>
                  <li>React-Router v6</li>
                  <li>React Hooks</li>
                  <li>Asynchronous fetch()</li>
                  <li>Browser geolocation</li>
                  <li>Date and moment()</li>
                  <li>
                    <a href="https://openweathermap.org/api">
                      openweathermap.org/api
                    </a>
                  </li>
                </ul>
              </Col>
              <Row>
                <Col sm={2}>Display:</Col>
                <Col sm={10}>responsive</Col>
              </Row>
              <Row>
                <Col sm={2}>URL:</Col>
                <Col sm={10}>
                  <a href="https://marysonthego.tech/weather">
                    marysonthego.tech/weather
                  </a>
                </Col>
              </Row>
              <Row>
                <Col sm={2}>Code:</Col>
                <Col sm={10}>
                  <a href="https://github.com/marysonthego/portfolio/tree/main/client/src/components/demos">
                    github
                  </a>
                </Col>
              </Row>
            </Row>
          </Modal.Body>
        </Modal>
      </Container>
    );
  };

  const Title = "OpenWeather API";
  const Created = "March, 2022";

  if(location.pathname.toString() === "/projects") {
    return (
      <>
        <div>{Title}</div>
        <div className = 'listDate'>{Created}</div>
      </>
    );
  };

  return (
    <Container
      fluid
      overflow="hidden"
      display="grid"
      justify-content="center"
      justify-items="center"
    >
      {show ? <WeatherModal /> : (
          <div>
            <h2 className="weatherTop">OpenWeather API
            <Button className="button weatherToggle p-0" onClick={toggleModal}>
              Details
            </Button>
            </h2>
          </div>
        )}

      <div className="post mb-3" style={{ maxWidth: "100%" }}>
        <div className="row g-0">
          <div className="col-md-4">
            {typeof weatherData.current !== "undefined" ? (
              <>
                <div className="main mt-5">
                  <div className="weatherTop weatherHeader flex">
                    {weatherData.timezone}
                    <Button
                      className="button weatherButton m-0 p-0"
                      onClick={refresh}
                    >
                      <img
                        src="media/arrow-clockwise.svg"
                        alt="refresh"
                        width="32"
                        height="32"
                      />
                    </Button>
                  </div>
                  <div className="flex">
                    <p className="weatherDay">
                      {moment().format("dddd")}, {moment().format("LL")}
                    </p>
                  </div>
                  <div >
                    <p className="weatherDayTemp text-center">
                      {weatherData.current.temp} &deg;F
                    </p>


                  </div>
                  <div className="flex">
                  <p className="weatherTemp">
                      Humidity: {weatherData.current.humidity}%
                    </p>
                    <p className="weatherTemp">
                      Pressure:{" "}
                      {(weatherData.current.pressure * 0.0295301).toFixed(2)}
                      &nbsp;inHg
                    </p>
                  </div>
                  <div className="flex">
                    <p className="weatherTemp">
                      Wind: {weatherData.current.wind_speed}&nbsp;mph
                    </p>
                    <p className="weatherTemp">
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
                  <p className="weatherDescription">
                    Current Conditions:{" "}
                    {weatherData.current.weather[0].description}
                  </p>
                </div>
              </>
            ) : (
              <div></div>
            )}
          </div>
          <div className="col-md-8 mt-5">
            <Image
              fluid={true}
              rounded={true}
              src="media/weatheruseeffect.png"
              title="Weather useEffect"
              alt="Weather useEffect code"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
