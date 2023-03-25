
'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const getPhotos = require('./modules/photos.js');
const app = express();

app.use(cors());
const PORT = process.env.PORT || 3001;

app.get('/', (request, response) => {
    console.log(request);
    response.status(200).send(request);
    response.status(200).send('Welcome to my Server!');
});

app.listen(PORT, () => console.log(`We are running on port ${PORT}!`));

app.get('/photos', getPhotos);

// *** CATCH ALL - AT THE BOTTOM AND SERVE AS A 404 ERROR MESSAGE
app.get('*', (request, response) => {
  response.status(404).send('This route does not exist');
});

// **** ERROR HANDLING - PLUG AND PLAY CODE FROM EXPRESS DOCS ****
app.use((error, request, response, next) => {
  console.log(error.message);
  response.status(500).send(error.message);
});



app.get('/weather', (request, response, next) => {)

let url = 'http://api.weatherbit.io/v2.0/forecast/daily/?key=1df3370cd0124f7484df5f36bed32ce6&land=en&lat=47.6062&lon=-122.3321&days=5'

// async function getPhotos (request, response, next) {
//     try keywordFromFrontEnd = request.query.keyword;
// }

TODO: BUILD AND ENDPOINT THAT WILL CALL OUT TO AN API
app.get('/photos', async (request, response, next) => {
    try {
        //TODO: accept my queries -> /photos?query=Value
        let keywordFromFrontEnd = request.query.searchQuery};

        //TODO: Build my URL from Axios
        let URL = `https://api.unsplash.com/search/photos?query=${keywordFromFrontEnd}
    }
    }
}
{
            app.length('/weather', (request, response, nest0 => 
    } try {
            // 
            // TODO: accept queries - lat, lon, searchQuery
            let lat = request.query.lat;
            let lon = request.query.lon;
            let cityName = request.query.searchQuery

            console.log(request.query);

            //TODO: Find that city based on cityName

            let city = weather.find(city => city.cityName.toLowerCase() === cityName.toLowerCase());


            response.status(200).send(city);

        } catch (error) {
            next(error);
        }
    });
    }
//TODO: BUILD ANOTHER CLASS TO TRIM DOWN THE DATA
class Photo {
    constructor(picObj){
        this.src = picObj.urls.regular;
        this.alt = picObj.alt_description;
        this.username = picObj.user.name;
    }
}


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
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
    }

