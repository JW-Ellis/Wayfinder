const fetch = require('node-fetch');
const zipcodes = require('zipcodes');

exports.forecast = async function search(zip) {
  let name;
  let temperature;
  let detail;
  let icon;

  try {
    const zipData = zipcodes.lookup(zip);
    const lat = zipData.latitude;
    const lon = zipData.longitude;

    // Test Data
    // const lat = 39.7162;
    // const lon = -105.2098;

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
    detail = forecastParse.detailedForecast;
    icon = forecastParse.icon;

    return [name, temperature, detail, icon];
  } catch (e) {
    console.log('Forecast error: ', e.message);
  }
};
