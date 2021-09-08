import "../styles/weatherCard.css";
import get from "lodash/get";


const getConcertedTemp =(temp) =>{
  return (temp - 273.15).toFixed(1) + '°C'
}
const WeatherDayListItem = ({ data, index, onChangeHandle, time=false }) => {
  let date = new Date(get(data, "dt") * 1000);
  date = time ? date.toTimeString().split(" ")[0] : date.toDateString()

  return (
    <div className="list-item" onClick={() =>onChangeHandle &&  onChangeHandle(index)} >
      <div>{date}</div>
      {time ? <div>{ getConcertedTemp(data.temp)}</div> :<div><span>{getConcertedTemp(data.temp.max)} </span> - <span>{getConcertedTemp(data.temp.min)} </span></div>}

    </div>
  );
};

export default WeatherDayListItem;
