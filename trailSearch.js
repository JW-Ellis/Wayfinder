const fetch = require('node-fetch');
const zipcodes = require('zipcodes');
require('dotenv').config();

const hikeKey = process.env.HIKINGKEY;

exports.randomTrail = async function search(zip, length) {
  // test variables
  // let lat = 40.027;
  // let lon = -105.2519;
  // let length = 0;

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
    console.log(trailRandom);

    // Test Data
    // const trailRandom = {
    //   id: 7029252,
    //   name: 'Apex-Enchanted Lollipop',
    //   type: 'Featured Hike',
    //   summary: 'This is one of the best hikes on the Front Range.',
    //   difficulty: 'blue',
    //   stars: 4.2,
    //   starVotes: 58,
    //   location: 'West Pleasant View, Colorado',
    //   url:
    //     'https://www.hikingproject.com/trail/7029252/apex-enchanted-lollipop',
    //   imgSqSmall:
    //     'https://cdn-files.apstatic.com/hike/7004559_sqsmall_1554245622.jpg',
    //   imgSmall:
    //     'https://cdn-files.apstatic.com/hike/7004559_small_1554245622.jpg',
    //   imgSmallMed:
    //     'https://cdn-files.apstatic.com/hike/7004559_smallMed_1554245622.jpg',
    //   imgMedium:
    //     'https://cdn-files.apstatic.com/hike/7004559_medium_1554245622.jpg',
    //   length: 5.7,
    //   ascent: 1179,
    //   descent: -1179,
    //   high: 7312,
    //   low: 6172,
    //   longitude: -105.2098,
    //   latitude: 39.7162,
    //   conditionStatus: 'Minor Issues',
    //   conditionDetails:
    //     'Muddy, Snowy, Icy: Packed snow for most of the Apex trail. Enchanted Forest section is mostly ice and traction is recommended.',
    //   conditionDate: '2019-12-22 17:30:15',
    // };

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
