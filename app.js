const request = require("request");

const WEATHER_URL = `http://api.weatherstack.com/current?access_key=2fa7eff25a46d6466b5a6f84ce1954bc&query=23.0225,72.5714&units=m`;

const COORDIANTES_URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/gfngfngngffg.json?access_token=pk.eyJ1Ijoic291bXlhMjEiLCJhIjoiY2w0NWV1NnVvMDdsZDNkdDNiMGcxZmRhdyJ9.uKGaYQojWiPCD8bLrx2tFA&limit=1`;

request({ url: COORDIANTES_URL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to location service");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find the location");
  } else {
    const [longitude, latitude] =
      response.body.features["0"].geometry.coordinates;
    console.log(longitude, latitude);
  }
});

request({ url: WEATHER_URL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service");
  } else if (response.body.error) {
    console.log("Unable to find the location");
  } else {
    const data = response.body.current;
    console.log(
      `It is currently ${data.temperature}. It feels like ${data.feelslike} outside.`
    );
  }
});
