const fetch = require('node-fetch'); 
const zipcodes = require('zipcodes');


exports.forecast = async function search(){

let name; 
let temperature; 
let detail; 
let icon; 

    try {
        //let zipData = zipcodes.lookup(zip); 
        //let lat = zipData.latitude; 
        //let lon = zipData.longitude;

        let lat = 39.7162; 
        let lon = -105.2098; 
        
        const weatherURL = `https://api.weather.gov/points/${lat},${lon}`; 
        let weatherResponse = await fetch(weatherURL); 
        let weatherReturn = await weatherResponse.json(); 

        //Get forecast zone, office
        let weatherForecast = await weatherReturn.properties.forecast; 
        let getForecast = await fetch(weatherForecast); 
        let forecastJSON = await getForecast.json(); 
        let forecastParse = await forecastJSON.properties.periods[0]; 

        //Get forecast data
        name = forecastParse.name; 
        temperature = forecastParse.temperature; 
        detail = forecastParse.detailedForecast; 
        icon = forecastParse.icon; 

        return [name, temperature, detail, icon]; 



    }

    catch(e) {
        console.log('Forecast error: ', e.message); 
    }
}