const fetch = require('node-fetch');
const zipcodes = require('zipcodes');
require('dotenv').config();

const hikeKey = process.env.HIKINGKEY;

exports.randomTrail = async function search(zip, length) {
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
    const zipData = zipcodes.lookup(zip);
    const lat = zipData.latitude;
    const lon = zipData.longitude;

    // fetch random trail data with given paramaters
    const hpURL = `https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&minLength=${length}&key=${hikeKey}`;
    const hpResponse = await fetch(hpURL);
    const hpData = await hpResponse.json();
    const trailParse = hpData.trails;
    const resultsLength = trailParse.length;
    const trailSelect = Math.floor(Math.random() * resultsLength);
    const trailRandom = trailParse[trailSelect];

    // Get trail json data
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

    return [
      trailName,
      trailSummary,
      trailDifficulty,
      trailStars,
      trailLocation,
      trailImg,
      trailLength,
      trailClimb,
      trailDecline,
      trailHigh,
      trailLow,
      trailCondition,
    ];
  } catch (e) {
    console.log('Hiking Project error: ', e.message);
  }
};
