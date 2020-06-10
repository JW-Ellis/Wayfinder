const fetch = require("node-fetch");
const zipcodes = require("zipcodes");

exports.forecast = async function search(zip) {
  let name;
  let temperature;
  let detail;
  let icon;
  let wind;
  let windDirection;

  try {
    const zipData = zipcodes.lookup(zip);
    const lat = zipData.latitude;
    const lon = zipData.longitude;

    // Test Data
    // const lat = 39.7162;
    // const lon = -105.2098;

    //returns weather url with forecast zone included
    const weatherURL = `https://api.weather.gov/points/${lat},${lon}`;
    const weatherResponse = await fetch(weatherURL);
    const weatherReturn = await weatherResponse.json();

    // Get forecast zone, office
    const weatherForecast = await weatherReturn.properties.forecast;
    const getForecast = await fetch(weatherForecast);
    const forecastJSON = await getForecast.json();
    const forecastParse = await forecastJSON.properties.periods[0];

    // Get forecast data
    name = forecastParse.name;
    temperature = forecastParse.temperature;
    detail = forecastParse.isDaytime;
    icon = forecastParse.icon;
    wind = forecastParse.windSpeed;
    windDirection = forecastParse.windDirection;

    return [name, temperature, detail, icon, wind, windDirection];
  } catch (e) {
    console.log("Forecast error: ", e.message);
  }
};
