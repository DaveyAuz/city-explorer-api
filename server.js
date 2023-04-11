
'use strict';
const axios = require('axios');
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const getPhotos = require('./modules/photos.js');
const app = express();
const getMovies = require('./modules/movies.js');
const getWeather = require('./modules/weather.js');
const weather = require('./assets/weather.json');


app.use(cors());
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => console.log(`We are running on port ${PORT}!`));  

app.get('/movies', movieHandler);
app.get('/weather', getWeather);

// *** CATCH ALL - AT THE BOTTOM AND SERVE AS A 404 ERROR MESSAGE
app.get('*', (request, response) => {
    response.status(404).send('This route does not exist');
});

// **** ERROR HANDLING - PLUG AND PLAY CODE FROM EXPRESS DOCS ****
app.use((error, request, response, next) => {
    console.log('this is the error', error.message);
    response.status(500).send(error.message);
});

function movieHandler(request, response, next) {
    getMovies(request, response, next)
    //async (summaries => response.send(summaries))
    .catch((error) => {
        console.log('this is the error', error.message);
        response.status(500).send('Movies are unavailable');
    });
};

app.get('/', (request, response) => {
    let req = request.query.name
    console.log('this is the request.query', request.query)
    console.log(request);
    response.status(200).send(request);
    response.status(200).send('Welcome to My Server');
});

// let weatherCache = {};
// async function getWeather(request, response, next) {
//         //console.log('getWeather')// try {
//         console.log(request.query);
//         const city = request.query.searchQuery;
//         const key = process.env.REACT_APP_WEATHERBIT_API_KEY;
//         const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${process.env.REACT_APP_WEATHERBIT_API_KEY}`;
//         console.log('this is the url', url);
//         const weather = await axios.get(url);
//         response.status(200).send(weather.data);   
// }
// function weatherHandler(request, response, next) {
//     console.log(request.query);
//     let cityName =request.query.searchQuery;
//     let city = weather.find((city) => city.city_name.toLowerCase() === cityName.toLowerCase());
//     console.log(request.query);
//     response.send(city);
// };  

// class forecast {
//     constructor(data) {
//         this.data = data;
//     } else {
//         this.data = [];
//         this.data.push(data);
        





























// function weatherHandler(request, response, next) {
//     const { lat, lon } = request.query;
//     weather(request, response, next)
//     async (summaries => response.send(summaries))
//     .catch((error) => {
//         console.error(error);
//         response.status(500).send(`Sorry. Something isn't right!`);
//     });
    
//     //let lat = request.query.lat;
//     //let lon = request.query.lon;
//     let cityName = request.query.searchQuery
//     let city = weather.find(city => city.cityName.toLowerCase() === cityName.toLowerCase());
//     console.log(request.query);
// }

// /app.get('/weather', (request, response, next) => {
    
    //     let url = 'http://api.weatherbit.io/v2.0/forecast/daily/?key=1df3370cd0124f7484df5f36bed32ce6&land=en&lat=47.6062&lon=-122.3321&days=5'
    //     // async function getPhotos (request, response, next) {
//     //     try keywordFromFrontEnd = request.query.keyword;
//     // }
// })
// // TODO: BUILD AND ENDPOINT THAT WILL CALL OUT TO AN API
// app.get('/photos', async (request, response, next) => {

//     //TODO: accept my queries -> /photos?query=Value
//     let keywordFromFrontEnd = request.query.searchQuery;

//     //TODO: Build my URL from Axios
//     let URL = `https://api.unsplash.com/search/photos?query=${keywordFromFrontEnd}`;
// })

// app.get('/weather', (request, response, next) => {

// TODO: accept queries - lat, lon, searchQuery
     

//     //TODO: Find that city based on cityName

     


//     response.status(200).send(city);

// });

// //TODO: BUILD ANOTHER CLASS TO TRIM DOWN THE DATA
// class Photo {
//     constructor(picObj) {
//         this.src = picObj.urls.regular;
//         this.alt = picObj.alt_description;
//         this.username = picObj.user.name;
//     }
// }

// // TODO: MOVIE DATA
// // Get Movie Data
// app.get('/movie', getMovies);
// app.get('*', (req, res) => {
//     res.status.send('The resource does not exist');
// });

// //ERRORS
// //handle all the errors
// app.use((error, request, response) => {
//     console.log(error.message);
//     response.status(500).send(error.message);
// });
// do {
// } while (condition);
// //TODO: Build my Class To Groom This Data 
// // *** CLASS THE GROOM BULKY DATA ***
// class Forecast {
//     constructor(dayObject) {
//         this.date = dayObject.valid_date;
//         this.description = dayObject.weather.description;
//     }
// }

// module.exports = getPhotos;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// })


