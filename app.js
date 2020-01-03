const express = require('express');

const app = express();
const zipcodes = require('zipcodes');
const fetch = require('node-fetch');
const trailSearch = require('./trailSearch');
const weatherSearch = require('./weatherSearch');
require('dotenv').config();

app.set('view engine', 'ejs');
app.use(express.static('img'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/trail', async (req, res) => {
  let trailData;
  let forecast;

  try {
    const { zip } = req.query;
    const length = req.query.distance;
    trailData = await trailSearch.randomTrail(zip, length);
    forecast = await weatherSearch.forecast(zip);
  } catch (e) {
    console.log('Trail search error: ', e.message);
  }

  res.render('trail', { trailData, forecast });
});

app.listen(3000, () => console.log('listening at 3000'));
