const express = require('express'); 
const app = express();
const zipcodes = require('zipcodes');
const fetch = require('node-fetch'); 
const trailSearch = require('./trailSearch');  
require('dotenv').config(); 

app.set('view engine', 'ejs'); 


app.get('/', (req, res) => {

    trailSearch.randomTrail(); 

    res.render('index'); 
}); 

app.get('trail', async (req, res) => {
//get zip code and mileage 
    try{

    }

    catch (e) {
        console.log('Trail search error: ', e.message); 
    }

    res.render('trail'); 
})


app.listen(3000, () => console.log('listening at 3000')); 