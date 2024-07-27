import React from "react";
import cloudIcon from "../../assets/weather_icons/cloud.svg";
import Spinner from "../loader/LoaderWeather/Spinner";
import { useWeatherContext } from "../../context/WeatherDataContext";

const WeatherMobile = () => {
  const { data, loading, handleWeatherUpdate, weatherImage } =
    useWeatherContext();
  const wDataAvailable = Object.keys(data).length !== 0;

  return (
    <>
      <div className="weather_mobile">
        <div className="weather_data">
          <div className="top_data">
            <span>{wDataAvailable ? data.name : "kolkata"}</span>
            <div className="temp_main">
              {wDataAvailable ? data.main.temp.toFixed(1) : "13"}°C
            </div>
            <img
              src={wDataAvailable ? weatherImage : cloudIcon}
              alt="weather-image"
            />
            <div className="refresh">
              {" "}
              {loading ? (
                <Spinner />
              ) : (
                <a
                  href="#0"
                  onClick={() => {
                    handleWeatherUpdate();
                  }}
                >
                  <i className="bx bx-refresh"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherMobile;
