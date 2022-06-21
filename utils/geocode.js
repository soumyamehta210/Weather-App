const request = require("request");

const geocode = (location, callback) => {
  const COORDIANTES_URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1Ijoic291bXlhMjEiLCJhIjoiY2w0NWV1NnVvMDdsZDNkdDNiMGcxZmRhdyJ9.uKGaYQojWiPCD8bLrx2tFA&limit=1`;
  request({ url: COORDIANTES_URL, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location service", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find the location", undefined);
    } else {
      const [longitude, latitude] = body.features["0"].geometry.coordinates;
      callback(undefined, {
        placeName: body.features["0"].place_name,
        longitude: longitude,
        latitude: latitude,
      });
    }
  });
};

module.exports = geocode;
