import React, { useContext, useEffect, useState } from "react";
import SearchCity from "./SearchCity";
import WeatherInfo from "./WeatherInfo";
import WeatherCards from "./WeatherCards";
import { BackgroundContext } from "../context/BackgroundContext";
import weatherBackgrounds from "../weatherBackgrounds";

const Weather = () => {
  const { main,setMain } = useContext(BackgroundContext);
  const [weatherData, setWeatherData] = useState({
    main: {
      temp: "temp",
      feels_like: "",
      humidity: "",
    },
    weather: [
      {
        description: "desc",
      },
    ],
    visibility: "",
    wind: {
      speed: "",
    },
  });
  const [weatherLoading, setWeatherLoading] = useState(false);
  const [coords, setCoords] = useState({
    lat: "",
    lon: "",
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const latitude = pos.coords.latitude;
      const longitude = pos.coords.longitude;
      try {
        setWeatherLoading(true);
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=7f5bb955b2a80ff4510cd5a7368de99a&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok) {
          throw new Error();
        }
        setMain(data.weather[0].main);
        setWeatherData(data);
      } catch (e) {
      } finally {
        setWeatherLoading(false);
      }
      setCoords({
        lat: latitude,
        lon: longitude,
      });
    });
  }, []);

  const fetchWeather = async (cityName) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7f5bb955b2a80ff4510cd5a7368de99a&units=metric`;
    try {
      setWeatherLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        throw new Error("something went wrong");
      }
      setMain(data.weather[0].main);
      setWeatherData(data);
      setError(false);
    } catch (e) {
      setError(true);
    } finally {
      setWeatherLoading(false);
    }
  };

  const getCurrentLocationWeather = async () => {
    try {
      console.log("fetching");
      setWeatherLoading(true);
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=7f5bb955b2a80ff4510cd5a7368de99a&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      if (!response.ok) {
        throw new Error();
      }
      setMain(data.weather[0].main);
      setWeatherData(data);
      setError(false);
    } catch (e) {
    } finally {
      console.log("fetched");
      setWeatherLoading(false);
    }
  };

  return (
    <div className="w-[90vw] lg:w-3/4 flex flex-col gap-3 p-4 text-center rounded-lg bg-white/30 backdrop-blur-md">
      <SearchCity
        fetchWeather={fetchWeather}
        getCurrentLocationWeather={getCurrentLocationWeather}
      />

      <WeatherInfo
        loadingWeather={weatherLoading}
        isError={error}
        temp={weatherData.main.temp}
        desc={weatherData.weather[0].description}
        text={weatherBackgrounds[main]?.text}
      />
      {!error && <WeatherCards weatherData={weatherData} />}
    </div>
  );
};

export default Weather;
