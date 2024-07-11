import React, { createContext, useContext, useState, useCallback } from "react";
import { WEATHER_API_URL, WEATHER_API_KEY } from "../Api";

const WeatherContext = createContext();

const WeatherDataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async (lat, lon) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${WEATHER_API_URL}/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${WEATHER_API_KEY}`
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <WeatherContext.Provider
      value={{ fetchData, data, setLocation, location, loading, setLoading }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
export default WeatherDataProvider;
export function useWeatherContext() {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error("context must use within a provider");
  }
  return context;
}
