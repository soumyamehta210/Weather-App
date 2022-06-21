const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const WEATHER_URL = `http://api.weatherstack.com/current?access_key=2fa7eff25a46d6466b5a6f84ce1954bc&query=${latitude},${longitude}&units=m`;
  request({ url: WEATHER_URL, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find the temperature", undefined);
    } else {
      const data = body.current;
      callback(undefined, {
        temp: data.temperature,
      });
    }
  });
};

module.exports = forecast;
