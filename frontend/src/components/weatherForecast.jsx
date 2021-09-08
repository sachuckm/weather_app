import "../styles/weatherCard.css";
import get from "lodash/get";
import WeatherDayListItem from './list'

const WeatherCard = ({ data,selectedDayIndex = 0 }) => {
  let date = new Date(get(data, "dt") * 1000);
  const hourly = data.hourly
  let start = selectedDayIndex === 0 ? 0 : 24;
  let end = selectedDayIndex === 0 ? 24: 47;

  const hourlyData = hourly.filter((item, index)=>{
  return index >= start && index < end + start ;
})
  return (
    <>
    {selectedDayIndex === 0 || selectedDayIndex === 1 ?
    <div className="card">
      <h1 style={{color: 'aquamarine'}}>Forecast Weather Data</h1>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>{hourlyData.map((hour, index) => <WeatherDayListItem time={true} data={hour} index={index} />)  }</div>
    </div > : <div  className="card"> <h2 style={{color: 'aquamarine'}}>No Data to show</h2> </div>}
    </>
  );
};

export default WeatherCard;
