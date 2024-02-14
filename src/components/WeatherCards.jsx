import React from 'react'
import InfoCards from "./InfoCards";
import { FaTemperatureHigh } from "react-icons/fa";
import { IoWaterSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { GiWindSlap } from "react-icons/gi";
const WeatherCards = ({weatherData , error}) => { 
  return (
    <div className="h-full grid place-items-center grid-cols-2 grid-rows-2 gap-8 mt-10 p-3">
        <InfoCards
          heading="Feels like"
          data={weatherData.main.feels_like}
          unit="&#8451;"
          icon={<FaTemperatureHigh className="mr-2 inline" />}
        />
        <InfoCards
          heading="Humidity"
          data={weatherData.main.humidity}
          unit="%"
          icon={<IoWaterSharp className="mr-2 inline" />}
        />
        <InfoCards
          heading="Visibility"
          data={weatherData.visibility}
          unit=""
          icon={<FaEye className="mr-2 inline" />}
        />
        <InfoCards
          heading="Wind speed"
          data={weatherData.wind.speed}
          unit="mph"
          icon={<GiWindSlap className="mr-2 inline" />}
        />
      </div>
  )
}

export default WeatherCards