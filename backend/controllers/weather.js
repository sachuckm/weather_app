var request = require("request");

exports.getWeatherData = (req, res, next) => {
  const apikey = "dbd3b02d8958d62185d02e944cd5f522";
  const city = req.body.city;
  const uri = "https://api.openweathermap.org/data/2.5/";
  const locationDataUri =`${uri}weather?q=${city}&units=metric&APPID=${apikey}`;


request(locationDataUri, (error, response, body) => {
    const parsedbody = JSON.parse(body);
    if (response.statusCode === 200) {
      console.log('weather success')
      const {lat, lon} = parsedbody.coord
      const finalUri = `${uri}onecall?lat=${lat}&lon=${lon}&exclude=minutely,current&APPID=${apikey}`;

      request(finalUri, (error, response, body) => {
        const parsedHourlyData = JSON.parse(body);
          if (response.statusCode === 200) {
            res.status(200).json({
            weatherHourlyData: parsedHourlyData,
            weatherData: parsedbody
        });
      }
    if (response.statusCode !== 200) {
      res.status(404).json({
        status: response.statusCode,
        message: parsedHourlyData,
      });
    }
  });
    }
    if (response.statusCode !== 200) {
      res.status(404).json({
        status: response.statusCode,
        message: parsedbody,
      });
    }
  });


};
