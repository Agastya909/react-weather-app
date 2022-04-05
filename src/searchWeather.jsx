import React from "react";

const SearchWeather = (props) => {
  const { updatecity, getweather } = props;
  return (
    <div className="flex flex-col items-center">
      <h1 className="flex-1 text-6xl font-semibold p-6 mb-6">Weatheria</h1>
      <form action="" onSubmit={getweather} className="flex flex-col">
        <input
          className="p-3 m-3 rounded-2xl border-0 text-2xl bg-gray-100"
          placeholder="City"
          onChange={(e) => {
            updatecity(e.target.value);
          }}
        ></input>
        <button
          type="submit"
          className="p-2 mt-1 mb-16 mx-auto rounded-2xl bg-gray-100 w-36 text-3xl font-semibold "
        >
          Go
        </button>
      </form>
    </div>
  );
};

export default SearchWeather;

// const getData = (e) => {
//   e.preventDefault();
//   axios
//     .get(
//       "https://api.openweathermap.org/data/2.5/weather?q=pune&appid=1199330896d34c28f209977df19f3db8&units=metric"
//     )
//     .then((res) => {
//       weatherSetState(res.data);
//       console.log(weather.main.temp);
//       console.log(weather.weather[0].main);
//       console.log(weather.name);
//     })
//     .catch((err) => {
//       console.log("error", err);
//     });
// };
