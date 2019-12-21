const fetch = require('node-fetch'); 
require('dotenv').config() ;

const hikeKey = process.env.HIKINGKEY; 

exports.randomTrail = async function search(){

//test variables 
let lat = 40.027; 
let lon = -105.2519; 
let length = 0; 

    try {
        const hpURL = `https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&minLength=${length}&key=${hikeKey}`; 
        let hpResponse = await fetch(hpURL); 
        let hpData = await hpResponse.json(); 
        let trailParse = hpData.trails; 
        let resultsLength = trailParse.length; 
        let trailSelect = (Math.floor(Math.random() * resultsLength + 1)); 
        
    }

    catch(e) {
        console.log('Hiking Project error: ', e.message); 
    }
}