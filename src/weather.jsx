import humidity from "./icons/humidity.svg";
import wind from "./icons/wind.svg";

const Weather = (props) => {
  const { weather } = props;
  const icon = weather.weather[0].icon;
  const iconUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  return (
    <div className="p-8 mx-auto  border-0 rounded-md bg-gray-100 max-w-max shadow-md">
      <p className="px-4 m-3 text-6xl text-black font-bold">{weather.name}</p>
      <div className="flex flex-col justify-evenly items-baseline">
        <div className="flex flex-row items-center">
          <div className="px-5 m-2 font-bold text-4xl">
            {weather.main.temp}°C
          </div>
          <div className="px-5 m-2 font-normal text-xl">
            {weather.weather[0].description}
          </div>
        </div>
        <div className="px-5 m-2 font-normal text-xl">
          Feels like {weather.main.feels_like}°C
        </div>
        <hr className="border-solid border-gray-700 w-64 m-auto mb-2 mt-6" />
      </div>

      <div className="flex flex-row items-center justify-center">
        <img src={iconUrl} alt="perfect day" className="w-32 h-32"></img>
        {/* <p className="text-3xl font-light pb-5">Clear</p> */}
      </div>
      <div>
        <hr className="border-solid border-gray-700 w-64 m-auto" />
        <div className="flex flex-row items-center justify-around mt-8">
          <div>
            <img src={humidity} alt="humidity" className="w-14 h-14" />
            <div className="p-2">
              <p className="font-light text-xl">{weather.main.humidity}</p>
              <p className="font-thin text-2xl">Humidity</p>
            </div>
          </div>
          <div>
            <img src={wind} alt="humidity" className="w-14 h-14" />
            <div className="p-2">
              <p className="font-light text-xl">{weather.wind.speed}</p>
              <p className="font-thin text-2xl">Wind</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Weather;
