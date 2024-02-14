import React from "react";

const WeatherInfo = ({ temp, desc, loadingWeather , isError,text}) => {
  return (
    <>
      {loadingWeather && <p>fetching the weather</p>}
      {!loadingWeather && isError && <p className="font-semibold text-red-500">Please enter a valid location</p>}
      {!loadingWeather && !isError && (
        <div className="h-[30%] flex flex-col gap-5 p-2 mt-4">
          <h1 className="text-3xl font-bold">{temp}&#8451;</h1>
          <h2 className="font-semibold text-2xl">{desc} </h2>
          <p>{text}</p>
        </div>
      )}
    </>
  );
};

export default WeatherInfo;
