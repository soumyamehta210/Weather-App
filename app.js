const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

if (process.argv) {
  geocode(process.argv[2], (error, { latitude, longitude, placeName } = {}) => {
    if (error) {
      return console.log(error);
    }
    console.log(placeName + " " + longitude + " " + latitude);
    forecast(latitude, longitude, (forecaseError, { temp }) => {
      if (forecaseError) {
        return console.log(forecaseError);
      }
      console.log(temp);
    });
  });
} else {
  console.log("Please Enter A  Location");
}
