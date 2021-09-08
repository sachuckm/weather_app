import "./App.css";
import React, { useState } from "react";
import TextField from "./components/TextField";
import WeatherCard from "./components/weatherCard";
import WeatherForecast from "./components/weatherForecast";
import WeatherDayListItem from "./components/list";

function App() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState("");
  const [data, setWeatherData] = useState({});
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  const checkWeather = () => {
    setLoading(true);
    setWeatherData(null);
    fetch("http://localhost:8080/weather", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        city,
      }),
    })
      .then((response) => response.json())
      .catch((error) => {
        setWeatherData(error);
      })
      .then((data) => {
        setLoading(false);
        setWeatherData(data);
      });
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleDayselection =(index) =>{
      setSelectedDayIndex(index)
  }

  return (
    <div className="App">
      <div className="AppContainer">
        <TextField
          handleChange={handleChange}
          city={city}
          placeholder="Enter City name or pincode!"
        />
        <div>
          <button className="Button" onClick={checkWeather}>
            Check weather
          </button>
        </div>
      </div>
      {loading && <div className="Loader">Loading...</div>}
      <div style={{display: 'flex'}}>
        {data && data.weatherData &&
        <div>
          <WeatherCard data={data.weatherData} />
          <div>
            {data.weatherHourlyData.daily.map((day, index) =>
              <WeatherDayListItem data={day} index={index} onChangeHandle={handleDayselection}/>
            )}
          </div>
         </div>
         }
      {data && data.weatherData && data.weatherHourlyData && <WeatherForecast data={data.weatherHourlyData} selectedDayIndex={selectedDayIndex} />}
      </div>

    </div>
  );
}

export default App;
