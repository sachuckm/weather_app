import "../styles/weatherCard.css";
import get from "lodash/get";

const WeatherCard = ({ data }) => {
  let date = new Date(get(data, "dt") * 1000);
  return (
    <div className="card">
       <h1 style={{color: 'aquamarine'}}>Current Weather Data</h1>
      <div className="weather-details">
        <div className="weather-logo"></div>
        <div className="location border-line">
          <span>{get(data, "name")}</span>,
          <span>{get(data, "sys.country")}</span>
          <div className="temp">{get(data, "main.temp")}°C</div>
          <div>{get(data, "weather[0].main")}</div>
        </div>

        <div className="card-date-time">
          <span>Last updated at</span>
          <span className="temp">{date.toDateString()}</span>
          <span className="temp">{date.toTimeString().split(" ")[0]}</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
