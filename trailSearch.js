const fetch = require('node-fetch'); 
const zipcodes = require('zipcodes');
require('dotenv').config() ;

const hikeKey = process.env.HIKINGKEY; 

exports.randomTrail = async function search(zip, length){

//test variables 
//let lat = 40.027; 
//let lon = -105.2519; 
//let length = 0; 

let trailName;
let trailSummary;
let trailDifficulty;
let trailStars;
let trailLocation; 
let trailImg; 
let trailLength;
let trailClimb;
let trailDecline;
let trailHigh;
let trailLow;
let trailCondition;


    try {

        let zipData = zipcodes.lookup(zip); 
        let lat = zipData.latitude; 
        let lon = zipData.longitude;


        //fetch random trail data with given paramaters 
        const hpURL = `https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&minLength=${length}&key=${hikeKey}`; 
        let hpResponse = await fetch(hpURL); 
        let hpData = await hpResponse.json(); 
        let trailParse = hpData.trails; 
        let resultsLength = trailParse.length; 
        let trailSelect = (Math.floor(Math.random() * resultsLength)); 
        let trailRandom = (trailParse[trailSelect]); 
        
        //parse trail json data
        trailName = trailRandom.name;
        trailSummary = trailRandom.summary;
        trailDifficulty = trailRandom.difficulty; 
        trailStars = trailRandom.stars; 
        trailLocation = trailRandom.location;
        trailImg = trailRandom.imgMedium; 
        trailLength = trailRandom.length;
        trailClimb = trailRandom.ascent; 
        trailDecline = trailRandom.descent; 
        trailHigh = trailRandom.high; 
        trailLow = trailRandom.low; 
        trailCondition = trailRandom.conditionDetails; 

        return [trailName, trailSummary, trailDifficulty, trailStars, trailLocation, trailImg, trailLength, trailClimb, trailDecline,
        trailHigh, trailLow, trailCondition];  
    }

    catch(e) {
        console.log('Hiking Project error: ', e.message); 
    }
}