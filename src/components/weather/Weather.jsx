import React, { useState } from "react";
import cloudIcon from "../../assets/weather_icons/cloud.svg";
import clearIcon from "../../assets/weather_icons/clear.svg";
import hazeIcon from "../../assets/weather_icons/haze.svg";
import rainIcon from "../../assets/weather_icons/rain.svg";
import snowIcon from "../../assets/weather_icons/snow.svg";
import stormIcon from "../../assets/weather_icons/storm.svg";
import Spinner from "../../Loader/Spinner";
import { useWeatherContext } from "../../context/WeatherDataProvider";

const Weather = () => {
  const { fetchData, data, setLocation, location, loading, setLoading } =
    useWeatherContext();

  const wDataAvailable = Object.keys(data).length !== 0;

  const [weatherImage, setWeatherImage] = useState(cloudIcon);

  const getWeatherIcon = (id) => {
    if (id === 800) return clearIcon;
    if (id >= 200 && id <= 232) return stormIcon;
    if (id >= 600 && id <= 622) return snowIcon;
    if (id >= 701 && id <= 781) return hazeIcon;
    if (id >= 801 && id <= 804) return cloudIcon;
    if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) return rainIcon;
    return cloudIcon;
  };

  const handleWeatherUpdate = () => {
    setLoading(true);

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ lat: latitude, lon: longitude });
      fetchData(latitude, longitude);
    });

    if (location.lat && location.lon) {
      fetchData(location.lat, location.lon);
    }
    setWeatherImage(getWeatherIcon(wDataAvailable && data.weather[0].id));
  };

  return (
    <>
      <div className="weather">
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

        <div className="weather_data">
          <div className="top_data">
            <img src={wDataAvailable ? weatherImage : cloudIcon} alt="" />
            <div className="temp_main">
              {wDataAvailable ? data.main.temp.toFixed(1) : "13"}°C
            </div>
            <div className="weather_main">
              {wDataAvailable ? data.weather[0].main : "Broken Clouds"}
            </div>
            <div className="location">
              <i className="bx bx-map"></i>
              <span>{wDataAvailable ? data.name : "kolkata"}</span>
            </div>
          </div>
          <div className="bottom_data">
            <div className="column feels">
              <i className="bx bxs-thermometer"></i>
              <div className="details">
                <span>
                  {wDataAvailable ? data.main.feels_like.toFixed(1) : "17"}°C
                </span>
                <p>feels like</p>
              </div>
            </div>
            <div className="column humidity">
              <i className="bx bxs-droplet-half"></i>
              <div className="details">
                <span>{wDataAvailable ? data.main.humidity : "80"}%</span>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
