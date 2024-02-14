import React, { useContext, useEffect, useState } from "react";
import Weather from "./components/Weather";
import { BackgroundContext } from "./context/BackgroundContext";
import weatherBackgrounds from "./weatherBackgrounds";

  
const App = () => {
  const [bgimg, setBgimg] = useState(`url(${weatherBackgrounds.load.pic})`)
  const { main } = useContext(BackgroundContext);
  useEffect(()=>{
    setBgimg(`url(${weatherBackgrounds[main]?.pic})`)
  },[main])

  return (
    <div style = {{backgroundImage : bgimg}} className={`bg-center bg-cover bg-no-repeat`}>
      <div className="h-[100vh] w-[full] lg:w-[60vw] mx-auto flex justify-center items-center">
        <Weather />
      </div>
    </div>
  );
};

export default App;
