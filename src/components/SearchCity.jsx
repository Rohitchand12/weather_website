import React,{useRef} from "react";
import { FaSearchLocation } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const SearchCity = ({getCurrentLocationWeather, fetchWeather}) => {
  const cityName = useRef();
  return (
    <div>
      <div className="grid grid-cols-8 gap-2">
        <input
          ref={cityName}
          type="text"
          placeholder="City name"
          className="p-2 border-2  rounded-xl col-span-6"
        />
        <button
          onClick={() => fetchWeather(cityName.current.value)}
          className="py-1 px-2 bg-gray-300 hover:bg-gray-400 text-black rounded-lg flex justify-center items-center"
        >
          <FaSearchLocation/>
        </button>
        <button
          onClick={getCurrentLocationWeather}
          className="py-1 px-2 bg-gray-300 hover:bg-gray-400 text-black rounded-lg flex justify-center items-center"
        >
          <FaLocationDot/>
        </button>
      </div>
    </div>
  );
};

export default SearchCity;
