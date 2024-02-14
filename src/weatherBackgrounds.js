import sunny from "./assets/sunny.jpg";
import clouds from "./assets/clouds.webp";
import drizzle from "./assets/drizzle.webp";
import rain from "./assets/rain.jpeg";
import snow from "./assets/snow.jpeg";
import thunderstorm from "./assets/thunderstorm.webp";
import backgroundimg from "./assets/background.jpg";
import haze_mist_fog from "./assets/haze_mist_fog.jpg"
import smoke from "./assets/smoke.jpg"
const weatherBackgrounds = {
  Clear: {
    pic: sunny,
    text:"It sure seems a sunny day, time for some vitamin D."
  },
  Rain: {
    pic: rain,
    text:"Don't forget to carry along your umbrella! "
  },
  Snow: {
    pic: snow,
    text:"Hold your snow, enjoy making a snowman"
  },
  Thunderstorm: {
    pic: thunderstorm,
    text:"woaah! stay inside , its thunder and lightning all over!"
  },
  Drizzle: {
    pic: drizzle,
    text:"sure seems like a drizzle of rain."
  },
  Clouds: {
    pic: clouds,
    text:"A nice cloudy day to avoid using your sunscreen"
  },
  load: {
    pic: backgroundimg,
    text:""
  },
  Haze:{
    pic:haze_mist_fog,
    text:"Hold up , the visibility maybe low , its haze"
  },
  Mist:{
    pic:haze_mist_fog,
    text:"You might get lost in the mist outside"
  },
  Fog:{
    pic:haze_mist_fog,
    text:"a foggy foggy weather indeed!"
  },
  Smoke:{
    pic:smoke,
    text:"seems like the pollution has hit some smoke"
  }
};
export default weatherBackgrounds;